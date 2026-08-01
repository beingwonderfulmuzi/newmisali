<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="risks"
	>
		<h2
			v-if="title"
			class="risks__title"
		>
			{{ title }}
		</h2>
		<div class="risks__content">
			<slot />
		</div>
	</section>
</template>
