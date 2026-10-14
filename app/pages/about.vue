<script setup lang="ts">
import { school } from '~/data/school';
import { media } from '~/data/media';

useSchoolSeo(`Our School`, `An introduction to New Misali Cadet School, its principal and its location on Shah Sikandar Road in Dera Ghazi Khan.`);
</script>

<template>
	<div>
		<PageIntro
			eyebrow="Our School"
			title="Rooted in a place. Built around people."
			description="An introduction to New Misali Cadet School, Dera Ghazi Khan."
		/>
		<Container>
			<Figure
				class="wide-photo"
				caption="A moment from the school community."
			>
				<ZoomImage :item="media[10]!" />
			</Figure>
			<section class="section-space editorial-split">
				<div>
					<p class="eyebrow">
						Our identity
					</p><h2>New Misali.<br><em>Our shared story.</em></h2>
				</div><div class="reading-copy">
					<p class="lead">
						{{ school.name }} is located on Shah Sikandar Road in Dera Ghazi Khan, Punjab, Pakistan.
					</p><p>The school is led by Principal Sohail Majeed. This website brings together an introduction to its leadership, photographs of school life and practical guidance for families considering their next step.</p><p>Visit the school to discuss current academic provision and admission arrangements with the school team.</p>
				</div>
			</section>
			<section class="section-space">
				<p class="eyebrow">
					Explore further
				</p><div class="feature-links">
					<NuxtLink to="/principal"><span>01 / Leadership</span><h3>Meet the Principal</h3><p>Get to know the person leading New Misali.</p><span aria-hidden="true">↗</span></NuxtLink><NuxtLink to="/school-life"><span>02 / Community</span><h3>School Life</h3><p>Discover participation through real school moments.</p><span aria-hidden="true">↗</span></NuxtLink><NuxtLink to="/campus"><span>03 / Place</span><h3>Explore the Campus</h3><p>See the outdoor spaces and find directions.</p><span aria-hidden="true">↗</span></NuxtLink>
				</div>
			</section>
		</Container><AdmissionCallout />
	</div>
</template>
