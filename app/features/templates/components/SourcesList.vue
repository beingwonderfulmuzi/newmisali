<script setup lang="ts">
import type { ArticleSource } from '~/features/templates/template.types';

defineProps<{ sources: ArticleSource[]; title?: string; id?: string }>();
</script>

<template>
	<section
		:id="id"
		class="sources-list"
	>
		<h2 class="sources-list__title">
			{{ title || 'Sources' }}
		</h2>
		<ol class="sources-list__items">
			<li
				v-for="source in sources"
				:key="source.id"
				class="sources-list__item"
			>
				<a
					v-if="source.url"
					:href="source.url"
					class="sources-list__link"
					target="_blank"
					rel="noopener noreferrer"
				>
					{{ source.title }}
					<span
						class="sources-list__external"
						aria-hidden="true"
					>↗</span>
					<span class="visually-hidden"> (opens in new tab)</span>
				</a>
				<span v-else>{{ source.title }}</span>
				<span
					v-if="source.publisher"
					class="sources-list__meta"
				> — {{ source.publisher }}</span>
			</li>
		</ol>
	</section>
</template>
