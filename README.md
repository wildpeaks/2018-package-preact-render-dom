# Render to DOM

[![Build Status](https://travis-ci.org/wildpeaks/package-preact-render-dom.svg?branch=master)](https://travis-ci.org/wildpeaks/package-preact-render-dom)

**Renders a Preact component** in the DOM, similar to `@wildpeaks/react-render-dom`.

Install:

	npm install @wildpeaks/preact-render-dom

Usage:

	const MyComponent = require('components/MyComponent');
	const render = require('@wildpeaks/preact-render-dom');

	render(document.body, MyComponent, props);
