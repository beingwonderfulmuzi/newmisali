<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="signs"
	>
		<h2
			v-if="title"
			class="signs__title"
		>
			{{ title }}
		</h2>
		<div class="signs__content">
			<slot />
		</div>
	</section>
</template>
