<script setup lang="ts">
export interface GalleryItem { id: string; caption?: string }
defineProps<{ items: GalleryItem[]; title?: string }>();
</script>

<template>
	<section class="visual-galleries">
		<SectionHeading
			v-if="title"
			:title="title"
		/>
		<ul class="visual-galleries__grid">
			<li
				v-for="item in items"
				:key="item.id"
				class="visual-galleries__item"
			>
				<slot :name="item.id" />
				<p
					v-if="item.caption"
					class="visual-galleries__caption"
				>
					{{ item.caption }}
				</p>
			</li>
		</ul>
	</section>
</template>
