<script setup lang="ts">
import type { ArticleMetaData } from '~/features/templates/template.types';

defineProps<{ meta: ArticleMetaData }>();

function formatDate(value?: string) {
	if (!value) return undefined;
	return new Date(value).toLocaleDateString(undefined, { year: `numeric`, month: `short`, day: `numeric` });
}
</script>

<template>
	<dl class="article-meta">
		<div
			v-if="meta.publishedAt"
			class="article-meta__item"
		>
			<dt class="article-meta__label">
				Published
			</dt>
			<dd>{{ formatDate(meta.publishedAt) }}</dd>
		</div>
		<div
			v-if="meta.updatedAt"
			class="article-meta__item"
		>
			<dt class="article-meta__label">
				Updated
			</dt>
			<dd>{{ formatDate(meta.updatedAt) }}</dd>
		</div>
		<div
			v-if="meta.reviewedAt"
			class="article-meta__item"
		>
			<dt class="article-meta__label">
				Reviewed
			</dt>
			<dd>{{ formatDate(meta.reviewedAt) }}</dd>
		</div>
		<div
			v-if="meta.readingTimeMinutes"
			class="article-meta__item"
		>
			<dt class="article-meta__label">
				Reading time
			</dt>
			<dd>{{ meta.readingTimeMinutes }} min</dd>
		</div>
		<div
			v-if="meta.author"
			class="article-meta__item"
		>
			<dt class="article-meta__label">
				Author
			</dt>
			<dd>{{ meta.author.name }}</dd>
		</div>
	</dl>
</template>
