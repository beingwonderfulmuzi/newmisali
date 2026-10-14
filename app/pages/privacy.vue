<script setup lang="ts">
useSchoolSeo(`Privacy Notice`, `How this New Misali Cadet School website handles information, local media and external links.`);
</script>

<template>
	<div>
		<PageIntro
			eyebrow="Privacy Notice"
			title="Your privacy, explained simply."
			description="This notice describes the features currently implemented on this website."
		/><Container
			width="article"
			class="privacy-content"
		>
			<Prose>
				<EditorialSection
					variant="definition"
					title="Information you provide"
				>
					<p>This website has no contact form, online application, account registration or payment feature. It does not ask you to submit personal information or children's documents.</p>
				</EditorialSection>
				<EditorialSection
					variant="definition"
					title="Cookies and local storage"
				>
					<p>The website does not implement analytics or advertising trackers. A preference cookie named nmsc-theme remembers your light or dark appearance choice for up to one year. It contains only the theme choice and can be removed through your browser settings. Gallery choices and video playback state stay in the current page session.</p>
				</EditorialSection>
				<EditorialSection
					variant="definition"
					title="School photographs and videos"
				>
					<p>Media is served from this website. Videos load when you choose to play them. No third-party video player is embedded.</p>
				</EditorialSection>
				<EditorialSection
					variant="definition"
					title="External links"
				>
					<p>The directions link opens Google Maps. Google's privacy practices apply when you choose to visit it. The website does not load an embedded Google map.</p>
				</EditorialSection>
				<EditorialSection
					variant="definition"
					title="Hosting and technical requests"
				>
					<p>Your browser requests pages and media from the hosting service. The host may process technical information such as an IP address and request logs. Hosting-specific retention and operator details will need to be added when deployment is configured.</p>
				</EditorialSection>
				<EditorialSection
					variant="definition"
					title="Questions about your information"
				>
					<p>For a concern about school media or information shown on this website, please contact the school in person at Shah Sikandar Road, Dera Ghazi Khan, Punjab, Pakistan.</p><NuxtLink
						to="/contact"
						class="text-link"
					>Contact & location ↗</NuxtLink>
				</EditorialSection>
			</Prose>
		</Container>
	</div>
</template>
