<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type IfYouLikeThisItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="if-you-like-this"
		layout="grid"
	/>
</template>
