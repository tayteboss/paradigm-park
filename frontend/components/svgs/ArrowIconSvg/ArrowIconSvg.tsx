const ArrowIconSvg = ({ colour = 'var(--colour-black)' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
			<path d="M1 12L12 1" stroke={colour}/>
			<path d="M2.37451 1L11.9995 1V10.625" stroke={colour}/>
		</svg>
	);
};

export default ArrowIconSvg;
