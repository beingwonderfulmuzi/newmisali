<script setup lang="ts">
import { school, admissionQuestions } from '~/data/school';
import { media, schoolFilm } from '~/data/media';

useSchoolSeo(school.name, `Discover New Misali Cadet School in Dera Ghazi Khan. Meet Principal Sohail Majeed, explore school life and find guidance for admission enquiries.`);
const config = useRuntimeConfig();
const base = String(config.public.siteUrl || ``).replace(/\/$/, ``);
useHead({ script: [{ type: `application/ld+json`, innerHTML: JSON.stringify({ '@context': `https://schema.org`, '@type': `School`, 'name': school.name, 'address': { '@type': `PostalAddress`, 'streetAddress': `Shah Sikandar Road`, 'addressLocality': school.city, 'addressRegion': `Punjab`, 'addressCountry': `PK` }, ...(base ? { url: base } : {}) }) }] });
const quickLinks = [{ label: `Admissions`, to: `/admissions`, caption: `Start your enquiry` }, { label: `Academics`, to: `/academics`, caption: `Questions about learning` }, { label: `School Life`, to: `/school-life`, caption: `See our community` }, { label: `Contact`, to: `/contact`, caption: `Find the school` }];
const themes = [{ title: `Learning`, text: `A foundation built through curiosity, attention and a willingness to ask questions.` }, { title: `Character`, text: `Responsibility and respect, in the classroom and in everyday life.` }, { title: `Participation`, text: `Space to take part, discover interests and share experiences with others.` }];
</script>

<template>
	<div>
		<Container>
			<section
				class="home-hero"
				aria-labelledby="hero-title"
			>
				<div class="home-hero__copy">
					<p class="eyebrow">
						<span class="eyebrow-rule" /> Discover New Misali
					</p><p class="hero-school-name">
						New Misali Cadet School
					</p><h1 id="hero-title">
						Learning today. <em>Leading tomorrow.</em>
					</h1><p class="hero-description">
						Get to know New Misali Cadet School through our flagship film. Discover a community shaped by learning, character and the confidence to take part.
					</p><div class="hero-actions">
						<Button to="/admissions">
							Explore Admissions <span aria-hidden="true">↗</span>
						</Button><NuxtLink
							to="/principal"
							class="text-link"
						>Meet the Principal <span aria-hidden="true">↗</span></NuxtLink>
					</div><p class="hero-location">
						Shah Sikandar Road · Dera Ghazi Khan
					</p>
				</div>
				<figure class="home-hero__film">
					<video
						class="home-hero__video"
						src="/videos/newmisali_flagship_AI.mp4#t=0.1"
						controls
						playsinline
						preload="metadata"
						aria-label="New Misali Cadet School flagship film"
					>
						Your browser does not support video playback.
						<a href="/videos/newmisali_flagship_AI.mp4">Download the flagship film</a>.
					</video>
					<figcaption>
						<strong>Our school. Our vision.</strong>
						<span>Watch the New Misali flagship film</span>
					</figcaption>
				</figure>
			</section>
			<nav
				class="parent-routes"
				aria-label="Quick routes for parents"
			>
				<NuxtLink
					v-for="(link, index) in quickLinks"
					:key="link.to"
					:to="link.to"
				><span class="route-number">0{{ index + 1 }}</span><span><strong>{{ link.label }}</strong><span>{{ link.caption }}</span></span><span aria-hidden="true">↗</span></NuxtLink>
			</nav>
			<section class="leadership-intro section-space">
				<p class="eyebrow">
					01 / People & purpose
				</p><div class="editorial-split">
					<h2>Every school begins with <em>its people.</em></h2><div class="reading-copy">
						<p class="lead">
							Meet Sohail Majeed, Principal of New Misali Cadet School.
						</p><p>Behind the name of an institution are the people who give it direction. Get to know the principal and explore the school he leads in Dera Ghazi Khan.</p><NuxtLink
							to="/principal"
							class="text-link"
						>Meet our Principal <span aria-hidden="true">↗</span></NuxtLink>
					</div>
				</div>
			</section>
		</Container>
		<section class="values-section">
			<Container>
				<div class="section-top">
					<p class="eyebrow">
						02 / A shared direction
					</p><span class="quiet-label">Learning · Character · Community</span>
				</div><h2>More than a school day. <em>A foundation for life.</em></h2><div class="values-list">
					<div
						v-for="(theme, index) in themes"
						:key="theme.title"
					>
						<span class="route-number">0{{ index + 1 }}</span><h3>{{ theme.title }}</h3><p>{{ theme.text }}</p>
					</div>
				</div>
			</Container>
		</section>
		<Container>
			<section class="section-space school-life-home">
				<div class="section-top">
					<div>
						<p class="eyebrow">
							03 / Life at New Misali
						</p><h2>A school, <em>in real moments.</em></h2>
					</div><NuxtLink
						to="/gallery"
						class="text-link"
					>Explore the gallery ↗</NuxtLink>
				</div><div class="life-composition">
					<Figure caption="Together in the school courtyard.">
						<ZoomImage :item="media[2]!" />
					</Figure><div>
						<VideoPlayer :item="schoolFilm" /><p class="life-caption">
							Assemblies, outdoor activities and moments of participation. Take a closer look at school life through photographs and films from our community.
						</p><NuxtLink
							to="/school-life"
							class="text-link"
						>Discover School Life ↗</NuxtLink>
					</div>
				</div>
			</section>
			<section class="academics-home section-space">
				<p class="eyebrow">
					04 / For parents
				</p><div class="editorial-split">
					<h2>The right questions. <em>A clearer choice.</em></h2><div class="reading-copy">
						<p class="lead">
							Choosing a school starts with understanding your child's next step.
						</p><p>Ask about class availability, subjects, learning expectations and how the school communicates with parents. Current academic details should be confirmed directly with the school.</p><NuxtLink
							to="/academics"
							class="text-link"
						>Explore academic guidance ↗</NuxtLink>
					</div>
				</div>
			</section>
			<section class="enquiry-home section-space">
				<div class="section-top">
					<div>
						<p class="eyebrow">
							05 / Admission enquiries
						</p><h2>Start with <em>what matters.</em></h2>
					</div><p class="reading-copy">
						A useful first conversation covers four things. Our admissions guide helps you prepare.
					</p>
				</div><div class="question-list">
					<NuxtLink
						v-for="(item, index) in admissionQuestions"
						:key="item.title"
						to="/admissions"
					><span class="route-number">0{{ index + 1 }}</span><h3>{{ item.title }}</h3><span aria-hidden="true">↗</span></NuxtLink>
				</div>
			</section>
		</Container>
		<AdmissionCallout />
	</div>
</template>
