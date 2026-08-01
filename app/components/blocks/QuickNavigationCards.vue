<script setup lang="ts">
export interface QuickNavItem { id: string; label: string; description?: string; to: string }
defineProps<{ items: QuickNavItem[]; title?: string }>();
</script>

<template>
	<section class="quick-nav">
		<SectionHeading
			v-if="title"
			:title="title"
		/>
		<div class="quick-nav__grid">
			<NuxtLink
				v-for="item in items"
				:key="item.id"
				:to="item.to"
				class="quick-nav__card"
			>
				<p class="quick-nav__label">{{ item.label }}</p>
				<p
					v-if="item.description"
					class="quick-nav__desc"
				>{{ item.description }}</p>
			</NuxtLink>
		</div>
	</section>
</template>
