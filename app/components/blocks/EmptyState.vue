<script setup lang="ts">
defineProps<{ title: string; description?: string }>();
</script>

<template>
	<div
		class="empty-state"
		role="status"
	>
		<h2 class="empty-state__title">
			{{ title }}
		</h2>
		<p
			v-if="description"
			class="empty-state__desc"
		>
			{{ description }}
		</p>
		<slot />
	</div>
</template>
