<script setup lang="ts">
export interface TopicExplorerItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: TopicExplorerItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="topic-explorer">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="topic-explorer__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="topic-explorer__item"
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
