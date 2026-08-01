<script setup lang="ts">
export interface CollectionsItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: CollectionsItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="collections">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="collections__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="collections__item"
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
