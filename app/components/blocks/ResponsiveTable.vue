<script setup lang="ts">
defineProps<{ caption?: string }>();
</script>

<template>
	<div class="responsive-table">
		<table class="responsive-table__table">
			<caption v-if="caption">
				{{ caption }}
			</caption>
			<slot />
		</table>
	</div>
</template>
