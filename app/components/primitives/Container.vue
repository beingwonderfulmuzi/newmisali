<script setup lang="ts">
import type { ContainerWidth } from './primitive.types';

withDefaults(defineProps<{ width?: ContainerWidth }>(), { width: `site` });
</script>

<template>
	<div
		class="container"
		:class="width !== 'site' && `container--${width}`"
	>
		<slot />
	</div>
</template>
