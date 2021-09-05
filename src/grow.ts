function input(el: HTMLElement) {
	// Revert height
	el.style.height = 'auto';

	const style = window.getComputedStyle(el);
	const borderTop = style.getPropertyValue('border-top-width');
	const borderBottom = style.getPropertyValue('border-bottom-width');
	const height = el.scrollHeight + parseFloat(borderTop) + parseFloat(borderBottom);

	el.style.height = height + 'px';
}

/**
 * Vue 2 directive for handling textarea autogrow (automatically adjustable height).
 */
export const grow = {
	bind(el: HTMLElement, binding: any) {
		if (
			!Object.prototype.hasOwnProperty.call(binding, 'value')
			|| binding.value
		) {
			el.style.overflowY = 'hidden';
			el.style.resize = 'none';
			el.style.boxSizing = 'border-box';

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
