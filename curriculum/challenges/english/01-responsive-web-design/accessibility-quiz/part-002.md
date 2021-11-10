---
id: 613297a923965e0703b64796
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

ตอนนี้คุณน่าจะคุ้นเคยกับ `meta` tag แล้ว มันถูกใช้เพื่อระบุข้อมูลที่เกี่ยวกับ page, เช่น ข้อหัว, คำอธิบาย, คีย์เวิร์ดและผู้เขียน

จงเขียน `meta` tag ซึ่งประกอบด้วย `charset` value ที่เหมาะสมลงไปใน page.

โดย `charset` attribute จะระบุ character encoding ของ page และปัจจุบัน `UTF-8` เป็น encoding ตัวเดียวที่ใช้ได้กับ browsers ทั่ว ๆ ไป

# --hints--

คุณควรสร้าง`meta` element ภายใน `head` element.

```js
// TODO: Once builder is fixed so head info is not in body
assert.exists(document.querySelector('body > meta'));
```

You should give the `meta` tag a `charset` of `UTF-8`.

```js
assert.equal(document.querySelector('body > meta')?.getAttribute('charset'), 'UTF-8');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
--fcc-editable-region--
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
--fcc-editable-region--
  <body>

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
```
