<script setup lang="ts">
import { schoolLogo } from '~/data/media';

export interface NavLink { label: string;
	to: string;
	children?: { label: string;
		to: string; }[]; }
const props = withDefaults(defineProps<{ siteName?: string;
	navLinks?: NavLink[]; }>(), { navLinks: () => [] });
const appConfig = useAppConfig();
const siteName = computed(() => props.siteName ?? appConfig.site.name);
const route = useRoute();
const openGroup = ref(``);
const mobileDialog = ref<HTMLDialogElement>();
const menuButton = ref<HTMLButtonElement>();
const mobileOpen = ref(false);
function openMenu() {
	mobileDialog.value?.showModal();
	mobileOpen.value = true;
}
function closeMenu() {
	mobileDialog.value?.close();
	mobileOpen.value = false;
	menuButton.value?.focus();
}
function closeGroup(event: KeyboardEvent) {
	const nav = event.currentTarget as HTMLElement;
	nav.querySelector<HTMLButtonElement>(`button[aria-expanded="true"]`)?.focus();
	openGroup.value = ``;
}
function groupActive(link: NavLink) {
	return route.path === link.to || link.children?.some(child => child.to === route.path);
}
watch(() => route.path, () => {
	openGroup.value = ``;
	if (mobileOpen.value) closeMenu();
});
</script>

<template>
	<header class="site-header">
		<Container class="site-header__inner">
			<NuxtLink
				to="/"
				class="site-header__brand"
				:aria-label="`${siteName} home`"
			>
				<img
					:src="schoolLogo.src"
					width="50"
					height="50"
					alt=""
				>
				<span>New Misali<span>Cadet School</span></span>
			</NuxtLink>
			<nav
				class="site-header__nav"
				aria-label="Main"
				@keydown.esc="closeGroup"
			>
				<ul class="site-header__list">
					<li
						v-for="link in navLinks"
						:key="link.to"
						class="nav-item"
						@focusout="event => { if (!(event.currentTarget as HTMLElement).contains(event.relatedTarget as Node)) openGroup = ''; }"
					>
						<button
							v-if="link.children"
							class="site-header__link"
							type="button"
							:aria-expanded="openGroup === link.to"
							:aria-controls="`nav-${link.label.replaceAll(' ', '-')}`"
							:class="{ 'is-current': groupActive(link) }"
							@click="openGroup = openGroup === link.to ? '' : link.to"
						>
							{{ link.label }} <span aria-hidden="true">⌄</span>
						</button>
						<NuxtLink
							v-else
							:to="link.to"
							class="site-header__link"
							:aria-current="route.path === link.to ? 'page' : undefined"
						>{{ link.label }}</NuxtLink>
						<ul
							v-if="link.children"
							v-show="openGroup === link.to"
							:id="`nav-${link.label.replaceAll(' ', '-')}`"
							class="nav-dropdown"
						>
							<li
								v-for="child in link.children"
								:key="child.to"
							>
								<NuxtLink
									:to="child.to"
									:aria-current="route.path === child.to ? 'page' : undefined"
								>{{ child.label }}</NuxtLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<div class="site-header__actions">
				<ThemeSwitcher />
				<WhatsAppLink class="header-whatsapp" />
				<Button
					class="header-cta"
					to="/admissions"
				>
					Admission Enquiries <span aria-hidden="true">↗</span>
				</Button>
				<button
					ref="menuButton"
					class="mobile-toggle"
					type="button"
					aria-haspopup="dialog"
					:aria-expanded="mobileOpen"
					aria-controls="mobile-navigation"
					@click="openMenu"
				>
					Menu <span aria-hidden="true">☰</span>
				</button>
			</div>
		</Container>
		<dialog
			id="mobile-navigation"
			ref="mobileDialog"
			class="mobile-menu"
			aria-labelledby="mobile-menu-title"
			@cancel.prevent="closeMenu"
			@click="event => { if (event.target === mobileDialog) closeMenu(); }"
		>
			<div class="mobile-menu__top">
				<p id="mobile-menu-title">
					Explore New Misali
				</p><button
					class="mobile-toggle"
					type="button"
					autofocus
					@click="closeMenu"
				>
					Close ×
				</button>
			</div>
			<nav aria-label="Mobile">
				<ul>
					<li
						v-for="link in navLinks"
						:key="link.to"
					>
						<NuxtLink
							:to="link.to"
							:aria-current="route.path === link.to ? 'page' : undefined"
						>{{ link.label }} <span aria-hidden="true">↗</span></NuxtLink><ul v-if="link.children">
							<li
								v-for="child in link.children"
								:key="child.to"
							>
								<NuxtLink
									:to="child.to"
									:aria-current="route.path === child.to ? 'page' : undefined"
								>{{ child.label }}</NuxtLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<WhatsAppLink />
			<Button to="/admissions">
				Admission Enquiries ↗
			</Button>
		</dialog>
	</header>
</template>

<style scoped>
@media (max-width: 74rem) { .header-whatsapp { display: none; } }
</style>
