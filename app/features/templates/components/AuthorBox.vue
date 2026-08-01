<script setup lang="ts">
import type { ArticleAuthor } from '~/features/templates/template.types';

defineProps<{ author: ArticleAuthor }>();
</script>

<template>
	<aside
		class="author-box"
		aria-label="Author"
	>
		<div
			v-if="$slots.image"
			class="author-box__avatar"
		>
			<slot name="image" />
		</div>
		<div>
			<p class="author-box__name">
				{{ author.name }}
			</p>
			<p
				v-if="author.role"
				class="author-box__role"
			>
				{{ author.role }}
			</p>
			<p
				v-if="author.bio"
				class="author-box__bio"
			>
				{{ author.bio }}
			</p>
			<ul
				v-if="author.credentials?.length"
				class="author-box__creds"
			>
				<li
					v-for="(cred, i) in author.credentials"
					:key="i"
				>
					{{ cred }}
				</li>
			</ul>
			<a
				v-if="author.profileUrl"
				:href="author.profileUrl"
				class="author-box__link"
				target="_blank"
				rel="noopener noreferrer"
			>
				View profile <span aria-hidden="true">↗</span>
			</a>
		</div>
	</aside>
</template>
