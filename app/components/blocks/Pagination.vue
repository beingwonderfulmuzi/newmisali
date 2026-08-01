<script setup lang="ts">
export interface PaginationItem { label: string; to?: string; current?: boolean; disabled?: boolean }
defineProps<{ items: PaginationItem[]; label?: string }>();
</script>

<template>
	<nav
		class="pagination"
		:aria-label="label || 'Pagination'"
	>
		<template
			v-for="(item, index) in items"
			:key="index"
		>
			<span
				v-if="item.disabled || !item.to"
				class="pagination__link"
				aria-disabled="true"
			>{{ item.label }}</span>
			<NuxtLink
				v-else
				:to="item.to"
				class="pagination__link"
				:aria-current="item.current ? 'page' : undefined"
			>{{ item.label }}</NuxtLink>
		</template>
	</nav>
</template>
