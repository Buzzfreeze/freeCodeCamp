---
id: 60f80e0081e0f2052ae5b505
title: Part 16
challengeType: 0
dashedName: part-16
---

# --description--

การระบุ `type` attribute ให้กับ form element นั้นเป็นสิ่งสำคัญเพื่อที่ browser จะได้รู้ว่าข้อมูลประเภทไหนที่มันต้องการ
ถ้า `type` ไม่ได้ถูกระบุไว้, browser จะตั้งค่าให้ค่าเริ่มต้นเป็น `text`

จงใส่ `type` attribute ที่มีค่าเป็น `text` ใน `input` elements 2 อันแรก
ให้ `type` attribute อันที่ 3 เป็น `email` และ `type` attribute อันที่ 4 เป็น `password`

`email` type จะอนุญาตให้สามารถใส่ input ที่มี `@` และ `.` ได้เท่านั้น
`password` type จะตรวจสอบ input และแจ้งเตือนขึ้นมาหากเว็บไซต์ไม่ได้ใช้ HTTPS

# --hints--

คุณควรเพิ่ม `type` attribute ที่เป็น `text` อันหนึ่งให้กับ `input` element

```js
assert.equal(document.querySelector('input')?.type, 'text');
```

You should give the second `input` element a `type` attribute of `text`.

```js
assert.equal(document.querySelectorAll('input')?.[1]?.type, 'text');
```

You should give the third `input` element a `type` attribute of `email`.

```js
assert.equal(document.querySelectorAll('input')?.[2]?.type, 'email');
```

You should give the fourth `input` element a `type` attribute of `password`.

```js
assert.equal(document.querySelectorAll('input')?.[3]?.type, 'password');
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
--fcc-editable-region--
      <fieldset>
        <label>Enter Your First Name: <input /></label>
        <label>Enter Your Last Name: <input /></label>
        <label>Enter Your Email: <input /></label>
        <label>Create a New Password: <input /></label>
      </fieldset>
--fcc-editable-region--
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

label {
	display: block;
	margin: 0.5rem 0;
}

```
