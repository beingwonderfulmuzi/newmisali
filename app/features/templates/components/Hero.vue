<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; description?: string }>();
</script>

<template>
	<header class="hero">
		<p
			v-if="eyebrow"
			class="hero__eyebrow"
		>
			{{ eyebrow }}
		</p>
		<h1 class="hero__title">
			{{ title }}
		</h1>
		<p
			v-if="description"
			class="hero__desc"
		>
			{{ description }}
		</p>
		<div
			v-if="$slots.meta"
			class="hero__meta"
		>
			<slot name="meta" />
		</div>
		<div
			v-if="$slots.image"
			class="hero__media"
		>
			<slot name="image" />
		</div>
	</header>
</template>
