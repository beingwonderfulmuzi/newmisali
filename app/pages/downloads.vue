<script setup lang="ts">
import { downloads } from '~/data/school';

useSchoolSeo(`Downloads`, `Official documents from New Misali Cadet School. No documents are currently available to download.`);
</script>

<template>
	<div>
		<PageIntro
			eyebrow="Downloads"
			title="School information, at hand."
			description="Official documents will be made available here when supplied by the school."
		/><Container class="collection-page">
			<ul v-if="downloads.length">
				<li
					v-for="file in downloads"
					:key="file.path"
				>
					<a
						:href="file.path"
						download
					>{{ file.title }} · {{ file.format }} · {{ Math.ceil(file.bytes / 1024) }} KB ↗</a>
				</li>
			</ul><EmptyState
				v-else
				title="No documents available yet."
				description="A prospectus, fee sheet or application form has not been published here. Please ask the school for the current official information."
			>
				<Button
					to="/admissions"
					variant="outlined"
				>
					Prepare an admission enquiry ↗
				</Button>
			</EmptyState>
		</Container>
	</div>
</template>
