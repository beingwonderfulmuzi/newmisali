<script setup lang="ts">
export interface FeaturedSeriesItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: FeaturedSeriesItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="featured-series">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="featured-series__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="featured-series__item"
			>
				<ContentCard
					:title="item.title"
					:description="item.description"
					:to="item.to"
					:eyebrow="item.meta"
				/>
			</li>
		</ul>
	</section>
</template>
