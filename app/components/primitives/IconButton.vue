<script setup lang="ts">
import type { IconButtonVariant } from './primitive.types';

withDefaults(defineProps<{
	label: string;
	type?: `button` | `submit` | `reset`;
	disabled?: boolean;
	variant?: IconButtonVariant;
}>(), {
	type: `button`,
	disabled: false,
	variant: `default`,
});
</script>

<template>
	<button
		:type="type"
		class="icon-button"
		:class="variant === 'ghost' && 'icon-button--ghost'"
		:disabled="disabled"
		:aria-label="label"
	>
		<slot />
	</button>
</template>
