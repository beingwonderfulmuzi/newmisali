<script setup lang="ts">
defineProps<{ title: string; description?: string; eyebrow?: string; headingLevel?: 2 | 3 }>();
</script>

<template>
	<header class="section-heading">
		<p
			v-if="eyebrow"
			class="section-heading__eyebrow"
		>
			{{ eyebrow }}
		</p>
		<component
			:is="headingLevel === 3 ? 'h3' : 'h2'"
			class="section-heading__title"
		>
			{{ title }}
		</component>
		<p
			v-if="description"
			class="section-heading__desc"
		>
			{{ description }}
		</p>
	</header>
</template>
