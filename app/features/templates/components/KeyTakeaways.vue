<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="key-takeaways"
	>
		<h2
			v-if="title"
			class="key-takeaways__title"
		>
			{{ title }}
		</h2>
		<div class="key-takeaways__content">
			<slot />
		</div>
	</section>
</template>
