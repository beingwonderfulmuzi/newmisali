<script setup lang="ts">
export interface LeaderboardsItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: LeaderboardsItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="leaderboards">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="leaderboards__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="leaderboards__item"
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
