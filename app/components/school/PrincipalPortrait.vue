<script setup lang="ts">
import { principalPortrait } from '~/data/media';

withDefaults(defineProps<{ priority?: boolean }>(), { priority: false });
</script>

<template>
	<figure class="principal-portrait">
		<div class="principal-portrait__top">
			<span>Personal leadership.</span><span>Shared purpose.</span>
		</div>
		<ZoomImage
			:item="principalPortrait"
			:priority="priority"
		/>
		<figcaption>
			<span><strong>Sohail Majeed</strong><span>Principal · New Misali Cadet School</span></span><span
				class="portrait-mark"
				aria-hidden="true"
			>NM</span>
		</figcaption>
	</figure>
</template>
