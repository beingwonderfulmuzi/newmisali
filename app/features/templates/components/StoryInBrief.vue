<script setup lang="ts">
withDefaults(defineProps<{ label?: string; text?: string }>(), { label: `In brief` });
</script>

<template>
	<aside
		class="story-in-brief"
		aria-label="Summary"
	>
		<p class="story-in-brief__label">
			{{ label }}
		</p>
		<p
			v-if="text"
			class="story-in-brief__text"
		>
			{{ text }}
		</p>
		<slot />
	</aside>
</template>
