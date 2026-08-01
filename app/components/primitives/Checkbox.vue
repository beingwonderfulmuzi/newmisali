<script setup lang="ts">
const model = defineModel<boolean>({ default: false });
defineProps<{ id: string; label: string; disabled?: boolean }>();
</script>

<template>
	<label
		class="checkbox"
		:for="id"
	>
		<input
			:id="id"
			v-model="model"
			class="checkbox__input"
			type="checkbox"
			:disabled="disabled"
		>
		<span class="checkbox__label"><slot>{{ label }}</slot></span>
	</label>
</template>
