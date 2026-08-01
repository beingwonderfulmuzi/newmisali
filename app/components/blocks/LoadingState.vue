<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: `Loading content…` });
</script>

<template>
	<div
		class="loading-state"
		role="status"
		aria-live="polite"
	>
		<p class="loading-state__label">
			{{ label }}
		</p>
		<Skeleton height="1rem" />
		<Skeleton
			height="1rem"
			width="80%"
		/>
		<Skeleton
			height="1rem"
			width="60%"
		/>
	</div>
</template>
