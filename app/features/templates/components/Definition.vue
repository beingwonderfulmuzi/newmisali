<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="definition"
	>
		<h2
			v-if="title"
			class="definition__title"
		>
			{{ title }}
		</h2>
		<div class="definition__content">
			<slot />
		</div>
	</section>
</template>
