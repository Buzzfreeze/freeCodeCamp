---
id: 5f8884f4c46685731aabfc41
title: Simulate Actions Using a Headless Browser
challengeType: 2
---

## Description

<section id='description'>

As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.

</section>

## Instructions

<section id='instructions'>

Within `tests/2_functional-tests.js`, in the `'submit "surname" : "Vespucci" - write your e2e test...'` test (`// #6`), automate filling-in and submitting the form from scratch:

1. Fill in the form with the `surname` of `Vespucci`
2. Submit it pressing `'submit'` button

Within the callback:

1. assert that status is `200`
2. assert that the text inside the element `span#name` is `'Amerigo'`
3. assert that the text inside the element `span#surname` is `'Vespucci'`
4. assert that the element(s) `span#dates` exist and their count is `1`

Do not forget to to remove the `assert.fail()` call.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should assert that the headless browser request succeeded.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(data => { assert.equal(data.assertions[0].method, 'browser.success'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should assert that the text inside the element 'span#name' is 'Amerigo'.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(data => { assert.equal(data.assertions[1].method, 'browser.text'); assert.match(data.assertions[1].args[0], /('|")span#name\1/); assert.match(data.assertions[1].args[1], /('|")Amerigo\1/);}, xhr => { throw new Error(xhr.responseText); })
  - text: You should assert that the text inside the element 'span#surname' is 'Vespucci'.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(data => { assert.equal(data.assertions[2].method, 'browser.text'); assert.match(data.assertions[2].args[0], /('|")span#surname\1/); assert.match(data.assertions[2].args[1], /('|")Vespucci\1/);}, xhr => { throw new Error(xhr.responseText); })
  - text: You should assert that the element 'span#dates' exist and its count is 1.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(data => { assert.equal(data.assertions[3].method, 'browser.element'); assert.match(data.assertions[3].args[0], /('|")span#dates\1/); assert.equal(data.assertions[3].args[1], 1);}, xhr => { throw new Error(xhr.responseText); })
```

</section>

## Challenge Seed

<section id='challengeSeed'>

</section>

## Solution

<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>