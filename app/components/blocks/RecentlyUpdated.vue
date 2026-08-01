<script setup lang="ts">
export interface RecentlyUpdatedItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: RecentlyUpdatedItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="recently-updated">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="recently-updated__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="recently-updated__item"
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
