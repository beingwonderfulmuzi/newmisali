<script setup lang="ts">
import type { KnowledgeGraphEdge, KnowledgeGraphNode } from '~/features/templates/template.types';

defineProps<{ title?: string; nodes: KnowledgeGraphNode[]; edges: KnowledgeGraphEdge[] }>();
</script>

<template>
	<section
		class="knowledge-graph"
		aria-label="Knowledge graph"
	>
		<h3
			v-if="title"
			class="knowledge-graph__title"
		>
			{{ title }}
		</h3>
		<div
			v-if="$slots.default"
			class="knowledge-graph__visual"
		>
			<slot />
		</div>
		<ul
			class="knowledge-graph__nodes"
			aria-label="Concepts"
		>
			<li
				v-for="node in nodes"
				:key="node.id"
				class="knowledge-graph__node"
			>
				<span class="knowledge-graph__node-label">{{ node.label }}</span>
				<span
					v-if="node.description"
					class="knowledge-graph__node-desc"
				> — {{ node.description }}</span>
			</li>
		</ul>
		<ul
			v-if="edges.length"
			class="knowledge-graph__edges"
			aria-label="Relationships"
		>
			<li
				v-for="(edge, i) in edges"
				:key="i"
				class="knowledge-graph__edge"
			>
				{{ edge.from }} → {{ edge.to }}<span v-if="edge.label"> ({{ edge.label }})</span>
			</li>
		</ul>
	</section>
</template>
