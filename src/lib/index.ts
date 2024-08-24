// place files you want to import through the `$lib` alias in this folder.

import { goto } from '$app/navigation';

export const scrollToSection = (event: MouseEvent, href: string) => {
	event.preventDefault();

	const targetId = href.split('#')[1];

	const targetElement = document.getElementById(targetId);

	if (targetElement) {
		targetElement.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	} else {
		goto(href, { replaceState: true });
	}
};
