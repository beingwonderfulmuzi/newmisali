<script setup lang="ts">
export interface FilterOption { id: string; label: string }
const model = defineModel<string>({ default: `` });
defineProps<{ options: FilterOption[]; label?: string }>();
</script>

<template>
	<div
		class="interactive-filters"
		role="group"
		:aria-label="label || 'Filters'"
	>
		<ul class="interactive-filters__list">
			<li
				v-for="opt in options"
				:key="opt.id"
			>
				<button
					type="button"
					class="interactive-filters__button"
					:aria-pressed="model === opt.id"
					@click="model = opt.id"
				>
					{{ opt.label }}
				</button>
			</li>
		</ul>
	</div>
</template>
