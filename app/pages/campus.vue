<script setup lang="ts">
import { media } from '~/data/media';
import { school } from '~/data/school';

useSchoolSeo(`Campus`, `See supplied photographs of the school courtyard and outdoor spaces, and find directions to New Misali Cadet School in Dera Ghazi Khan.`);
</script>

<template>
	<div>
		<PageIntro
			eyebrow="Campus"
			title="A place to learn. A place to belong."
			description="A visual introduction to the school's outdoor spaces on Shah Sikandar Road, Dera Ghazi Khan."
		/><Container>
			<div class="campus-composition">
				<Figure caption="Flowers beside a school walkway.">
					<ZoomImage :item="media[4]!" />
				</Figure><Figure caption="Students together in the school courtyard.">
					<ZoomImage :item="media[5]!" />
				</Figure>
			</div>
			<section class="section-space editorial-split">
				<div>
					<p class="eyebrow">
						See it for yourself
					</p><h2>The next step?<br><em>A school visit.</em></h2>
				</div><div class="reading-copy">
					<p class="lead">
						Photographs introduce a place. A visit helps you understand it.
					</p><p>Ask the school team about the current learning spaces, facilities and arrangements that matter to your family. The photographs here do not establish specialist facilities, boarding or transport provision.</p><p>{{ school.address }}</p><a
						:href="school.directions"
						class="text-link"
						target="_blank"
						rel="noopener noreferrer"
					>Search for directions on Google Maps ↗</a><p class="small-note">
						This opens an address search. Please confirm the destination before travelling.
					</p>
				</div>
			</section>
			<NuxtLink
				to="/gallery"
				class="full-width-link"
			><span>Explore more school photographs</span><span aria-hidden="true">↗</span></NuxtLink>
		</Container><AdmissionCallout />
	</div>
</template>
