function input(el: HTMLElement) {
	// Revert height
	el.style.height = 'auto';

	const style = window.getComputedStyle(el);
	const paddingTop = style.getPropertyValue('padding-top');
	const paddingBottom = style.getPropertyValue('padding-bottom');
	const height = el.scrollHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);

	el.style.height = height + 'px';
}

export const grow = {
	bind(el: HTMLElement, binding: any) {
		if (
			!binding.hasOwnProperty('value')
			|| binding.value
		) {
			el.style.overflowY = 'hidden';
			el.style.resize = 'none';

			el.addEventListener(
				'input',
				() => input(el),
			);
		}
	},

	unbind(el: HTMLElement) {
		el.removeEventListener(
			'input',
			() => input(el),
		);
	},
};
