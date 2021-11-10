---
id: 60f84ec41116b209c280ba91
title: Part 20
challengeType: 0
dashedName: part-20
---

# --description--

ด้วยการตั้งให้ `type="password"` คุณสามารถใช้งาน `pattern` attribute เพื่อกำหนด expression ที่รหัสผ่านจะต้องทำให้ตรงเพื่อที่จะถูกมองว่ามันอยู่ในรูปแบบที่ถูกต้อง 

จงเพิ่ม `pattern` attribute ไปที่ `input` element ของรหัสผ่านเพิ่มที่จะใส่ค่า: `[a-z0-5]{8,}`

ด้านบนคือ regular expression ที่จะสร้างชุด string ที่ประกอบด้วยตัวอักษรพิมพ์เล็กหรือเลข `0` ถึง `5` ความยาวอย่างน้อย 8 ตัว
หลังจากนั้ง จงลบ `minlength` attribute และลองเล่นกับมัน

# --hints--

คุณควรเพิ่ม `pattern` ให้กับ`input` element ของรหัสผ่านattribute.

```js
assert.isNotEmpty(document.querySelector('input[type="password"]')?.pattern);
```

You should give the `pattern` attribute a value of `[a-z0-5]{8,}`.

```js
assert.equal(document.querySelector('input[type="password"]')?.pattern, '[a-z0-5]{8,}');
```

You should remove the `minlength` attribute from the password `input` element.

```js
assert.equal(document.querySelector('input[type="password"]')?.minLength, -1);
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
        <label>Enter Your First Name: <input type="text" required /></label>
        <label>Enter Your Last Name: <input type="text" required /></label>
        <label>Enter Your Email: <input type="email" required /></label>
        <label>Create a New Password: <input type="password" minlength="8" required /></label>
      </fieldset>
--fcc-editable-region--
      <fieldset></fieldset>
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
