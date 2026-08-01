<script setup lang="ts">
export interface IfYouLikeThisItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: IfYouLikeThisItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="if-you-like-this">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="if-you-like-this__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="if-you-like-this__item"
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
