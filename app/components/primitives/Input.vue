<script setup lang="ts">
import type { FieldProps } from './primitive.types';

const model = defineModel<string>({ default: `` });
defineProps<FieldProps & {
	type?: string;
	placeholder?: string;
	autocomplete?: string;
}>();
</script>

<template>
	<Field
		:id="id"
		:label="label"
		:hint="hint"
		:disabled="disabled"
		:required="required"
	>
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
	</Field>
</template>
