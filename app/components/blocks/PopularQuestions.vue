<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type PopularQuestionsItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="popular-questions"
		layout="grid"
	/>
</template>
