<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="compatible-ingredients"
	>
		<h2
			v-if="title"
			class="compatible-ingredients__title"
		>
			{{ title }}
		</h2>
		<div class="compatible-ingredients__content">
			<slot />
		</div>
	</section>
</template>
