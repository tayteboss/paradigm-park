import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useScrollDirection = (): 'up' | 'down' => {
	const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
	const [prevScrollY, setPrevScrollY] = useState<number>(0);

	useEffect(() => {
		const handleScroll = throttle(() => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > prevScrollY) {
			setScrollDirection('down');
		} else {
			setScrollDirection('up');
		}

		setPrevScrollY(currentScrollY);
		}, 100); // Adjust the throttle delay as needed (e.g., 100 milliseconds)

		const throttledHandleScroll = throttle(handleScroll, 50);
		window.addEventListener('scroll', throttledHandleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollY]);

	return scrollDirection;
};

export default useScrollDirection;