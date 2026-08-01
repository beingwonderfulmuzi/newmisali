<script setup lang="ts">
defineProps<{ title: string; description?: string; eyebrow?: string; to?: string }>();
</script>

<template>
	<component
		:is="to ? 'NuxtLink' : 'article'"
		:to="to"
		class="content-card"
	>
		<p
			v-if="eyebrow"
			class="content-card__eyebrow"
		>
			{{ eyebrow }}
		</p>
		<h3 class="content-card__title">
			{{ title }}
		</h3>
		<p
			v-if="description"
			class="content-card__desc"
		>
			{{ description }}
		</p>
		<slot />
	</component>
</template>
