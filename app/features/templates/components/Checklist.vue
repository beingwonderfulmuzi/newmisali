<script setup lang="ts">
import type { ChecklistItem } from '~/features/templates/template.types';

const props = defineProps<{ items: ChecklistItem[]; title?: string; id?: string }>();
const checked = ref<Record<string, boolean>>({});

watchEffect(() => {
	for (const item of props.items) {
		if (!(item.id in checked.value)) {
			checked.value[item.id] = item.checked ?? false;
		}
	}
});
</script>

<template>
	<section
		:id="id"
		class="checklist"
		aria-label="Checklist"
	>
		<h2
			v-if="title"
			class="checklist__title"
		>
			{{ title }}
		</h2>
		<ul class="checklist__list">
			<li
				v-for="item in items"
				:key="item.id"
			>
				<Checkbox
					:id="`check-${item.id}`"
					v-model="checked[item.id]"
					:label="item.label"
				/>
				<p
					v-if="item.description"
					class="checklist__item-desc"
				>
					{{ item.description }}
				</p>
			</li>
		</ul>
	</section>
</template>
