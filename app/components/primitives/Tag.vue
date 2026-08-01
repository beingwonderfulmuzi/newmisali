<script setup lang="ts">
defineProps<{ href?: string }>();
</script>

<template>
	<component
		:is="href ? 'a' : 'span'"
		:href="href"
		class="tag"
	>
		<slot />
	</component>
</template>
