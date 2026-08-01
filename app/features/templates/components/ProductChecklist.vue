<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="product-checklist"
	>
		<h2
			v-if="title"
			class="product-checklist__title"
		>
			{{ title }}
		</h2>
		<div class="product-checklist__content">
			<slot />
		</div>
	</section>
</template>
