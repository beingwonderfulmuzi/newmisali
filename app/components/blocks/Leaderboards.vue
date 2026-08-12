<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type LeaderboardsItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="leaderboards"
		layout="stack"
	/>
</template>
