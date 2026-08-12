<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type ContinueLearningItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="continue-learning"
		layout="stack"
	/>
</template>
