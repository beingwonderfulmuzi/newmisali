<script setup lang="ts">
import { galleryMedia } from '~/data/media';

const category = ref(`All`);
const options = [{ id: `All`, label: `All moments` }, ...[...new Set(galleryMedia.map(item => item.category))].map(name => ({ id: name, label: name })), { id: `Films`, label: `Films` }];
const filtered = computed(() => galleryMedia.filter(item => category.value === `All` || (category.value === `Films` ? item.type === `video` : item.category === category.value)));
const openViewer = useImageViewer();
const photoItems = computed(() => filtered.value.filter(item => item.type === `image`));
</script>

<template>
	<div class="school-gallery">
		<div class="gallery-toolbar">
			<InteractiveFilters
				v-model="category"
				:options="options"
				label="Filter school media"
			/><p
				class="small-note"
				role="status"
			>
				{{ filtered.length }} moments
			</p>
		</div>
		<div class="gallery-grid">
			<div
				v-for="item in filtered"
				:key="item.id"
				class="gallery-tile"
			>
				<button
					v-if="item.type === 'image'"
					type="button"
					class="gallery-photo"
					:aria-label="`View photograph: ${item.caption}`"
					@click="openViewer?.(item, $event, photoItems)"
				>
					<img
						:src="item.src"
						:alt="item.alt"
						:width="item.width"
						:height="item.height"
						loading="lazy"
					><span
						class="gallery-photo__expand"
						aria-hidden="true"
					>↗</span>
				</button>
				<VideoPlayer
					v-else
					:item="item"
				/>
				<p
					v-if="item.type === 'image'"
					class="gallery-caption"
				>
					{{ item.caption }}
				</p><span class="gallery-category">{{ item.category }} / {{ item.type === 'image' ? 'Photograph' : 'Film' }}</span>
			</div>
		</div>
	</div>
</template>
