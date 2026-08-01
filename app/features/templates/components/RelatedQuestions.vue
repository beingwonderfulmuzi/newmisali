<script setup lang="ts">
import type { RelatedQuestion } from '~/features/templates/template.types';

defineProps<{ items: RelatedQuestion[]; title?: string }>();
</script>

<template>
	<section
		class="related-questions"
		aria-label="Related questions"
	>
		<h2 class="related-questions__title">
			{{ title || 'Related questions' }}
		</h2>
		<ul class="related-questions__list">
			<li
				v-for="item in items"
				:key="`${item.routeGroup}/${item.slug}`"
			>
				<NuxtLink
					:to="`/${item.routeGroup}/${item.slug}`"
					class="related-questions__link"
				>
					<p class="related-questions__item-title">{{ item.title }}</p>
					<p
						v-if="item.description"
						class="related-questions__item-desc"
					>{{ item.description }}</p>
				</NuxtLink>
			</li>
		</ul>
	</section>
</template>
