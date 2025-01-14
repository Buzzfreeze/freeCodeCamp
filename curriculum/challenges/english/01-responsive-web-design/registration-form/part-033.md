---
id: 60facde2d0dc61085b41063f
title: Part 33
challengeType: 0
dashedName: part-33
---

# --description--

`textarea` element ทำหน้าที่เหม็นเป็น `input` element ประเภท `text`
แต่จะมาพร้อมกับความสามารถที่จะสามารถข้อความที่มีหลายบรรทัดได้
รวมถึงเราสามารถกำหนดค่าเริ่มต้นของจำนวนแถวและหลักของข้อความได้

เพื่อที่ผุู้ใช้ได้สามารถสมัครเข้ามาพร้อมกับ bio ของเขา จงเพิ่ม `label` อันหนึ่งที่มีข้อความว่า `Provide a bio:` ที่ตามมาด้วย `textarea` element.

# --hints--

คุณควรเพิ่ม `label` element อันหนึ่งภายใน `fieldset` อันที่สามหลังจาก `label` elements ที่มีอยู่แล้ว

```js
assert.exists(document.querySelector('fieldset:nth-child(3) > label:nth-child(4)'));
```

You should give the `label` a text of `Provide a bio:`.

```js
assert.match(document.querySelector('fieldset:nth-child(3) > label:nth-child(4)')?.innerText, /Provide a bio/);
```

You should nest a `textarea` element within the `label`.

```js
assert.exists(document.querySelector('fieldset:nth-child(3) > label:nth-child(4) > textarea'));
```

You should give the `textarea` element opening and closing tags.

```js
assert.match(code, /<textarea\s*>[\s\S]*<\/textarea\s*>/);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>freeCodeCamp Registration Form Project</title>
	  <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
    <form action='https://fcc-registration-form.com'>
      <fieldset>
        <label>Enter Your First Name: <input type="text" required /></label>
        <label>Enter Your Last Name: <input type="text" required /></label>
        <label>Enter Your Email: <input type="email" required /></label>
        <label>Create a New Password: <input type="password" pattern="[a-z0-5]{8,}" required /></label>
      </fieldset>
      <fieldset>
        <label><input type="radio" name="account-type" /> Personal Account</label>
        <label><input type="radio" name="account-type" /> Business Account</label>
        <label>
          <input type="checkbox" required /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
			  </label>
      </fieldset>
--fcc-editable-region--
      <fieldset>
        <label>Upload a profile picture: <input type="file" /></label>
        <label>Input your age (years): <input type="number" min="13" max="120" />
			  </label>
        <label>How did you hear about us?
          <select>
            <option value="">(select one)</option>
            <option value="1">freeCodeCamp News</option>
            <option value="2">freeCodeCamp YouTube Channel</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
        </label>

      </fieldset>
--fcc-editable-region--
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

```css
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #1b1b32;
	color: #f5f6f7;
}

label {
	display: block;
	margin: 0.5rem 0;
}

```
