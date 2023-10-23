import { TextIcon } from '@sanity/icons';

export default {
	title: 'Title Block',
	name: 'caseStudyTitleBlock',
	type: 'document',
	icon: TextIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Title Block'
		},
		{
			title: "Top Content",
			name: "topContent",
			description: "Optional",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'H1', value: 'h1'},
						{title: 'H2', value: 'h2'},
						{title: 'H3', value: 'h3'},
						{title: 'H4', value: 'h4'},
						{title: 'H5', value: 'h5'},
					],
					lists: [],
					marks: {
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'}
						],
					}
				},
			]
		},
		{
			title: "Main Content",
			name: "mainContent",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'H1', value: 'h1'},
						{title: 'H2', value: 'h2'},
						{title: 'H3', value: 'h3'},
						{title: 'H4', value: 'h4'},
						{title: 'H5', value: 'h5'},
					],
					lists: [],
					marks: {
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'}
						],
					}
				},
			]
		},
		{
			title: "Bottom Content",
			name: "bottomContent",
			description: "Optional",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'H1', value: 'h1'},
						{title: 'H2', value: 'h2'},
						{title: 'H3', value: 'h3'},
						{title: 'H4', value: 'h4'},
						{title: 'H5', value: 'h5'},
					],
					lists: [],
					marks: {
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'}
						],
					}
				},
			]
		},
		{
			title: "Background Color",
			name: "backgroundColor",
			type: "color",
		}
	]
}