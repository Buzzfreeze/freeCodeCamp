---
id: 6133acc353338c0bba9cb553
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

สิ่งสุดท้ายใน `head`คือ `title` element โดย element นี้มีประโยชน์มากสำหรับ screen readers เพื่อที่มันจะได้เข้าใจเนื้อหาของ page
ยิ่งไปกว่านั้น มันยังเป็นส่วนสำหรับของ _SEO_

จงเพิ่ม `title` ที่ช่วยให้เห็นภาพชัดและกระชับและลงใน page ของคุณ.

# --hints--

คุณควรเพิ่ม `title` element ลงใน `head`.

```js
// TODO: Fix once builder puts head in the right place
assert.exists(document.querySelector('body > title'));
```

คุณไม่ควรทำให้ `title` ยาวกว่า 60 ตัวอักษร.

```js
assert.isAtMost(document.querySelector('body > title')?.textContent?.length, 60);
```

ลองทำให้ `title` element นั้นอธิบายตัวของมันให้ดีขึ้น. _Hint: อย่างน้อง 20 ตัวอักษร_

```js
assert.isAtLeast(document.querySelector('body > title')?.textContent?.length, 20);
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
    <meta name="description" content="freeCodeCamp Accessibility Quiz practice project" />
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
