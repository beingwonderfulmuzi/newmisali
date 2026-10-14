<script setup lang="ts">
import { school } from '~/data/school';
</script>

<template>
	<section class="admission-callout">
		<Container class="admission-callout__inner">
			<div>
				<p class="eyebrow">
					Your next step
				</p><h2>Begin with a<br>conversation.</h2><p>Explore the school. Ask the questions that matter to your family.</p>
			</div>
			<div>
				<Button to="/admissions">
					Admission Enquiries <span aria-hidden="true">↗</span>
				</Button><p class="callout-address">
					{{ school.address }}
				</p>
			</div>
		</Container>
	</section>
</template>
