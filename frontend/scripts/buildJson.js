/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
const api = require('./api');

const buildSiteData = async () => {
	const siteSettings = await api.getSiteData();
};

buildSiteData();
