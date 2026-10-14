<script setup lang="ts">
useSchoolSeo(`Photo & Video Gallery`, `Explore photographs and videos of school assemblies, activities, visits and outdoor spaces at New Misali Cadet School.`);
</script>

<template>
	<div>
		<PageIntro
			eyebrow="Photo & Video Gallery"
			title="The school, through its moments."
			description="A collection of supplied photographs and films. Explore by activity, place or occasion."
		/><Container>
			<SchoolGallery /><div class="gallery-end">
				<p class="small-note">
					Photographs and films show moments from the school's supplied collection. They do not describe a current timetable or confirm current facilities.
				</p><NuxtLink
					to="/school-life"
					class="text-link"
				>Discover School Life ↗</NuxtLink>
			</div>
		</Container><AdmissionCallout />
	</div>
</template>
