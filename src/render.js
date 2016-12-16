/* eslint-env browser */
'use strict';
const {h, render} = require('preact');

function required(){
	throw new Error('Missing required parameter');
}


/**
 * Renders a component using props provided (replacing the contents of the container).
 * @param  {HTMLElement}  container  HTML tag to render into
 * @param  {PreactClass}  Component  Preact component to render
 * @param  {Object}       props      Props to render the Component with
 */
module.exports = function renderClassic(container = required(), Component = required(), props = {}){
	const component = h(Component, props);
	if (container.firstChild === null){
		render(component, container);
	} else {
		render(component, container, container.firstChild);
	}
};
