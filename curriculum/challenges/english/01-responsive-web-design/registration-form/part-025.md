---
id: 60fab4a123ce4b04526b082b
title: Part 25
challengeType: 0
dashedName: part-25
---

# --description--

คุณต้องการเพียง radio input อันหนึ่งให้ถูกเลือกได้ในเวลาเดียวกันอย่างไรก็ตาม, แบบฟอร์มไม่รู้ว่า radio input อันไหนเกี่ยวข้องกันบ้าง

เพื่อที่จะสร้างความเกี่ยวข้องให้กับ radio input, จงใส่ `name` attribute ที่มีค่า `account-type` ให้พวกพวกมัน
ตอนนี้ มันเป็นไปไม่ได้แรกที่จะเลือกทั้งสองตัวเลือกในเวลาเดียวกัน 

# --hints--

คุณควรใส่ `name` attribute ที่มีค่า `account-type` ที่ radio input อันแรก

```js
assert.equal(document.querySelector('fieldset:nth-child(2) label:nth-child(1) input[type="radio"]')?.name, 'account-type');
```

You should give the second radio input the `name` attribute with a value of `account-type`.

```js
assert.equal(document.querySelector('fieldset:nth-child(2) label:nth-child(2) input[type="radio"]')?.name, 'account-type');
```

You should not give the `checkbox` the `name` attribute.

```js
assert.isEmpty(document.querySelector('fieldset:nth-child(2) label:nth-child(3) input[type="checkbox"]')?.name);
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
--fcc-editable-region--
      <fieldset>
        <label><input type="radio" /> Personal Account</label>
        <label><input type="radio" /> Business Account</label>
        <label><input type="checkbox" required /> I accept the terms and conditions</label>
      </fieldset>
--fcc-editable-region--
      <fieldset></fieldset>
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
