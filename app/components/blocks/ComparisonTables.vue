<script setup lang="ts">
import type { ComparisonColumn, ComparisonRow } from '~/features/templates/template.types';

export interface ComparisonTableItem {
	id: string;
	title: string;
	columns: ComparisonColumn[];
	rows: ComparisonRow[];
	caption?: string;
}

defineProps<{ items: ComparisonTableItem[]; title?: string }>();
</script>

<template>
	<section class="comparison-tables">
		<SectionHeading
			v-if="title"
			:title="title"
		/>
		<ul class="comparison-tables__list">
			<li
				v-for="table in items"
				:key="table.id"
			>
				<ResponsiveTable :caption="table.caption || table.title">
					<thead>
						<tr>
							<th scope="col" />
							<th
								v-for="col in table.columns"
								:key="col.key"
								scope="col"
							>
								{{ col.label }}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="row in table.rows"
							:key="row.label"
						>
							<th scope="row">
								{{ row.label }}
							</th>
							<td
								v-for="col in table.columns"
								:key="col.key"
							>
								{{ row.values[col.key] ?? '—' }}
							</td>
						</tr>
					</tbody>
				</ResponsiveTable>
			</li>
		</ul>
	</section>
</template>
