<script setup lang="ts">
export interface TimelinesItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: TimelinesItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="timelines">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="timelines__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="timelines__item"
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
