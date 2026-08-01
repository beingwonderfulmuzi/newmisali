<script setup lang="ts">
const model = defineModel<string>({ default: `` });
withDefaults(defineProps<{ id?: string; placeholder?: string; label?: string }>(), {
	id: `site-search`,
	placeholder: `Search questions…`,
	label: `Search`,
});
</script>

<template>
	<div class="search-box">
		<label
			class="visually-hidden"
			:for="id"
		>{{ label }}</label>
		<span
			class="search-box__icon"
			aria-hidden="true"
		>⌕</span>
		<input
			:id="id"
			v-model="model"
			class="search-box__input"
			type="search"
			:placeholder="placeholder"
		>
	</div>
</template>
