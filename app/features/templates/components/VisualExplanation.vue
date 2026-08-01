<script setup lang="ts">
defineProps<{ caption?: string; title?: string }>();
</script>

<template>
	<figure class="visual-explanation">
		<SectionHeading
			v-if="title"
			:title="title"
			:heading-level="3"
		/>
		<div class="visual-explanation__media">
			<slot />
		</div>
		<figcaption
			v-if="caption"
			class="visual-explanation__caption"
		>
			{{ caption }}
		</figcaption>
	</figure>
</template>
