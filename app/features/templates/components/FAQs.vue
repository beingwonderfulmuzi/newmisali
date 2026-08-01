<script setup lang="ts">
import type { FAQItem } from '~/features/templates/template.types';

defineProps<{ items: FAQItem[]; title?: string; id?: string }>();
</script>

<template>
	<section
		:id="id"
		class="faqs"
	>
		<h2
			v-if="title"
			class="faqs__title"
		>
			{{ title }}
		</h2>
		<div
			class="faqs__list"
			role="list"
		>
			<Disclosure
				v-for="faq in items"
				:id="faq.id"
				:key="faq.id"
				:label="faq.question"
				role="listitem"
			>
				<p>{{ faq.answer }}</p>
			</Disclosure>
		</div>
	</section>
</template>
