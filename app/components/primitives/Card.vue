<script setup lang="ts">
type CardVariant = `default` | `informational` | `featured` | `success` | `warning`;

withDefaults(defineProps<{
	raised?: boolean;
	tag?: string;
	variant?: CardVariant;
}>(), {
	raised: false,
	tag: `div`,
	variant: `default`,
});
</script>

<template>
	<component
		:is="tag"
		class="card"
		:class="[
			raised && 'card--raised',
			variant !== 'default' && `card--${variant}`,
		]"
	>
		<slot />
	</component>
</template>
