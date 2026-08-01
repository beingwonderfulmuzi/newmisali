<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="avoid-if"
	>
		<h2
			v-if="title"
			class="avoid-if__title"
		>
			{{ title }}
		</h2>
		<div class="avoid-if__content">
			<slot />
		</div>
	</section>
</template>
