<script setup lang="ts">
import type { ImageViewerOpen } from '~/composables/useImageViewer';

const { theme } = useSchoolTheme();
const imageViewer = ref<{ open: ImageViewerOpen }>();
provide<ImageViewerOpen>(`school-image-viewer`, (item, event, collection) => imageViewer.value?.open(item, event, collection));
useHead(() => ({ htmlAttrs: { 'data-theme': theme.value } }));
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<ImageLightbox ref="imageViewer" />
</template>
