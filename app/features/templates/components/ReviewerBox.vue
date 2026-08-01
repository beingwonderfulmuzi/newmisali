<script setup lang="ts">
import type { ArticleReviewer } from '~/features/templates/template.types';

defineProps<{ reviewer: ArticleReviewer }>();
</script>

<template>
	<aside
		class="reviewer-box"
		aria-label="Reviewer"
	>
		<div
			v-if="$slots.image"
			class="reviewer-box__avatar"
		>
			<slot name="image" />
		</div>
		<div>
			<p class="reviewer-box__name">
				{{ reviewer.name }}
			</p>
			<p
				v-if="reviewer.role"
				class="reviewer-box__role"
			>
				{{ reviewer.role }}
			</p>
			<p
				v-if="reviewer.bio"
				class="reviewer-box__bio"
			>
				{{ reviewer.bio }}
			</p>
			<ul
				v-if="reviewer.credentials?.length"
				class="reviewer-box__creds"
			>
				<li
					v-for="(cred, i) in reviewer.credentials"
					:key="i"
				>
					{{ cred }}
				</li>
			</ul>
			<a
				v-if="reviewer.profileUrl"
				:href="reviewer.profileUrl"
				class="reviewer-box__link"
				target="_blank"
				rel="noopener noreferrer"
			>
				View profile <span aria-hidden="true">↗</span>
			</a>
		</div>
	</aside>
</template>
