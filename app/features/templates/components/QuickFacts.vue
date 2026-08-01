<script setup lang="ts">
import type { QuickFact } from '~/features/templates/template.types';

defineProps<{ facts: QuickFact[]; title?: string }>();
</script>

<template>
	<aside
		class="quick-facts"
		aria-label="Quick facts"
	>
		<h3
			v-if="title"
			class="quick-facts__title"
		>
			{{ title }}
		</h3>
		<ul class="quick-facts__list">
			<li
				v-for="(fact, i) in facts"
				:key="i"
				class="quick-facts__item"
			>
				<span class="quick-facts__label">{{ fact.label }}</span>
				<span class="quick-facts__value">{{ fact.value }}</span>
			</li>
		</ul>
	</aside>
</template>
