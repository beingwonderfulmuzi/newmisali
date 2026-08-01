<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="routine-steps"
	>
		<h2
			v-if="title"
			class="routine-steps__title"
		>
			{{ title }}
		</h2>
		<div class="routine-steps__content">
			<slot />
		</div>
	</section>
</template>
