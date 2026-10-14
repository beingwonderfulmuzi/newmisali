export const school = {
	name: `New Misali Cadet School`,
	principal: `Sohail Majeed`,
	address: `Shah Sikandar Road, Dera Ghazi Khan, Punjab, Pakistan`,
	city: `Dera Ghazi Khan`,
	directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`New Misali Cadet School, Shah Sikandar Road, Dera Ghazi Khan, Punjab, Pakistan`)}`,
};
export const navigation = [
	{ label: `About`, to: `/about`, children: [{ label: `Our School`, to: `/about` }, { label: `Principal`, to: `/principal` }, { label: `Campus`, to: `/campus` }] },
	{ label: `Academics`, to: `/academics` },
	{ label: `School Life`, to: `/school-life` },
	{ label: `Media`, to: `/gallery`, children: [{ label: `Photo & Video Gallery`, to: `/gallery` }] },
	{ label: `Contact`, to: `/contact` },
];
export const publicRoutes = [`/`, `/about`, `/principal`, `/academics`, `/admissions`, `/school-life`, `/campus`, `/gallery`, `/contact`, `/privacy`];
export interface NewsRecord { slug: string; title: string; description: string; body: string; date?: string }
export const news: NewsRecord[] = [];
export interface DownloadRecord { title: string; path: string; format: string; bytes: number }
export const downloads: DownloadRecord[] = [];
export const admissionQuestions = [
	{ title: `Class availability`, text: `Ask which classes are available for your child and whether enquiries are being accepted for the current session.` },
	{ title: `Requirements`, text: `Confirm the documents and any assessment or meeting required before making an application.` },
	{ title: `Fees & payments`, text: `Request the current fee details, payment schedule and any additional charges directly from the school.` },
	{ title: `A school visit`, text: `Ask about a suitable time to visit, meet the school team and discuss your child's needs.` },
];
export const admissionsFaqs = [
	{ id: `intake`, question: `Are admissions currently open?`, answer: `Current intake availability has not been published here. Please confirm availability with the school before preparing a formal application.` },
	{ id: `classes`, question: `Which classes can my child join?`, answer: `Contact the school in person to confirm current class availability and the appropriate entry point for your child.` },
	{ id: `fees`, question: `Where can I find the current fees?`, answer: `Please request the current fee structure from the school. This website does not publish unconfirmed fees or scholarship information.` },
	{ id: `application`, question: `Can I apply through this website?`, answer: `This website provides enquiry guidance. It does not accept formal applications, payments or children's documents.` },
];
