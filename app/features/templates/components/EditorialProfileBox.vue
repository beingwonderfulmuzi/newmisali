<script setup lang="ts">
import type { ArticleAuthor, ArticleReviewer } from '~/features/templates/template.types';

withDefaults(defineProps<{
	profile: ArticleAuthor | ArticleReviewer;
	label: string;
	variant?: `author` | `reviewer`;
}>(), {
	variant: `author`,
});
</script>

<template>
	<aside
		class="editorial-profile-box"
		:class="`editorial-profile-box--${variant}`"
		:aria-label="label"
	>
		<div
			v-if="$slots.image"
			class="editorial-profile-box__avatar"
		>
			<slot name="image" />
		</div>
		<div>
			<p class="editorial-profile-box__name">
				{{ profile.name }}
			</p>
			<p
				v-if="profile.role"
				class="editorial-profile-box__role"
			>
				{{ profile.role }}
			</p>
			<p
				v-if="profile.bio"
				class="editorial-profile-box__bio"
			>
				{{ profile.bio }}
			</p>
			<ul
				v-if="profile.credentials?.length"
				class="editorial-profile-box__creds"
			>
				<li
					v-for="(credential, index) in profile.credentials"
					:key="index"
				>
					{{ credential }}
				</li>
			</ul>
			<a
				v-if="profile.profileUrl"
				:href="profile.profileUrl"
				class="editorial-profile-box__link"
				target="_blank"
				rel="noopener noreferrer"
			>
				View profile <span aria-hidden="true">↗</span>
			</a>
		</div>
	</aside>
</template>
