<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="how-it-works"
	>
		<h2
			v-if="title"
			class="how-it-works__title"
		>
			{{ title }}
		</h2>
		<div class="how-it-works__content">
			<slot />
		</div>
	</section>
</template>
