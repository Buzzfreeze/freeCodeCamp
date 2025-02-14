---
id: 60f81616cff80508badf9ad5
title: Part 18
challengeType: 0
dashedName: part-18
---

# --description--

มาถึงจุดนี้ คุณควรจะสามารถส่งแบบฟอร์มได้แล้ว อย่างไรก็ตาม คุณอาจจะสังเกตได้ว่ามันไม่ค่อยจะมีอะไรเท่าไหร่

เพิื่อทำให้แบบฟอร์มของเรา interact กับผู้ใช้ได้มาขึ้น จงเพิ่ม `required` attribute ให้กับ `input` elements ใน `fieldset` อันแรก

ในตอนนี้ ถ้าคุณพยายามที่จะส่งแบบฟอร์มที่ไม่ได้กรอกข้อมูลในช่องที่จำเป็น คุณจะได้รับ error message

# --hints--

คุณควรเพิ่ม `required` attribute ให้กับ `input` element อันแรก

```js
assert.equal(document.querySelector('input')?.required, true);
```

You should give the second `input` element a `required` attribute.

```js
assert.equal(document.querySelectorAll('input')?.[1]?.required, true);
```

You should give the third `input` element a `required` attribute.

```js
assert.equal(document.querySelectorAll('input')?.[2]?.required, true);
```

You should give the fourth `input` element a `required` attribute.

```js
assert.equal(document.querySelectorAll('input')?.[3]?.required, true);
```

You should not give the `submit` `input` a `required` attribute.

```js
assert.equal(document.querySelector('input[type="submit"]')?.required, false);
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
        <label>Enter Your First Name: <input type="text" /></label>
        <label>Enter Your Last Name: <input type="text" /></label>
        <label>Enter Your Email: <input type="email" /></label>
        <label>Create a New Password: <input type="password" /></label>
      </fieldset>
      <fieldset></fieldset>
      <fieldset></fieldset>
      <input type="submit" value="Submit" />
--fcc-editable-region--
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
