<script setup lang="ts">
type ButtonVariant = `primary` | `tonal` | `outlined` | `text` | `secondary` | `ghost`;
type ButtonSize = `sm` | `md` | `lg`;

const props = withDefaults(defineProps<{
	type?: `button` | `submit` | `reset`;
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	loading?: boolean;
}>(), {
	type: `button`,
	variant: `primary`,
	size: `md`,
	disabled: false,
	loading: false,
});

const isDisabled = computed(() => props.disabled || props.loading);
</script>

<template>
	<button
		:type="type"
		class="btn"
		:class="[
			variant !== 'primary' && `btn--${variant}`,
			size !== 'md' && `btn--${size}`,
		]"
		:disabled="isDisabled"
		:aria-disabled="isDisabled || undefined"
		:aria-busy="loading || undefined"
	>
		<span
			v-if="loading"
			class="btn__spinner"
			aria-hidden="true"
		/>
		<VisuallyHidden v-if="loading">
			Loading
		</VisuallyHidden>
		<slot />
	</button>
</template>
