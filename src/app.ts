import Vue from 'vue';

import './app.css';

import { grow } from './grow';

export default Vue.extend({

	name: 'app',

	directives: {
		grow,
	},

	render(h) {
		return h(
			'div',
			{
				class: 'app',
			},
			[
				h(
					'h1',
					'Vue 2 textarea autogrow'
				),
				h(
					'div',
					[
						h(
							'textarea',
							{
								directives: [
									{
										name: 'grow',
									},
								],
							},
						),
					],
				),
				h(
					'div',
					{
						class: 'footer',
					},
					[
						h(
							'a',
							{
								attrs: {
									href: 'https://github.com/nevadavid/vue-textarea-grow',
								},
							},
							'Github',
						),
					],
				),
			],
		);
	},

});
