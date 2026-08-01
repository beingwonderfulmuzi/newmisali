<script setup lang="ts">
import type { ComparisonColumn, ComparisonRow } from '~/features/templates/template.types';

defineProps<{ title?: string; columns: ComparisonColumn[]; rows: ComparisonRow[]; caption?: string; id?: string }>();
</script>

<template>
	<section
		:id="id"
		class="comparison"
	>
		<h2
			v-if="title"
			class="comparison__title"
		>
			{{ title }}
		</h2>
		<ResponsiveTable :caption="caption">
			<thead>
				<tr>
					<th scope="col" />
					<th
						v-for="col in columns"
						:key="col.key"
						scope="col"
					>
						{{ col.label }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="row in rows"
					:key="row.label"
				>
					<th scope="row">
						{{ row.label }}
					</th>
					<td
						v-for="col in columns"
						:key="col.key"
					>
						{{ row.values[col.key] ?? '—' }}
					</td>
				</tr>
			</tbody>
		</ResponsiveTable>
	</section>
</template>
