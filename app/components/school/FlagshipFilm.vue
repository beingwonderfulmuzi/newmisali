<script setup lang="ts">
const player = ref<HTMLVideoElement>();
const started = ref(false);
const failed = ref(false);
async function playFilm() {
	if (!player.value) return;
	started.value = true;
	// Start directly in the tap handler so mobile browsers allow sound.
	try {
		await player.value.play();
	}
	catch { /* Keep native controls available for another attempt. */ }
	await nextTick();
	player.value?.focus();
}
onBeforeUnmount(() => player.value?.pause());
</script>

<template>
	<div class="flagship-film">
		<video
			ref="player"
			class="home-hero__video"
			src="/videos/newmisali-flagship-web.mp4"
			poster="/images/posters/flagship.jpg"
			:controls="started"
			playsinline
			preload="none"
			tabindex="0"
			aria-label="New Misali Cadet School flagship film"
			@error="failed = true"
		>
			<a href="/videos/newmisali-flagship-web.mp4">Download the flagship film</a>.
		</video>
		<button
			v-if="!started"
			type="button"
			class="flagship-film__cover"
			aria-label="Watch our school film, 1 minute 35 seconds, with sound"
			@click="playFilm"
		>
			<img
				src="/images/posters/flagship.jpg"
				alt="A preview of the New Misali school film"
				width="1280"
				height="720"
				fetchpriority="high"
			>
			<span class="flagship-film__action">
				<span
					class="flagship-film__play"
					aria-hidden="true"
				>
					<svg
						viewBox="0 0 24 24"
						width="22"
						height="22"
						fill="currentColor"
					><path d="m9 5 11 7-11 7Z" /></svg>
				</span>
				<span><strong>Watch our school film</strong><small>1 min 35 sec ? Play with sound</small></span>
			</span>
		</button>
		<p
			v-if="failed"
			role="alert"
			class="flagship-film__error"
		>
			Having trouble playing? <a href="/videos/newmisali-flagship-web.mp4">Open the film directly</a>.
		</p>
	</div>
</template>

<style scoped>
.flagship-film { position: relative; }
.flagship-film__cover { position: absolute; inset: 0; width: 100%; height: 100%; padding: 0; border: 0; cursor: pointer; color: #fff; background: #111; text-align: left; }
.flagship-film__cover img { display: block; width: 100%; height: 100%; object-fit: cover; }
.flagship-film__cover::after { content: ''; position: absolute; inset: 0; background: linear-gradient(transparent 35%, rgb(0 0 0 / 80%)); }
.flagship-film__action { position: absolute; z-index: 1; inset-inline: 1.25rem; bottom: 1.25rem; display: flex; align-items: center; gap: 0.85rem; }
.flagship-film__play { width: 3rem; height: 3rem; display: grid; place-items: center; flex-shrink: 0; border-radius: 50%; background: #fff; color: #173b2b; }
.flagship-film__action strong { display: block; font-size: clamp(0.95rem, 1.5vw, 1.2rem); }
.flagship-film__action small { display: block; font-size: 0.75rem; margin-top: 0.2rem; }
.flagship-film__cover:hover .flagship-film__play { background: #d9eee0; }
.flagship-film__cover:focus-visible { outline: 3px solid #fff; outline-offset: -6px; }
.flagship-film__error { padding: 1rem; margin: 0; }
@media (max-width: 47rem) { .flagship-film__action { inset-inline: 1rem; bottom: 1rem; } }
</style>
