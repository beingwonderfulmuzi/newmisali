<script setup lang="ts">
import { school } from '~/data/school';

useSchoolSeo(`Principal Sohail Majeed`, `Meet Sohail Majeed, Principal of New Misali Cadet School in Dera Ghazi Khan, Punjab, Pakistan.`);
</script>

<template>
	<div>
		<Container>
			<Breadcrumbs
				class="principal-breadcrumb"
				:items="[{ label: 'Home', to: '/' }, { label: 'Principal' }]"
			/>
			<section class="principal-signature">
				<div>
					<p class="eyebrow">
						Meet the Principal
					</p><h1>Sohail<br><em>Majeed.</em></h1><p class="signature-role">
						Principal<br>{{ school.name }}
					</p><p class="reading-copy">
						The personal leadership behind a school community in Dera Ghazi Khan.
					</p><NuxtLink
						to="/about"
						class="text-link"
					>Discover our school ↗</NuxtLink>
				</div><PrincipalPortrait priority />
			</section>
			<section class="section-space editorial-split">
				<div>
					<p class="eyebrow">
						Leadership at New Misali
					</p><h2>A personal introduction.<br><em>A school's purpose.</em></h2>
				</div><div class="reading-copy">
					<p class="lead">
						Sohail Majeed is the Principal of New Misali Cadet School.
					</p><p>For parents, an introduction to a school is also an introduction to the people responsible for its direction. This page connects the principal's role with the school, its students and the conversations families need to have.</p><p>For questions about your child's learning or admission, please visit the school and ask to speak with the school team.</p><NuxtLink
						to="/contact"
						class="text-link"
					>Find the school ↗</NuxtLink>
				</div>
			</section>
			<div class="leadership-band">
				<p class="eyebrow">
					The school remains the purpose
				</p><h2>People. Learning.<br><em>A shared community.</em></h2><NuxtLink
					to="/school-life"
					class="text-link"
				>See school life ↗</NuxtLink>
			</div>
		</Container><AdmissionCallout />
	</div>
</template>
