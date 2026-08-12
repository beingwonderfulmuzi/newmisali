<script setup lang="ts">
import type { TimelineEvent } from '~/features/templates/template.types';

defineProps<{ events: TimelineEvent[]; title?: string; id?: string }>();
</script>

<template>
	<section
		:id="id"
		class="timeline"
	>
		<h2
			v-if="title"
			class="timeline__heading"
		>
			{{ title }}
		</h2>
		<ol class="timeline__list">
			<li
				v-for="event in events"
				:key="event.id"
				class="timeline__item"
			>
				<p class="timeline__date">
					{{ event.date }}
				</p>
				<p class="timeline__title">
					{{ event.title }}
				</p>
				<p
					v-if="event.description"
					class="timeline__desc"
				>
					{{ event.description }}
				</p>
			</li>
		</ol>
	</section>
</template>
