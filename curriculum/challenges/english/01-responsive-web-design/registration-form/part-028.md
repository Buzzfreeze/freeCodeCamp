---
id: 60fabf0dd4959805dbae09e6
title: Part 28
challengeType: 0
dashedName: part-28
---

# --description--

จงเพิ่ม `label` อีกอันหลังจากอันแรก พร้อมกับข้อความ `Input your age (years): `
หลังจากนั้น จงเก็บใส่ `input` ที่มี `type` เท่ากับ `number`

ตามที่เราไม่ต้องการใช้ผู้ใช้ที่มีอายุต่ำกว่า 13 ปีสมัครได้
จงเพิ่ม `min` attribute ที่มีค่า`13` ใน `input` 
นอกจากนี้เราสามารถคาดได้ว่าผู้ใช้ที่อายุมากกว่า 120 จะไม่มาใช้งาน จงเพิ่ม `max` attribute ที่มีค่า `120` เข้าไป

ในตอนนี้ ถ้ามีใครพยายามที่จะสกรอกค่าที่เกินของเขตที่ตั้งไว้ในฟอร์ม คำแต้งเตือนจะปรากฏขึ้น และแบบฟอร์มจะกดส่งไม่ได้
ไม่เชื่อก็ลองดู

# --hints--

คุณควรเพิ่ม `label` อันหนึ่งที่ `fieldset` อันที่สาม ต่อจาก`label` ที่มีอยู่แล้ว

```js
assert.exists(document.querySelector('fieldset:nth-child(3) > label + label'));
```

You should give the `label` the text `Input your age (years): `.

```js
assert.equal(document.querySelector('fieldset:nth-child(3) > label:nth-child(2)')?.textContent, 'Input your age (years): ');
```

You should give the `label` an `input` with `type` of `number`.

```js
assert.exists(document.querySelector('fieldset:nth-child(3) > label:nth-child(2) > input[type="number"]'));
```

You should give the `input` a `min` attribute with a value of `13`.

```js
assert.equal(document.querySelector('fieldset:nth-child(3) > label:nth-child(2) > input[type="number"]')?.min, '13');
```

You should give the `input` a `max` attribute with a value of `120`.

```js
assert.equal(document.querySelector('fieldset:nth-child(3) > label:nth-child(2) > input[type="number"]')?.max, '120');
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
