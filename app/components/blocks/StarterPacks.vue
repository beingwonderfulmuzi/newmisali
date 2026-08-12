<script setup lang="ts">
import type { BlockCardItem, BlockCardListProps } from './block.types';

export type StarterPacksItem = BlockCardItem;
defineProps<BlockCardListProps>();
</script>

<template>
	<BaseContentCardList
		:items="items"
		:title="title"
		:description="description"
		namespace="starter-packs"
		layout="grid"
	/>
</template>
