import { NumberIcon } from '@sanity/icons';

export default {
	title: 'Statistics',
	name: 'caseStudyStatistics',
	type: 'document',
	icon: NumberIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Statistics'
		},
		{
			title: 'Statistic',
			name: 'statistic',
			type: 'array',
			of: [
				{type: 'statisticItem'}
			],
			// validate only allow 2 or 3 items
			validation: Rule => Rule.max(3).min(2),
			description: 'Please add 2 or 3 statistics.'
		}
	]
}