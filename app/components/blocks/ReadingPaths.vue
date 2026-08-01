<script setup lang="ts">
export interface ReadingPathsItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: ReadingPathsItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="reading-paths">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="reading-paths__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="reading-paths__item"
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
