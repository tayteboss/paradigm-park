export default {
	title: 'Right Column List Item',
	name: 'rightColumnListItem',
	type: 'document',
	fields: [
		{
			title: 'Key',
			name: 'key',
			type: 'string',
		},
		{
			title: "Value",
			name: "value",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: 'Normal', value: 'normal'},
					],
					lists: [],
					marks: {
						decorators: [],
					}
				}
			]
		},
	]
}