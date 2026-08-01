<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="green-flags"
	>
		<h2
			v-if="title"
			class="green-flags__title"
		>
			{{ title }}
		</h2>
		<div class="green-flags__content">
			<slot />
		</div>
	</section>
</template>
