---
id: 61329d52e5010e08d9b9d66b
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

`meta` tag ที่สำคัญอีกตัวนึงสำหรับการเข้าถึงและ SEO คือ `description` definition โดยค่าใน `content` attribute จะถูก search engines นำมาใช้เพื่อเป็นคำอธิบายของ page

จงเพิ่ม `meta` tag อีกหนึ่งอัน ที่ประกอบด้วย `name` attribute ที่ถูกกำหนดใน `description`, และจงเพิ่ม `content` attribute ที่เป็นประโยชน์.

# --hints--

คุณควรเพิ่ม  `meta` tag อีกอันหนึ่งใน `head`.

```js
assert.equal(document.querySelectorAll('meta').length, 3);
```

คุณควรกำหนดให้ `meta` มี `name` attribute เป็น `description`.

```js
assert.exists(document.querySelector('meta[name="description"]'));
```

คุณควรกำหนดให้ `meta` มี `content` attribute อันหนึ่ง

```js
assert.notEmpty(document.querySelector('meta[name="description"]')?.content);
```

ค่าของ `content` attribute ไม่ควรจะมีมากกว่า 165 ตัวอักษร. _นี่คือความยาวสุงสุดของคำอธิบาย Google รับได้_

```js
assert.isAtMost(document.querySelector('meta[name="description"]')?.content?.length, 165);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
--fcc-editable-region--
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
