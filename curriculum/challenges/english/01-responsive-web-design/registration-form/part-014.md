---
id: 60f803d5241e6a0433a523a1
title: Part 14
challengeType: 0
dashedName: part-14
---

# --description--

ตามที่ `label` elements ถูกตั้งให้มีค่า `inline` โดยเริ่มต้น, มันจะปรากฎในบรรทัดเดียวกันกับข้อความที่พวกเขาติดป้ายไว้
เพื่อทำให้พวกมันปรากฏออกมาคนละบรรทัด จงเพิ่ม `display: block` ที่ `label` element และจงใส่ `margin` ที่มีค่า `0.5rem 0` เพื่อแยกมันออกจากกัน

# --hints--

คุณควรใช้ `label` selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('label'));
```

You should add a `display` property of value `block`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('label')?.display, 'block');
```

You should add a `margin` property of value `0.5rem 0`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('label')?.margin, '0.5rem 0px');
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
        <label>Enter Your First Name:</label>
        <label>Enter Your Last Name:</label>
        <label>Enter Your Email:</label>
        <label>Create a New Password:</label>
      </fieldset>
      <fieldset></fieldset>
      <fieldset></fieldset>
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

--fcc-editable-region--

--fcc-editable-region--
```
