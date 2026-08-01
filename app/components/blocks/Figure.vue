<script setup lang="ts">
defineProps<{ caption?: string }>();
</script>

<template>
	<figure class="figure">
		<div class="figure__media">
			<slot />
		</div>
		<figcaption
			v-if="caption"
			class="figure__caption"
		>
			{{ caption }}
		</figcaption>
	</figure>
</template>
