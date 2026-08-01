<script setup lang="ts">
export interface StarterPacksItem {
	id: string;
	title: string;
	description?: string;
	to?: string;
	meta?: string;
}
defineProps<{ items: StarterPacksItem[]; title?: string; description?: string }>();
</script>

<template>
	<section class="starter-packs">
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul class="starter-packs__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="starter-packs__item"
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
