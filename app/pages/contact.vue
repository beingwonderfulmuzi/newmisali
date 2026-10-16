<script setup lang="ts">
import { school } from '~/data/school';

useSchoolSeo(`Contact & Location`, `Find New Misali Cadet School on Shah Sikandar Road in Dera Ghazi Khan, Punjab, Pakistan, and prepare your school enquiry.`);
</script>

<template>
	<div>
		<PageIntro
			eyebrow="Contact & Location"
			title="Let's begin at the school."
			description="Find New Misali Cadet School and prepare for a useful first conversation."
		/><Container>
			<section class="contact-composition">
				<div class="address-panel">
					<p class="eyebrow">
						Find us
					</p><h2>New Misali<br><em>Cadet School.</em></h2><address>{{ school.address }}</address><a
						:href="school.directions"
						class="btn"
						target="_blank"
						rel="noopener noreferrer"
					>Directions on Google Maps ↗</a><p class="small-note">
						Opens an address search, rather than a verified map pin.
					</p>
				</div><div class="contact-copy">
					<p class="eyebrow">
						Your enquiry
					</p><h2>A thoughtful<br><em>first conversation.</em></h2><p>For current classes, fees, admission requirements or a visit, message our school team on WhatsApp.</p><p>WhatsApp: {{ school.whatsappDisplay }}</p><WhatsAppLink>Chat with our school team</WhatsAppLink><EditorialSection
						variant="practical-tips"
						title="Before travelling"
					>
						<p>Confirm the destination and a suitable meeting time with the school team where possible. Bring your questions about learning and admission; do not send children's sensitive records through an unverified channel.</p>
					</EditorialSection>
				</div>
			</section>
			<section class="section-space">
				<p class="eyebrow">
					Make the most of your visit
				</p><div class="feature-links">
					<NuxtLink to="/admissions"><span>For prospective families</span><h3>Admission Enquiries</h3><p>Classes, requirements, fees and visits.</p><span aria-hidden="true">↗</span></NuxtLink><NuxtLink to="/academics"><span>About learning</span><h3>Academic Guidance</h3><p>Prepare the questions you want to ask.</p><span aria-hidden="true">↗</span></NuxtLink><NuxtLink to="/campus"><span>About the place</span><h3>Campus Photographs</h3><p>A first look at the school's outdoor spaces.</p><span aria-hidden="true">↗</span></NuxtLink>
				</div>
			</section>
		</Container>
	</div>
</template>
