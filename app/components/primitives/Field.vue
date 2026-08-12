<script setup lang="ts">
import type { FieldProps } from './primitive.types';

defineProps<FieldProps>();
</script>

<template>
	<div class="field">
		<label
			class="field__label"
			:for="id"
		>
			{{ label }}
		</label>
		<slot />
		<p
			v-if="hint"
			class="field__hint"
		>
			{{ hint }}
		</p>
	</div>
</template>
