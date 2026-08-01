<script setup lang="ts">
import type { KnowledgeGraphEdge, KnowledgeGraphNode } from '~/features/templates/template.types';

export interface KnowledgeMapItem {
	id: string;
	title: string;
	nodes: KnowledgeGraphNode[];
	edges: KnowledgeGraphEdge[];
}
defineProps<{ items: KnowledgeMapItem[]; title?: string }>();
</script>

<template>
	<section class="knowledge-maps">
		<SectionHeading
			v-if="title"
			:title="title"
		/>
		<ul class="knowledge-maps__list">
			<li
				v-for="map in items"
				:key="map.id"
			>
				<KnowledgeGraph
					:title="map.title"
					:nodes="map.nodes"
					:edges="map.edges"
				/>
			</li>
		</ul>
	</section>
</template>
