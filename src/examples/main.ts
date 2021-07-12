import Vue from 'vue';

import { grow } from '../grow';

new Vue(
	{

		el: '#app',

		directives: {
			grow,
		},

		render(createElement) {
			return createElement(
				'div',
				[
					createElement(
						'textarea',
						{
							style: {
								padding: '10px',
								margin: '20px',
							},
							directives: [
								{
									name: 'grow',
								},
							],
						},
					),
					createElement(
						'textarea',
						{
							directives: [
								{
									name: 'grow',
									value: true,
								},
							],
						},
					),
					createElement(
						'textarea',
						{
							directives: [
								{
									name: 'grow',
									value: false,
								},
							],
						},
					),
				],
			);
		},

	},
);
