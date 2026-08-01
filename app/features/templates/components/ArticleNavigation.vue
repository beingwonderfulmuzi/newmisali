<script setup lang="ts">
import type { ArticleNavigationItem } from '~/features/templates/template.types';

defineProps<{ previous?: ArticleNavigationItem; next?: ArticleNavigationItem }>();
</script>

<template>
	<nav
		class="article-nav"
		aria-label="Article navigation"
	>
		<NuxtLink
			v-if="previous"
			:to="previous.to"
			class="article-nav__link article-nav__link--prev"
		>
			<span class="article-nav__label">Previous</span>
			<span class="article-nav__title">{{ previous.label }}</span>
		</NuxtLink>
		<NuxtLink
			v-if="next"
			:to="next.to"
			class="article-nav__link article-nav__link--next"
		>
			<span class="article-nav__label">Next</span>
			<span class="article-nav__title">{{ next.label }}</span>
		</NuxtLink>
	</nav>
</template>
