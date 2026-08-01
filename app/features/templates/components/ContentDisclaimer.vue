<script setup lang="ts">
withDefaults(defineProps<{ title?: string; text: string }>(), { title: `Disclaimer` });
</script>

<template>
	<aside
		class="content-disclaimer"
		role="note"
	>
		<p class="content-disclaimer__title">
			{{ title }}
		</p>
		<p class="content-disclaimer__text">
			{{ text }}
		</p>
	</aside>
</template>
