<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type FeaturedSeriesItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="featured-series"
		layout="grid"
	/>
</template>
