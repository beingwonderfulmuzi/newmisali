<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type ReadingPathsItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="reading-paths"
		layout="grid"
	/>
</template>
