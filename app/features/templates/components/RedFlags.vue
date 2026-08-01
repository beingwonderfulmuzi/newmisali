<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="red-flags"
	>
		<h2
			v-if="title"
			class="red-flags__title"
		>
			{{ title }}
		</h2>
		<div class="red-flags__content">
			<slot />
		</div>
	</section>
</template>
