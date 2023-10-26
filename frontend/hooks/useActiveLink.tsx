import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useActiveLink = (): string => {
	const [activeLink, setActiveLink] = useState<string>('Home');
	const router = useRouter();

	useEffect(() => {
		if (router.pathname === '/') {
			setActiveLink('Home');
		} else if (router.pathname === '/learn') {
			setActiveLink('Learn');
		} else if (router.pathname === '/about') {
			setActiveLink('About');
		} else if (router.pathname === '/work') {
			setActiveLink('Work');
		} else if (router.pathname === '/contact') {
			setActiveLink('Contact');
		} else {
			setActiveLink('');
		}
	}, [router]);

	return activeLink;
};

export default useActiveLink;
