<script setup lang="ts">
const model = defineModel<string>({ default: `` });
defineProps<{ id: string; label: string; type?: string; placeholder?: string; hint?: string; disabled?: boolean; required?: boolean; autocomplete?: string }>();
</script>

<template>
	<div class="field">
		<label
			class="field__label"
			:for="id"
		>{{ label }}</label>
		<input
			:id="id"
			v-model="model"
			class="field__input"
			:type="type || 'text'"
			:placeholder="placeholder"
			:disabled="disabled"
			:required="required"
			:autocomplete="autocomplete"
		>
		<p
			v-if="hint"
			class="field__hint"
		>
			{{ hint }}
		</p>
	</div>
</template>
