<script setup lang="ts">
export interface ContinueLearningItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: ContinueLearningItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="continue-learning">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="continue-learning__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="continue-learning__item"
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
