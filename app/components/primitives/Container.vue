<script setup lang="ts">
withDefaults(defineProps<{ width?: `site` | `article` | `narrow` }>(), { width: `site` });
</script>

<template>
	<div
		class="container"
		:class="width !== 'site' && `container--${width}`"
	>
		<slot />
	</div>
</template>
