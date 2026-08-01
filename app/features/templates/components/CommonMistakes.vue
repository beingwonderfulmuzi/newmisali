<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="common-mistakes"
	>
		<h2
			v-if="title"
			class="common-mistakes__title"
		>
			{{ title }}
		</h2>
		<div class="common-mistakes__content">
			<slot />
		</div>
	</section>
</template>
