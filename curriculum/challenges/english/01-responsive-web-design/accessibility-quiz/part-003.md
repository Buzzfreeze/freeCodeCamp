---
id: 61329b210dac0b08047fd6ab
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

มาพูดถึง `meta` tags กันต่อ `viewport` definition ทำหน้าที่บอก browser ว่าจะ render page อย่างไรและช่วยให้เข้าถึงการมองเห็นในโทรศัพท์ได้ดียิ่งขึ้น นอกจากนี้ยังช่วยในเรื่องของ _SEO_ (search engine optimisation).

จงเพิ่ม `viewport` definition พร้อมกับ `content` attribute ที่มีการบอกค่า `width` and `initial-scale` ของ page.

# --hints--

คุณควรสร้า `meta` element ขึ้นมาอีกอันหนึ่งใน `head`.

```js
assert.equal(document.querySelectorAll('body > meta')?.length, 2);
```

You should give the `meta` a `name` attribute of `viewport`.

```js
assert.equal(document.querySelectorAll('body > meta[name="viewport"]')?.length, 1);
```

You should give the `meta` a `content` attribute of `width=device-width, initial-scale=1`.

```js
// TODO: Double-check this is the only correct answer
assert.equal(document.querySelectorAll('body > meta[content="width=device-width, initial-scale=1"]')?.length, 1);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
--fcc-editable-region--
  <head>
    <meta charset="UTF-8" />
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
