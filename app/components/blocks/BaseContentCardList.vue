<script setup lang="ts">
import type { BlockCardItem, BlockCardListLayout } from './block.types';

withDefaults(defineProps<{
	items: BlockCardItem[];
	namespace: string;
	title?: string;
	description?: string;
	layout?: BlockCardListLayout;
}>(), {
	layout: `grid`,
});
</script>

<template>
	<section
		class="content-card-list"
		:class="[`content-card-list--${layout}`, namespace]"
	>
		<SectionHeading
			v-if="title"
			:title="title"
			:description="description"
		/>
		<ul
			class="content-card-list__list"
			:class="`${namespace}__list`"
		>
			<li
				v-for="item in items"
				:key="item.id"
				class="content-card-list__item"
				:class="`${namespace}__item`"
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
