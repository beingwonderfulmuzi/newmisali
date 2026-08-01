<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="ingredient-spotlight"
	>
		<h2
			v-if="title"
			class="ingredient-spotlight__title"
		>
			{{ title }}
		</h2>
		<div class="ingredient-spotlight__content">
			<slot />
		</div>
	</section>
</template>
