<script setup lang="ts">
withDefaults(defineProps<{ width?: string; height?: string }>(), { width: `100%`, height: `1rem` });
</script>

<template>
	<div
		class="skeleton"
		aria-hidden="true"
		:style="{ width, height }"
	/>
</template>
