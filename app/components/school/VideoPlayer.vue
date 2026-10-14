<script setup lang="ts">
import type { SchoolMedia } from '~/data/media';

defineProps<{ item: SchoolMedia }>();
const started = ref(false);
const failed = ref(false);
const player = ref<HTMLVideoElement>();
async function play() {
	started.value = true;
	await nextTick();
	try {
		await player.value?.play();
	}
	catch { /* Native controls remain available. */ }
}
onBeforeUnmount(() => player.value?.pause());
</script>

<template>
	<figure
		class="school-video"
		:class="{ 'school-video--portrait': item.height > item.width }"
	>
		<button
			v-if="!started"
			class="school-video__poster"
			type="button"
			:aria-label="`Play ${item.caption}`"
			@click="play"
		>
			<img
				:src="item.poster"
				:alt="item.alt"
				:width="item.width"
				:height="item.height"
				loading="lazy"
			>
			<span
				class="play-disc"
				aria-hidden="true"
			>▶</span><span class="video-label">Watch video <span aria-hidden="true">↗</span></span>
		</button>
		<video
			v-else
			ref="player"
			:src="item.src"
			:poster="item.poster"
			:width="item.width"
			:height="item.height"
			controls
			playsinline
			preload="none"
			:aria-label="item.caption"
			@error="failed = true"
		/>
		<figcaption>{{ item.caption }}</figcaption>
		<p
			v-if="failed"
			role="alert"
		>
			This video could not be played. Please try another video in the gallery.
		</p>
	</figure>
</template>
