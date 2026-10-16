<script setup lang="ts">
import { admissionQuestions, admissionsFaqs, school } from '~/data/school';

useSchoolSeo(`Admission Enquiries`, `Prepare an admission enquiry for New Misali Cadet School. Ask about classes, requirements, fees and school visits.`);
</script>

<template>
	<div>
		<PageIntro
			eyebrow="Admission Enquiries"
			title="Their next chapter begins with a conversation."
			description="A useful starting point for families considering New Misali Cadet School. An enquiry helps you understand the school before a formal application."
		/><Container>
			<section class="admissions-start">
				<p class="eyebrow">
					Before you apply
				</p><div class="editorial-split">
					<h2>Four questions.<br><em>One informed decision.</em></h2><p class="reading-copy">
						View our <NuxtLink
							to="/fees"
							class="text-link"
						>monthly fees</NuxtLink> for boarding students and day scholars. Confirm current intake dates and class availability directly with the school. This page guides your enquiry; it does not submit an application or reserve a place.
					</p>
				</div><div class="numbered-topics">
					<article
						v-for="(item, index) in admissionQuestions"
						:key="item.title"
					>
						<span class="route-number">0{{ index + 1 }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p>
					</article>
				</div>
			</section>
			<section class="visit-panel section-space">
				<div>
					<p class="eyebrow">
						Meet the school
					</p><h2>Come with<br><em>your questions.</em></h2>
				</div><div>
					<p class="lead">
						{{ school.name }}
					</p><p>{{ school.address }}</p><p>Visit the school to enquire about current arrangements. Please confirm a suitable meeting time with the school team.</p><WhatsAppLink>Ask about admissions</WhatsAppLink><Button to="/contact">
						Location & enquiry guidance ↗
					</Button>
				</div>
			</section>
			<section class="section-space faq-layout">
				<div>
					<p class="eyebrow">
						For families
					</p><h2>A little<br><em>more clarity.</em></h2>
				</div><FAQs
					:items="admissionsFaqs"
					title="Common admission questions"
				/>
			</section>
		</Container>
	</div>
</template>
