# Content and launch checklist

Owner-supplied facts: school name, Shah Sikandar Road address, and Principal Sohail Majeed. No other institutional claims have been inferred from the starter.

## Before public launch

- Confirm publication permission for the selected photographs and videos, especially student media. Confirm that every selected item belongs to this school.
- Confirm that `principal.webp` depicts Sohail Majeed. Supply a higher-quality portrait with the entire head visible: the supplied original is already cropped at its upper edge. The website preserves the full original frame.
- Approve the proposed educational positioning and editorial headlines. “Learning”, “Character”, “Participation” and “Community” are proposed direction, not verified programme claims. No first-person principal message has been invented.
- Supply an approved principal biography or message, if desired. Qualifications, career history, quotations and achievements remain unpublished.
- Supply official phone, WhatsApp, email and Facebook URLs. No verified remote contact channel or delivery backend exists; the current contact page directs visitors to the supplied address. This is a launch blocker for remote enquiries.
- Confirm class levels, subjects, curriculum/board affiliation, fees, current intake status, documents and the actual admission process. The current site provides enquiry guidance without asserting these details.
- Confirm visit arrangements and opening hours. The map action is an address search, not a verified pin.
- Configure the real HTTPS production domain using `NUXT_PUBLIC_SITE_URL`. Enable `NUXT_PUBLIC_INDEXABLE=true` only on production. Staging defaults to noindex with robots disallow and an empty sitemap.
- Confirm hosting provider, request-log retention and responsible privacy contact; update the hosting paragraph in `/privacy` accordingly.
- Obtain captions or transcripts for spoken video material. None were supplied, and no speech has been invented. Caption availability remains an accessibility content task before launch.

## Optional content

- Supply verified announcements with dates where known. `/news` has an honest empty state; unknown article slugs return 404. Empty news is excluded from navigation and sitemap.
- Supply actual downloadable documents. No prospectus, fees PDF or application form has been invented. `/downloads` remains excluded from navigation and sitemap while empty.
- Provide classroom photographs and confirmed information about learning spaces, if available. Outdoor photographs do not establish laboratories, boarding, transport or medical provision.

## Media issues

- `public/videos/Students-playing.mp4` contains HTML, not an MP4. Replace with the actual video before use.
- `public/images/main image.webp` shows another institution's signage. It is excluded.
- Several annual-video frames show another school's name. These files are excluded pending owner clarification, along with the unnamed video and endorsement-like material.
- Historical admission posters, result graphics and military remembrance graphics are excluded from public selections. They do not establish current admissions, results or affiliation.

This file is internal and is not served from `public/`.
