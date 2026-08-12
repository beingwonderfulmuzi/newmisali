<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type TopicExplorerItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="topic-explorer"
		layout="grid"
	/>
</template>
