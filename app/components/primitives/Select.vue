<script setup lang="ts">
import type { FieldProps, SelectOption } from './primitive.types';

export type { SelectOption };

const model = defineModel<string>({ default: `` });
defineProps<FieldProps & { options: SelectOption[] }>();
</script>

<template>
	<Field
		:id="id"
		:label="label"
		:hint="hint"
		:disabled="disabled"
		:required="required"
	>
		<select
			:id="id"
			v-model="model"
			class="field__select"
			:disabled="disabled"
			:required="required"
		>
			<option
				v-for="option in options"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</option>
		</select>
	</Field>
</template>
