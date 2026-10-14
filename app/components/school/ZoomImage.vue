<script setup lang="ts">
import type { SchoolMedia } from '~/data/media';

withDefaults(defineProps<{ item: SchoolMedia; priority?: boolean }>(), { priority: false });
const openViewer = useImageViewer();
</script>

<template>
	<button
		type="button"
		class="zoom-image"
		:aria-label="`Enlarge photograph: ${item.alt}`"
		aria-haspopup="dialog"
		@click="openViewer?.(item, $event)"
	>
		<img
			:src="item.src"
			:alt="item.alt"
			:width="item.width"
			:height="item.height"
			:loading="priority ? 'eager' : 'lazy'"
			:fetchpriority="priority ? 'high' : 'auto'"
		>
		<span
			class="zoom-image__hint"
			aria-hidden="true"
		>Enlarge ↗</span>
	</button>
</template>
