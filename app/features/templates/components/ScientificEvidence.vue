<script setup lang="ts">
import type { ArticleSource } from '~/features/templates/template.types';

defineProps<{
	title?: string;
	summary: string;
	references?: ArticleSource[];
	strength?: string;
	limitations?: string;
	uncertainty?: string;
}>();
</script>

<template>
	<section
		class="scientific-evidence"
		aria-label="Scientific evidence"
	>
		<h2
			v-if="title"
			class="scientific-evidence__title"
		>
			{{ title }}
		</h2>
		<p class="scientific-evidence__summary">
			{{ summary }}
		</p>
		<div class="scientific-evidence__meta">
			<Badge
				v-if="strength"
				variant="success"
			>
				{{ strength }}
			</Badge>
		</div>
		<div
			v-if="limitations"
			class="scientific-evidence__section"
		>
			<p class="scientific-evidence__section-title">
				Limitations
			</p>
			<p class="scientific-evidence__section-body">
				{{ limitations }}
			</p>
		</div>
		<div
			v-if="uncertainty"
			class="scientific-evidence__section"
		>
			<p class="scientific-evidence__section-title">
				Uncertainty
			</p>
			<p class="scientific-evidence__section-body">
				{{ uncertainty }}
			</p>
		</div>
		<div
			v-if="references?.length"
			class="scientific-evidence__section"
		>
			<p class="scientific-evidence__section-title">
				References
			</p>
			<ul class="scientific-evidence__refs">
				<li
					v-for="ref in references"
					:key="ref.id"
				>
					{{ ref.title }}
				</li>
			</ul>
		</div>
	</section>
</template>
