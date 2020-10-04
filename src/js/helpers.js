export const initToggleShow = (selector = "[data-toggle]") => {
	const showHideHandlers = document.querySelectorAll(selector);
	if (showHideHandlers){
		showHideHandlers.forEach(handler => {
			handler.addEventListener('click', event => {
				event.preventDefault();
				const handlerActiveClass = handler.dataset.active || 'active';
	
				const target = handler.dataset.target;
				const targetEl = document.querySelector(target);
	
				if (targetEl){
					const targetActiveClass = targetEl.dataset.active || 'active';
					if (handler.classList.contains(handlerActiveClass)){
						targetEl.classList.remove(targetActiveClass);
						handler.classList.remove(handlerActiveClass);
					} else {
						targetEl.classList.add(targetActiveClass);
						handler.classList.add(handlerActiveClass);
					}
				}
			});
		})
	}
}