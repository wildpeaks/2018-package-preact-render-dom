/* eslint-env browser */
/* eslint-disable indent */
'use strict';
import {h, render as preactRender} from 'preact';


/**
 * Replaces the contents of the container by the component rendered with props.
 * @param container DOM element to render into
 * @param ComponentClass Preact component class to render
 * @param props Props to render the Component with
 */
export function render<PropsType>(
	container: Element,
	ComponentClass: preact.ComponentConstructor<PropsType, any> | preact.FunctionalComponent<PropsType> | string,
	props: PropsType
): void {
	// @ts-ignore
	const component: JSX.Element = h(ComponentClass, props);
	if (container.firstChild === null){
		preactRender(component, container);
	} else {
		preactRender(component, container, container.firstChild as Element);
	}
}
