<script setup lang="ts">
import { media, schoolFilm } from '~/data/media';

useSchoolSeo(`School Life`, `Explore authentic photographs and film of assemblies, outdoor activities and participation at New Misali Cadet School.`);
</script>

<template>
	<div>
		<PageIntro
			eyebrow="School Life"
			title="A community in motion."
			description="Real photographs. Shared experiences. A closer look at the moments that bring the school together."
		/><Container>
			<div class="life-composition">
				<Figure caption="Participation in an outdoor group activity.">
					<ZoomImage :item="media[3]!" />
				</Figure><div class="life-intro-copy">
					<p class="eyebrow">
						Beyond the page
					</p><h2>Taking part.<br><em>Growing together.</em></h2><p>The supplied school photographs document assemblies, outdoor activities, student recognition and visits. They offer a glimpse of the community, rather than a promise of a current timetable.</p>
				</div>
			</div>
			<section class="section-space">
				<div class="section-top">
					<div>
						<p class="eyebrow">
							A glimpse of everyday life
						</p><h2>Shared moments.<br><em>Lasting impressions.</em></h2>
					</div><NuxtLink
						to="/gallery"
						class="text-link"
					>All photos & films ↗</NuxtLink>
				</div><div class="activity-pair">
					<Figure caption="Students taking part in an outdoor activity.">
						<ZoomImage :item="media[7]!" />
					</Figure><Figure caption="Recognition at a school gathering.">
						<ZoomImage :item="media[9]!" />
					</Figure>
				</div>
			</section>
			<section class="section-space editorial-split">
				<div>
					<p class="eyebrow">
						School on film
					</p><h2>A glimpse<br><em>of New Misali.</em></h2><p class="reading-copy">
						Press play to watch a supplied school video. For details about current activities and arrangements, ask the school team.
					</p>
				</div><VideoPlayer :item="schoolFilm" />
			</section>
		</Container><AdmissionCallout />
	</div>
</template>
