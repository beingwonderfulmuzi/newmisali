<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type ReadingTimeBundlesItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="reading-time-bundles"
		layout="grid"
	/>
</template>
