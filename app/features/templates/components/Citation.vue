<script setup lang="ts">
import type { ArticleCitation, ArticleSource } from '~/features/templates/template.types';

const props = defineProps<{ citation: ArticleCitation; sources: ArticleSource[] }>();
const source = computed(() => props.sources.find(s => s.id === props.citation.sourceId));
</script>

<template>
	<cite
		v-if="source"
		class="citation"
	>
		<a
			v-if="source.url"
			:href="source.url"
			class="citation__link"
			target="_blank"
			rel="noopener noreferrer"
		>
			{{ citation.label || source.title }}
			<span
				class="citation__external"
				aria-hidden="true"
			>↗</span>
			<span class="visually-hidden"> (opens in new tab)</span>
		</a>
		<span v-else>{{ citation.label || source.title }}</span>
	</cite>
</template>
