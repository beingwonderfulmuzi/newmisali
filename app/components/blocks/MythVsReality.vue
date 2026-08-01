<script setup lang="ts">
export interface MythRealityItem { id: string; myth: string; reality: string }
defineProps<{ items: MythRealityItem[]; title?: string }>();
</script>

<template>
	<section class="myth-vs-reality">
		<SectionHeading
			v-if="title"
			:title="title"
		/>
		<ul class="myth-vs-reality__list">
			<li
				v-for="item in items"
				:key="item.id"
				class="myth-vs-reality__item"
			>
				<p class="myth-vs-reality__myth">
					<span class="myth-vs-reality__label">Myth</span>{{ item.myth }}
				</p>
				<p class="myth-vs-reality__reality">
					<span class="myth-vs-reality__label">Reality</span>{{ item.reality }}
				</p>
			</li>
		</ul>
	</section>
</template>
