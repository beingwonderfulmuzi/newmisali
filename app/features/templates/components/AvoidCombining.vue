<script setup lang="ts">
defineProps<{ id?: string; title?: string }>();
</script>

<template>
	<section
		:id="id"
		class="avoid-combining"
	>
		<h2
			v-if="title"
			class="avoid-combining__title"
		>
			{{ title }}
		</h2>
		<div class="avoid-combining__content">
			<slot />
		</div>
	</section>
</template>
