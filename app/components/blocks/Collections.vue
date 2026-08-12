<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type CollectionsItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="collections"
		layout="grid"
	/>
</template>
