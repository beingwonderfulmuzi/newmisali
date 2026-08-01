<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="practical-tips"
	>
		<h2
			v-if="title"
			class="practical-tips__title"
		>
			{{ title }}
		</h2>
		<div class="practical-tips__content">
			<slot />
		</div>
	</section>
</template>
