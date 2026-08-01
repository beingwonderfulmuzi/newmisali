<script setup lang="ts">
import type { BreadcrumbItem } from '~/features/templates/template.types';

defineProps<{ items: BreadcrumbItem[] }>();
</script>

<template>
	<nav
		v-if="items.length"
		class="breadcrumbs"
		aria-label="Breadcrumb"
	>
		<ol class="breadcrumbs__list">
			<li
				v-for="(item, index) in items"
				:key="index"
				class="breadcrumbs__item"
			>
				<NuxtLink
					v-if="item.to"
					:to="item.to"
					class="breadcrumbs__link"
				>{{ item.label }}</NuxtLink>
				<span
					v-else
					class="breadcrumbs__current"
					aria-current="page"
				>{{ item.label }}</span>
			</li>
		</ol>
	</nav>
</template>
