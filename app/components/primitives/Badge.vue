<script setup lang="ts">
import type { BadgeVariant } from './primitive.types';

withDefaults(defineProps<{
	variant?: BadgeVariant;
}>(), { variant: `default` });
</script>

<template>
	<span
		class="badge"
		:class="variant !== 'default' && `badge--${variant}`"
	><slot /></span>
</template>
