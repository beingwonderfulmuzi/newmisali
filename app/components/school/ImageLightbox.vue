<script setup lang="ts">
import type { SchoolMedia } from '~/data/media';
import type { ImageViewerOpen } from '~/composables/useImageViewer';

const selected = ref<SchoolMedia>();
const items = ref<SchoolMedia[]>([]);
const zoomed = ref(false);
const dialog = ref<HTMLDialogElement>();
const trigger = ref<HTMLElement>();
const closeButton = ref<HTMLButtonElement>();
const stage = ref<HTMLElement>();
const index = computed(() => items.value.findIndex(item => item.id === selected.value?.id));
const open: ImageViewerOpen = async (item, event, collection = [item]) => {
	trigger.value = event.currentTarget as HTMLElement;
	items.value = collection.filter(photo => photo.type === `image`);
	selected.value = item;
	zoomed.value = false;
	await nextTick();
	dialog.value?.showModal();
	closeButton.value?.focus();
};
function close(restoreFocus = true) {
	dialog.value?.close();
	selected.value = undefined;
	zoomed.value = false;
	if (restoreFocus && trigger.value?.isConnected) trigger.value.focus({ preventScroll: true });
}
function step(direction: number) {
	if (!items.value.length) return;
	selected.value = items.value[(index.value + direction + items.value.length) % items.value.length];
	zoomed.value = false;
	stage.value?.scrollTo(0, 0);
}
function keydown(event: KeyboardEvent) {
	if (event.key === `ArrowRight` || event.key === `ArrowLeft`) {
		event.preventDefault();
		step(event.key === `ArrowRight` ? 1 : -1);
	}
}
const route = useRoute();
watch(() => route.path, () => close(false));
onBeforeUnmount(() => dialog.value?.close());
defineExpose({ open });
</script>

<template>
	<dialog
		ref="dialog"
		class="gallery-lightbox"
		aria-label="School photograph viewer"
		@cancel.prevent="close()"
		@keydown="keydown"
		@click="event => { if (event.target === dialog) close(); }"
	>
		<div
			v-if="selected"
			class="gallery-lightbox__content"
		>
			<div class="lightbox-bar">
				<span>{{ index + 1 }} / {{ items.length }}</span>
				<button
					type="button"
					class="lightbox-control"
					:aria-pressed="zoomed"
					@click="zoomed = !zoomed"
				>
					{{ zoomed ? 'Fit image' : 'Zoom in' }}
				</button>
				<button
					ref="closeButton"
					type="button"
					class="lightbox-control"
					autofocus
					@click="close()"
				>
					Close ×
				</button>
			</div>
			<div
				ref="stage"
				class="image-viewer__stage"
				:class="{ 'is-zoomed': zoomed }"
			>
				<img
					:src="selected.src"
					:alt="selected.alt"
					:width="selected.width"
					:height="selected.height"
				>
			</div>
			<div class="lightbox-bar">
				<button
					v-if="items.length > 1"
					type="button"
					class="lightbox-control"
					aria-label="Previous photograph"
					@click="step(-1)"
				>
					← Previous
				</button>
				<p>{{ selected.caption }}</p>
				<button
					v-if="items.length > 1"
					type="button"
					class="lightbox-control"
					aria-label="Next photograph"
					@click="step(1)"
				>
					Next →
				</button>
			</div>
		</div>
	</dialog>
</template>
