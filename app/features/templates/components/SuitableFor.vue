<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="suitable-for"
	>
		<h2
			v-if="title"
			class="suitable-for__title"
		>
			{{ title }}
		</h2>
		<div class="suitable-for__content">
			<slot />
		</div>
	</section>
</template>
