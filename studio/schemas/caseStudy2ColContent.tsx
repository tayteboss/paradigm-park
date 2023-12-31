import { BlockContentIcon } from '@sanity/icons';

const SuperIcon = () => <div>x<sup>2</sup></div>;
const SuperDecorator = (props) => <sup className="superscript">{props.children}</sup>;

export default {
	title: 'Two Column (Content)',
	name: 'caseStudy2ColContent',
	type: 'document',
	icon: BlockContentIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Two Column (Content)'
		},
		{
			title: "Left Column Top Content",
			name: "leftColTopContent",
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
							{title: 'Emphasis', value: 'em'},
							{title: "Super", value: 'super', icon: SuperIcon, component: SuperDecorator},
						],
					}
				},
			]
		},
		{
			title: "Left Column Bottom Content",
			name: "leftColBottomContent",
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
							{title: 'Emphasis', value: 'em'},
							{title: "Super", value: 'super', icon: SuperIcon, component: SuperDecorator},
						],
					}
				},
			]
		},
		{
			title: "Right Column Top Content",
			name: "rightColTopContent",
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
							{title: 'Emphasis', value: 'em'},
							{title: "Super", value: 'super', icon: SuperIcon, component: SuperDecorator},
						],
					}
				},
			]
		},
		{
			title: "Right Column Bottom Content",
			name: "rightColBottomContent",
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
							{title: 'Emphasis', value: 'em'},
							{title: "Super", value: 'super', icon: SuperIcon, component: SuperDecorator},
						],
					}
				},
			]
		},
		{
			title: 'Modal',
			name: 'modal',
			type: 'reference',
			to: [{ type: 'contentModal' }]
		}
	]
}