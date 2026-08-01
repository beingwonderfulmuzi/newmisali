<script setup lang="ts">
withDefaults(defineProps<{
	variant?: `default` | `success` | `warning` | `danger` | `info`;
}>(), { variant: `default` });
</script>

<template>
	<span
		class="badge"
		:class="variant !== 'default' && `badge--${variant}`"
	><slot /></span>
</template>
