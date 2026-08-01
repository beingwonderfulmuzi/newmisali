<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="benefits"
	>
		<h2
			v-if="title"
			class="benefits__title"
		>
			{{ title }}
		</h2>
		<div class="benefits__content">
			<slot />
		</div>
	</section>
</template>
