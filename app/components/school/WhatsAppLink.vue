<script setup lang="ts">
withDefaults(defineProps<{ floating?: boolean }>(), { floating: false });
const { whatsappUrl } = useWhatsApp();
</script>

<template>
	<a
		:href="whatsappUrl"
		class="whatsapp-link"
		:class="{ 'whatsapp-link--floating': floating }"
		target="_blank"
		rel="noopener noreferrer"
		:aria-label="floating ? 'Contact New Misali Cadet School on WhatsApp (opens in a new tab)' : undefined"
		title="Chat with us on WhatsApp"
	>
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			width="24"
			height="24"
		>
			<path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.11.55 4.17 1.6 5.99L0 24l6.23-1.63a11.94 11.94 0 0 0 5.82 1.48h.01C18.65 23.85 24 18.49 24 11.9c0-3.19-1.24-6.18-3.48-8.42ZM12.06 21.84a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.7.97.99-3.6-.24-.37a9.88 9.88 0 0 1-1.52-5.3c0-5.48 4.46-9.94 9.95-9.94a9.86 9.86 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.91 7.03c0 5.48-4.46 9.88-10.01 9.88Zm5.45-7.41c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.77-.73 2.02-1.43.25-.69.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35Z" />
		</svg>
		<span v-if="!floating"><slot>WhatsApp us</slot></span>
	</a>
</template>

<style scoped>
.whatsapp-link { display: inline-flex; align-items: center; justify-content: center; gap: 0.6rem; min-height: 2.75rem; padding: 0.75rem 1rem; border-radius: 0.4rem; background: #25d366; color: #08371a; font-size: 0.875rem; font-weight: 650; text-decoration: none; }
.whatsapp-link svg { flex-shrink: 0; }
.whatsapp-link:hover { background: #20bd5a; }
.whatsapp-link:focus-visible { outline: 3px solid var(--color-text-primary); outline-offset: 4px; }
.whatsapp-link--floating { position: fixed; z-index: 40; right: max(1.25rem, env(safe-area-inset-right)); bottom: max(1.25rem, env(safe-area-inset-bottom)); width: 3.75rem; height: 3.75rem; padding: 0; border-radius: 50%; color: #fff; box-shadow: 0 4px 18px #0003; border: 2px solid #fff; }
.whatsapp-link--floating svg { width: 2rem; height: 2rem; }
@media print { .whatsapp-link--floating { display: none; } }
</style>
