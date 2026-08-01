<script setup lang="ts">
export interface ReadingTimeBundlesItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: ReadingTimeBundlesItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="reading-time-bundles">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="reading-time-bundles__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="reading-time-bundles__item"
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
