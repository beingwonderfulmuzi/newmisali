<script setup lang="ts">
import type { DecisionTreeNode } from '~/features/templates/template.types';

const props = defineProps<{ title?: string; root: DecisionTreeNode }>();
const emit = defineEmits<{ select: [node: DecisionTreeNode] }>();

const activeId = ref(props.root.id);

function flattenNodes(node: DecisionTreeNode, depth = 0): Array<{ node: DecisionTreeNode; depth: number }> {
	const items = [{ node, depth }];
	if (node.children) {
		for (const child of node.children) {
			items.push(...flattenNodes(child, depth + 1));
		}
	}
	return items;
}

const flatNodes = computed(() => flattenNodes(props.root));

function selectNode(node: DecisionTreeNode, event: KeyboardEvent | MouseEvent) {
	if (node.isTerminal || !node.children?.length) {
		activeId.value = node.id;
		emit(`select`, node);
	}
	else if (`key` in event && (event.key === `Enter` || event.key === ` `)) {
		activeId.value = node.id;
		emit(`select`, node);
	}
}

const activeNode = computed(() => flatNodes.value.find(item => item.node.id === activeId.value)?.node ?? props.root);
</script>

<template>
	<div
		class="decision-tree"
		role="navigation"
		:aria-label="title || 'Decision tree'"
	>
		<h3
			v-if="title"
			class="decision-tree__title"
		>
			{{ title }}
		</h3>
		<ul
			class="decision-tree__list"
			role="list"
		>
			<li
				v-for="{ node, depth } in flatNodes"
				:key="node.id"
				class="decision-tree__item"
				:class="node.id === activeId && 'decision-tree__item--active'"
				:style="{ paddingLeft: `${depth * 0.75}rem` }"
				role="listitem"
				tabindex="0"
				@keydown.enter="selectNode(node, $event)"
				@keydown.space.prevent="selectNode(node, $event)"
				@click="selectNode(node, $event)"
			>
				{{ node.label }}
				<p
					v-if="node.description"
					class="decision-tree__desc"
				>
					{{ node.description }}
				</p>
			</li>
		</ul>
		<p
			v-if="activeNode.recommendation"
			class="decision-tree__recommendation"
		>
			{{ activeNode.recommendation }}
		</p>
	</div>
</template>
