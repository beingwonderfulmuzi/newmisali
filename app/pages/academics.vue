<script setup lang="ts">
useSchoolSeo(`Academics`, `Prepare useful questions about class availability, subjects and learning at New Misali Cadet School in Dera Ghazi Khan.`);
const topics = [{ title: `Classes & entry points`, text: `Confirm which classes are currently offered and which entry point is appropriate for your child's prior learning.` }, { title: `Subjects & curriculum`, text: `Ask for current subject information, curriculum details and any relevant board affiliation directly from the school.` }, { title: `Learning & progress`, text: `Discuss classroom expectations, homework, assessment and how your child's progress is shared with you.` }, { title: `Parent communication`, text: `Find out how to contact the school team, raise concerns and arrange a discussion about your child.` }];
</script>

<template>
	<div>
		<PageIntro
			eyebrow="Academics"
			title="Learning starts with understanding."
			description="A practical guide to the academic questions parents can discuss with the school."
		/><Container>
			<section class="academic-intro editorial-split">
				<div>
					<p class="eyebrow">
						A considered choice
					</p><h2>Know the details.<br><em>See the direction.</em></h2>
				</div><div class="reading-copy">
					<p class="lead">
						Every child's next step deserves a thoughtful conversation.
					</p><p>Class levels, subject lists and current academic arrangements are not yet published on this website. Please confirm these details with the school before making an admission decision.</p><Button to="/contact">
						Plan your enquiry ↗
					</Button>
				</div>
			</section>
			<section class="section-space">
				<p class="eyebrow">
					Your conversation guide
				</p><div class="numbered-topics">
					<article
						v-for="(topic, index) in topics"
						:key="topic.title"
					>
						<span class="route-number">0{{ index + 1 }}</span><h3>{{ topic.title }}</h3><p>{{ topic.text }}</p>
					</article>
				</div>
			</section>
			<EditorialSection
				variant="practical-tips"
				title="Bring your questions, not sensitive documents."
			>
				<p class="reading-copy">
					For an initial conversation, think about your child's learning needs and the class you are considering. This website does not collect children's records. Ask the school which documents are needed for a formal application.
				</p><NuxtLink
					to="/admissions"
					class="text-link"
				>Read the admissions guide ↗</NuxtLink>
			</EditorialSection>
		</Container><AdmissionCallout />
	</div>
</template>
