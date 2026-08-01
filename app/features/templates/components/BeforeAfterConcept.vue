<script setup lang="ts">
withDefaults(defineProps<{ id?: string; title?: string; disclaimer?: string }>(), {
	disclaimer: `Illustrative comparison only — individual results vary and this is not medical or professional advice.`,
});
</script>

<template>
	<section
		:id="id"
		class="before-after-concept"
	>
		<h2
			v-if="title"
			class="before-after-concept__title"
		>
			{{ title }}
		</h2>
		<div class="before-after-concept__content">
			<slot />
		</div>
		<p
			v-if="disclaimer"
			class="before-after-concept__disclaimer"
		>
			{{ disclaimer }}
		</p>
	</section>
</template>
