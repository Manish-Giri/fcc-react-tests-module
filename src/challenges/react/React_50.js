/* eslint-disable */
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import { transform } from 'babel-standalone'

// SET TO TRUE WHEN QA IS COMPLETE:
export const QA = true;

// ---------------------------- define challenge title ----------------------------
export const challengeTitle = `<span class = 'default'>Challenge: </span>Render React on the Server with renderToString`

// ---------------------------- challenge text ----------------------------
export const challengeText = `<span class = 'default'>Intro: </span>So far, you have been rendering React components on the client. Normally, this is what you will always do. However, there are some use cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible. In fact, React provides a <code>renderToString()</code> method you can use for this purpose.
<br><br>

There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's
markup which can be crawled by search engines. Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.`

// ---------------------------- challenge instructions ----------------------------
export const challengeInstructions = `<span class = 'default'>Instructions: </span>Use the <code>renderToString()</code> method that's provided on the <code>ReactDOM</code> global object to render <code>App</code> to a string.`

// ---------------------------- define challenge seed code ----------------------------
export const seedCode = `
class App extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return <div/>
  }
};

// change code below this line`

// ---------------------------- define challenge solution code ----------------------------
export const solutionCode = `
class App extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
    return <div/>
  }
};

// change code below this line
ReactDOM.renderToString(<App/>);`

// ---------------------------- define challenge tests ----------------------------

export const executeTests = (code) => {

	const error_0 = 'The App component should render to a string using ReactDOM.renderToString.';

	let testResults = [
		{
			test: 0,
			status: false,
			condition: error_0
		}
	];

	let passed = true;

	// test 0:
	try {
		assert.strictEqual(code.replace(/\s/g,'').includes('ReactDOM.renderToString(<App/>)'), true, error_0);
		testResults[0].status = true;
	} catch (err) {
		passed = false;
		testResults[0].status = false;
	}

	return {
		passed,
		testResults
	}

}

// ---------------------------- define live render function ----------------------------

export const liveRender = (code) => undefined;
