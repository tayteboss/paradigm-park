const API_ENDPOINT = 'https://api.flodesk.com/v1';
const API_KEY = process.env.NEXT_PUBLIC_FLODESK_API_KEY;

async function addEmailToSegment(email: string) {
	const url = `${API_ENDPOINT}/subscribers`;
	const headers = new Headers({
		'Content-Type': 'application/json',
		'User-Agent': 'Your App Name (www.yourapp.com)',
		'Authorization': `Basic ${btoa(`${API_KEY}:`)}`
	});

	const body = JSON.stringify({
		email,
	});

	const options = {
		method: 'POST',
		headers,
		body,
	};

	try {
		const response = await fetch(url, options);
		const data = await response.json();

		if (response.ok) {
			return 'success';
		} else {
			return 'failed';
		}
	} catch (error) {
		return 'failed';
	}
}

export default addEmailToSegment;