<script setup lang="ts">
useSchoolSeo(`Fees`, `Monthly fees at New Misali Cadet School: PKR 15,000 for boarding students and PKR 3,000 for day scholars.`);
</script>

<template>
	<div>
		<PageIntro
			eyebrow="Fees"
			title="Plan for their next chapter."
			description="Monthly fees for boarding students and day scholars at New Misali Cadet School."
		/>
		<Container>
			<section
				class="fees-section"
				aria-labelledby="monthly-fees-title"
			>
				<p class="eyebrow">
					Two ways to join our school
				</p>
				<h2 id="monthly-fees-title">
					Monthly <em>fees.</em>
				</h2>
				<div class="fees-table-wrap">
					<table class="fees-table">
						<caption>All amounts are in Pakistani rupees (PKR), per student.</caption>
						<thead>
							<tr>
								<th scope="col">
									Student category
								</th><th scope="col">
									Per month
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">
									Boarding students
								</th><td>PKR 15,000</td>
							</tr>
							<tr>
								<th scope="row">
									Day scholars
								</th><td>PKR 3,000</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="reading-copy fees-note">
					For details about what each fee includes, payment arrangements and any additional charges, please contact the school.
				</p>
			</section>
			<section class="section-space editorial-split">
				<h2>A clear start.<br><em>A helpful conversation.</em></h2>
				<div class="reading-copy">
					<p>Discuss your child's needs with our school team and ask about class availability and admission requirements.</p>
					<div class="hero-actions">
						<WhatsAppLink>Ask about fees on WhatsApp</WhatsAppLink>
						<NuxtLink
							to="/admissions"
							class="text-link"
						>Admission guidance &#8599;</NuxtLink>
					</div>
				</div>
			</section>
		</Container>
	</div>
</template>

<style scoped>
.fees-section { padding-top: 1rem; }
.fees-table-wrap { margin-top: 2rem; }
.fees-table { width: 100%; border-collapse: collapse; text-align: left; }
.fees-table caption { text-align: left; color: var(--color-text-secondary); padding-bottom: 1rem; font-size: 0.875rem; }
.fees-table th, .fees-table td { padding: 1.25rem 1rem; border-bottom: 1px solid var(--color-border); }
.fees-table thead { background: var(--color-brand-surface); color: var(--color-on-brand); }
.fees-table tbody th { font-weight: 500; }
.fees-table td { color: var(--color-brand); font-weight: 650; white-space: nowrap; }
.fees-note { margin-top: 1.5rem; }
@media (max-width: 47rem) {
	.fees-table th, .fees-table td { padding: 1rem 0.65rem; font-size: 0.875rem; }
}
</style>
