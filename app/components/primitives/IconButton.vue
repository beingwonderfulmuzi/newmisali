<script setup lang="ts">
withDefaults(defineProps<{
	label: string;
	type?: `button` | `submit` | `reset`;
	disabled?: boolean;
	variant?: `default` | `ghost`;
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
