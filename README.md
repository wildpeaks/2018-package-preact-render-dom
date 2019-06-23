# Render to DOM

[![Build Status](https://travis-ci.org/wildpeaks/package-preact-render-dom.svg?branch=master)](https://travis-ci.org/wildpeaks/package-preact-render-dom) [![Greenkeeper badge](https://badges.greenkeeper.io/wildpeaks/package-preact-render-dom.svg)](https://greenkeeper.io/)

**Renders a Preact component** in the DOM, similar to `@wildpeaks/react-render-dom`.

Install:

	npm install @wildpeaks/preact-render-dom

Example:
````ts
import {h} from 'preact';
import {render} from '@wildpeaks/preact-render-dom';

interface MyProps {
	href: string;
}

const container = document.createElement('div');
const MyComponent: preact.FunctionalComponent<MyProps> = (props: MyProps) => h('a', props);
render<MyProps>(container, MyComponent, {href: 'stateless'});
````
