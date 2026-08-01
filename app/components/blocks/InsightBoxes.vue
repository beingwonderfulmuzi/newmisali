<script setup lang="ts">
export interface InsightItem { id: string; title: string; body: string }
defineProps<{ items: InsightItem[] }>();
</script>

<template>
	<div class="insight-boxes">
		<aside
			v-for="item in items"
			:key="item.id"
			class="insight-box"
			aria-label="Insight"
		>
			<p class="insight-box__title">
				{{ item.title }}
			</p>
			<p class="insight-box__body">
				{{ item.body }}
			</p>
		</aside>
	</div>
</template>
