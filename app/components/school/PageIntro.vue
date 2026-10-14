<script setup lang="ts">
defineProps<{ title: string; eyebrow: string; description: string }>();
</script>

<template>
	<Container class="page-intro">
		<Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: eyebrow }]" />
		<p class="eyebrow">
			{{ eyebrow }}
		</p>
		<h1>{{ title }}</h1>
		<p class="page-intro__description">
			{{ description }}
		</p>
	</Container>
</template>
