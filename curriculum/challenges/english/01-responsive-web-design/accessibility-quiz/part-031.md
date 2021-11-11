---
id: 6145e8b5080a5f06bb0223d0
title: Part 31
challengeType: 0
dashedName: part-31
---

# --description--

จงใส่ข้อความ `label` elements ที่มี `input` ขึ้นมาก่อนข้อความ
หลังจากนั้น จงใส่ `value` ที่ตรงกับข้อความนั้นใน `input` elements

ข้อความควรเป็น `True` ไม่ก็ `False`.

# --hints--

คุณควรใส่เนื้อหาลงใน `label` element อันแรก

```js
assert.notEmpty(document.querySelectorAll('ul.answers-list > li > label')?.[0]?.textContent?.trim());
```

คุณควรใส่เนื้อหาลงใน `label` element อันที่สอง

```js
assert.notEmpty(document.querySelectorAll('ul.answers-list > li > label')?.[1]?.textContent?.trim());
```

คุณควรใส่เนื้อหาลงใน `label` element อันที่สาม

```js
assert.notEmpty(document.querySelectorAll('ul.answers-list > li > label')?.[2]?.textContent?.trim());
```

คุณควรใส่เนื้อหาลงใน `label` element อันที่สี่

```js
assert.notEmpty(document.querySelectorAll('ul.answers-list > li > label')?.[3]?.textContent?.trim());
```

คุณควรวางข้อความของ `label` อันแรกไว้หลังจาก `input` element

```js
assert.match(document.querySelectorAll('ul.answers-list > li > label')?.[0]?.innerHTML, />[\s\S]+[a-zA-Z]/);
```

คุณควรวางข้อความของ `label` อันที่สองไว้หลังจาก `input` element

```js
assert.match(document.querySelectorAll('ul.answers-list > li > label')?.[1]?.innerHTML, />[\s\S]+[a-zA-Z]/);
```

คุณควรวางข้อความของ `label` อันที่สามไว้หลังจาก `input` element

```js
assert.match(document.querySelectorAll('ul.answers-list > li > label')?.[2]?.innerHTML, />[\s\S]+[a-zA-Z]/);
```

คุณควรวางข้อความของ `label` อันที่สี่ไว้หลังจาก `input` element

```js
assert.match(document.querySelectorAll('ul.answers-list > li > label')?.[3]?.innerHTML, />[\s\S]+[a-zA-Z]/);
```

คุณควรกำหนดให้ `label` อันแรกมีข้อความเป็น `True` หรือ `False`.

```js
assert.include(['True', 'False'], document.querySelectorAll('ul.answers-list > li > label')?.[0]?.textContent?.trim());
```

คุณควรกำหนดให้ `label` อันที่สองมีข้อความเป็น `True` 

```js
const l = (n) => document.querySelectorAll('ul.answers-list > li > label')?.[n]?.textContent?.trim();
assert(l(0) === 'False' ? l(1) === 'True' : true);
```

คุณควรกำหนดให้ `label` อันที่สองมีข้อความเป็น `False`.

```js
const l = (n) => document.querySelectorAll('ul.answers-list > li > label')?.[n]?.textContent?.trim();
assert(l(0) === 'True' ? l(1) === 'False' : true);
```

คุณควรกำหนดให้ `label` อันที่สามมีข้อความเป็น `True` หรือ `False`.

```js
assert.include(['True', 'False'], document.querySelectorAll('ul.answers-list > li > label')?.[2]?.textContent?.trim());
```

คุณควรกำหนดให้ `label` อันที่สี่มีข้อความเป็น `True`

```js
const l = (n) => document.querySelectorAll('ul.answers-list > li > label')?.[n]?.textContent?.trim();
assert(l(2) === 'False' ? l(3) === 'True' : true);
```

คุณควรกำหนดให้ `label` อันที่สี่มีข้อความเป็น `False`


```js
const l = (n) => document.querySelectorAll('ul.answers-list > li > label')?.[n]?.textContent?.trim();
assert(l(2) === 'True' ? l(3) === 'False' : true);
```

คุณควรกำหนดให้ `input` อันแรกมี `value` ตรงกับข้อความใน `label`

```js
assert.equal(document.querySelectorAll('ul.answers-list > li > label')?.[0]?.textContent?.trim()?.toLowerCase(), document.querySelectorAll('ul.answers-list > li > label > input')?.[0]?.value?.toLowerCase());
```

