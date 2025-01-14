---
id: 61487f703571b60899055cf9
title: Part 50
challengeType: 0
dashedName: part-50
---

# --description--

จงกำหนดความกว้างของ `section` elements ให้อยู่ที่ `80%` ของ parent container ของมัน
หลังจากนั้น จงใช้ margins เพื่อจัดให้ `section` elements อยู่ตรงกลางและจงเพิ่ม `10px` ให้กับ bottom margin.

นอกจากนี้ จงตรวจสอบให้มั่นใจว่า `section` elements ไม่สามารถมีขนาดกว้างเกิน `600px` 

# --hints--

คุณควรใช้ `section` selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('section'));
```

คุณควรกำหนดให้ `section` มี `width` เท่ากับ `80%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('section')?.width, '80%');
```

คุณควรกำหนดให้ `section` มี `margin-top` เท่ากับ `0`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('section')?.marginTop, '0px');
```

คุณควรกำหนดให้ `section` มี `margin-right` เป็นแบบ `auto`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('section')?.marginRight, 'auto');
```

คุณควรกำหนดให้ `section` มี `margin-bottom` เท่ากับ `10px`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('section')?.marginBottom, '10px');
```

คุณควรกำหนดให้ `section` มี `margin-left` เป็นแบบ `auto`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('section')?.marginLeft, 'auto');
```

คุณควรกำหนดให้ `section` มี `max-width` เท่ากับ `600px`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('section')?.maxWidth, '600px');
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
              <ul class="answers-list">
                <li>
                  <label for="q1-a1">
                    <input type="radio" id="q1-a1" name="q1" value="true" />
                    True
                  </label>
                </li>
                <li>
                  <label for="q1-a2">
                    <input type="radio" id="q1-a2" name="q1" value="false" />
                    False
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
                    <input type="radio" id="q2-a1" name="q2" value="true" />
                    True
                  </label>
                </li>
                <li>
                  <label for="q2-a2">
                    <input type="radio" id="q2-a2" name="q2" value="false" />
                    False
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>
        </section>
        <section role="region" aria-labelledby="css-questions">
          <h2 id="css-questions">CSS</h2>
          <div class="formrow">
            <div class="question-block">
              <label for="customer">Are you a frontend developer?</label>
            </div>
            <div class="answer">
              <select name="customer" id="customer" required>
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div class="question-block">
              <label for="css-questions">Do you have any questions:</label>
            </div>
            <div class="answer">
              <textarea id="css-questions" name="css-questions" rows="5" cols="24">
                Who is flexbox...
              </textarea>
            </div>
          </div>
        </section>
        <button type="submit">Submit</button>
      </form>
    </main>
    <footer>
      <address>
        <a href="https://freecodecamp.org">freeCodeCamp</a><br />
        San Francisco<br />
        California<br />
        USA
      </address>
    </footer>
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
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
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
  text-align: center;
}

nav {
  width: 50%;
	max-width: 300px;
	height: 50px;
}

nav > ul {
  display: flex;
	justify-content: space-evenly;
  flex-wrap: wrap;
	align-items: center;
	padding-inline-start: 0;
	margin-block: 0;
	height: 100%;
}

nav > ul > li {
  color: #dfdfe2;
  margin: 0 0.2rem;
	padding: 0.2rem;
	display: block;
}

nav > ul > li:hover {
  background-color: #dfdfe2;
  color: #1b1b32;
  cursor: pointer;
}

li > a {
  color: inherit;
  text-decoration: none;
}

main {
  padding-top: 50px;
}

--fcc-editable-region--


--fcc-editable-region--

h1,
h2 {
  font-family: Verdana, Tahoma;
}

h2 {
  border-bottom: 4px solid #dfdfe2;
}

p::before {
  content: "Question #";
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
