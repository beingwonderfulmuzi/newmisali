<script setup lang="ts">
import type { DecisionTreeNode } from '~/features/templates/template.types';

export interface DecisionTreeItem { id: string; title: string; root: DecisionTreeNode }
defineProps<{ items: DecisionTreeItem[]; title?: string }>();
</script>

<template>
	<section class="decision-trees">
		<SectionHeading
			v-if="title"
			:title="title"
		/>
		<ul class="decision-trees__list">
			<li
				v-for="tree in items"
				:key="tree.id"
			>
				<DecisionTree
					:title="tree.title"
					:root="tree.root"
				/>
			</li>
		</ul>
	</section>
</template>
