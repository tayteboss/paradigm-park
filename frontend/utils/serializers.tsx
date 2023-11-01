import React from 'react';

const SuperScript = ({ children }: React.PropsWithChildren<{}>) => (
  <sup>{children}</sup>
);

const serializers = {
	marks: {
		super: SuperScript,
	},
};

export default serializers;