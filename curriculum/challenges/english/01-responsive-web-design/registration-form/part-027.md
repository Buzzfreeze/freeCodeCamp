---
id: 60fab9f17fa294054b74228c
title: Part 27
challengeType: 0
dashedName: part-27
---

# --description--

ต่อกันที่ `fieldset` ส่วนสุดท้าย
จะเป็นยังไงถ้าคุณต้องการให้ผู้ใช้อัพโหลดรูปโปรไฟล์ของเขา? 

ใช่แล้ว `input` ที่มีค่า `file` นั้นถูกเตรียมไว้เพื่อการนั้น
จงเพิ่ม `label` อันหนึ่งที่มีข้อความว่า `Upload a profile picture: `
และจงเพิ่ม `input` ที่จะมารับไฟล์ที่ถูกอัพโหลด

# --hints--

คุณควรเพิ่ม `label` 1 อันที่มีข้อความว่า `Upload a profile picture: `.

```js
assert.match(document.querySelector('fieldset:nth-child(3) > label')?.innerText, /Upload a profile picture:/i);
```

You should nest an `input` element inside the `label` element.

```js
assert.exists(document.querySelector('fieldset:nth-child(3) > label > input'));
```

You should give the `input` element a `type` of `file`.

```js
assert.equal(document.querySelector('fieldset:nth-child(3) > label > input')?.type, 'file');
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
          <input type="checkbox" required /> I accept the
				    <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
			  </label>
      </fieldset>
--fcc-editable-region--
      <fieldset>

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