คุณควรกำหนดให้ `input` อันที่สองมี `value` ตรงกับข้อความใน `label`

```js
assert.equal(document.querySelectorAll('ul.answers-list > li > label')?.[1]?.textContent?.trim()?.toLowerCase(), document.querySelectorAll('ul.answers-list > li > label > input')?.[1]?.value?.toLowerCase());
```

คุณควรกำหนดให้ `input` อันที่สามมี `value` ตรงกับข้อความใน `label`

```js
assert.equal(document.querySelectorAll('ul.answers-list > li > label')?.[2]?.textContent?.trim()?.toLowerCase(), document.querySelectorAll('ul.answers-list > li > label > input')?.[2]?.value?.toLowerCase());
```

คุณควรกำหนดให้ `input` อันที่สี่มี `value` ตรงกับข้อความใน `label`

```js
assert.equal(document.querySelectorAll('ul.answers-list > li > label')?.[3]?.textContent?.trim()?.toLowerCase(), document.querySelectorAll('ul.answers-list > li > label > input')?.[3]?.value?.toLowerCase());
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="freeCodeCamp Accessibility Quiz practice project" />
    <title>freeCodeCamp: Accessibility Quiz</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <img id="logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg">
      <h1>HTML/CSS Quiz</h1>
      <nav>
        <ul>
          <li><a href="#student-info">INFO</a></li>
          <li><a href="#html-questions">HTML</a></li>
          <li><a href="#css-questions">CSS</a></li>
			  </ul>
      </nav>
    </header>
    <main>
      <form method="post" action="https://freecodecamp.org/practice-project/accessibility-quiz">
        <section role="region" aria-labelledby="student-info">
          <h2 id="student-info">Student Info</h2>
          <div class="info">
            <label for="student-name">Name:</label>
            <input type="text" name="student-name" id="student-name" />
          </div>
          <div class="info">
            <label for="student-email">Email:</label>
            <input type="email" name="student-email" id="student-email" />
          </div>
          <div class="info">
            <label for="birth-date">D.O.B.<span class="sr-only">(Date of Birth)</span></label>
            <input type="date" name="birth-date" id="birth-date" />
          </div>
        </section>
        <section role="region" aria-labelledby="html-questions">
          <h2 id="html-questions">HTML</h2>
          <div class="question-block">
            <p>1</p>
            <fieldset class="question" name="html-question-one">
              <legend>
                The legend element represents a caption for the content of its
                parent fieldset element
              </legend>
--fcc-editable-region--
              <ul class="answers-list">
                <li>
                  <label for="q1-a1">
                    <input type="radio" id="q1-a1" />
                  </label>
                </li>
                <li>
                  <label for="q1-a2">
                    <input type="radio" id="q1-a2" />
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>
          <div class="question-block">
            <p>2</p>
            <fieldset class="question" name="html-question-two">
              <legend>
                A label element nesting an input element is required to have a
                for attribute with the same value as the input's id
              </legend>
              <ul class="answers-list">
                <li>
                  <label for="q2-a1">
                    <input type="radio" id="q2-a1" />
                  </label>
                </li>
                <li>
                  <label for="q2-a2">
                    <input type="radio" id="q2-a2" />
                  </label>
                </li>
              </ul>
--fcc-editable-region--
            </fieldset>
          </div>
        </section>
        <section role="region" aria-labelledby="css-questions">
          <h2 id="css-questions">CSS</h2>
        </section>
      </form>
    </main>
  </body>
</html>

```

```css
body {
  background: #f5f6f7;
	color: #1b1b32;
	font-family: Helvetica;
	margin: 0;
}

header {
  width: 100%;
	height: 50px;
	background-color: #1b1b32;
	display: flex;
}

#logo {
  width: max(100px, 18vw);
	background-color: #0a0a23;
  aspect-ratio: 35 / 4;
	padding: 0.4rem;
}

h1 {
  color: #f1be32;
	font-size: min(5vw, 1.2em);
}

nav {
  width: 50%;
	max-width: 300px;
	height: 50px;
}

nav > ul {
  display: flex;
	justify-content: space-evenly;
}

h1,
h2 {
  font-family: Verdana, Tahoma;
}

h2 {
  border-bottom: 4px solid #dfdfe2;
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
}

```
