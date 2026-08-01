<script setup lang="ts">
export interface SelectOption { value: string; label: string }
const model = defineModel<string>({ default: `` });
defineProps<{ id: string; label: string; options: SelectOption[]; hint?: string; disabled?: boolean; required?: boolean }>();
</script>

<template>
	<div class="field">
		<label
			class="field__label"
			:for="id"
		>{{ label }}</label>
		<select
			:id="id"
			v-model="model"
			class="field__select"
			:disabled="disabled"
			:required="required"
		>
			<option
				v-for="opt in options"
				:key="opt.value"
				:value="opt.value"
			>
				{{ opt.label }}
			</option>
		</select>
		<p
			v-if="hint"
			class="field__hint"
		>
			{{ hint }}
		</p>
	</div>
</template>
