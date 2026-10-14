<script setup lang="ts">
import type { ButtonSize, ButtonVariant } from './primitive.types';

const props = withDefaults(defineProps<{
	type?: `button` | `submit` | `reset`;
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	loading?: boolean;
	to?: string;
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
	<NuxtLink
		v-if="to"
		:to="to"
		class="btn"
		:class="[variant !== 'primary' && `btn--${variant}`, size !== 'md' && `btn--${size}`]"
	>
		<slot />
	</NuxtLink>
	<button
		v-else
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
