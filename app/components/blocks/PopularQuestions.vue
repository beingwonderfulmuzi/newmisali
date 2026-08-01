<script setup lang="ts">
export interface PopularQuestionsItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: PopularQuestionsItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="popular-questions">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="popular-questions__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="popular-questions__item"
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
