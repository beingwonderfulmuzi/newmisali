<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="causes"
	>
		<h2
			v-if="title"
			class="causes__title"
		>
			{{ title }}
		</h2>
		<div class="causes__content">
			<slot />
		</div>
	</section>
</template>
