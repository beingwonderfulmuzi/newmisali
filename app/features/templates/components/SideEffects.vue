<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="side-effects"
	>
		<h2
			v-if="title"
			class="side-effects__title"
		>
			{{ title }}
		</h2>
		<div class="side-effects__content">
			<slot />
		</div>
	</section>
</template>
