import { school } from '~/data/school';

const messages: Record<string, string> = {
	'/': `Assalam-o-Alaikum! I would like to learn more about New Misali Cadet School and admissions for my child.`,
	'/fees': `Assalam-o-Alaikum! I have viewed your fees page. Could you explain what the PKR 15,000 boarding fee and PKR 3,000 day scholar fee include, and any additional charges?`,
	'/admissions': `Assalam-o-Alaikum! I would like to enquire about admission at New Misali Cadet School. Please share available classes, required documents and the admission process.`,
	'/academics': `Assalam-o-Alaikum! Could you share the classes, subjects and curriculum offered at New Misali Cadet School?`,
	'/school-life': `Assalam-o-Alaikum! I would like to know more about the daily routine and student activities at New Misali Cadet School.`,
	'/campus': `Assalam-o-Alaikum! I have viewed your campus page and would like to ask about facilities and arrange a school visit.`,
	'/gallery': `Assalam-o-Alaikum! I have been exploring your school gallery and would like to learn more about New Misali Cadet School.`,
	'/principal': `Assalam-o-Alaikum! I have read about Principal Sohail Majeed and would like to arrange a discussion with the school team.`,
	'/about': `Assalam-o-Alaikum! I have read about New Misali Cadet School and would like more information for my child.`,
	'/contact': `Assalam-o-Alaikum! I would like to contact New Misali Cadet School. Please let me know a suitable time to discuss my enquiry or visit.`,
	'/downloads': `Assalam-o-Alaikum! I would like help with school documents and admission forms.`,
	'/news': `Assalam-o-Alaikum! I would like to ask about school news and upcoming events.`,
	'/privacy': `Assalam-o-Alaikum! I have a question about New Misali Cadet School's privacy policy.`,
};

export function useWhatsApp() {
	const route = useRoute();
	const message = computed(() => messages[route.path.replace(/\/$/, ``) || `/`] || `Assalam-o-Alaikum! I have a question about the ${route.path.split(`/`).filter(Boolean).join(` / `).replaceAll(`-`, ` `)} page on the New Misali Cadet School website.`);
	const whatsappUrl = computed(() => `https://wa.me/${school.whatsappNumber}?text=${encodeURIComponent(message.value)}`);
	return { whatsappUrl };
}
