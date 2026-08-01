<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="myths-reality"
	>
		<h2
			v-if="title"
			class="myths-reality__title"
		>
			{{ title }}
		</h2>
		<div class="myths-reality__content">
			<slot />
		</div>
	</section>
</template>
