<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type RecentlyUpdatedItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="recently-updated"
		layout="stack"
	/>
</template>
