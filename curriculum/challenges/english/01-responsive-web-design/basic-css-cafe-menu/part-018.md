---
id: 5f3477cbcb6ba47918c1da92
title: Part 18
challengeType: 0
dashedName: part-18
---

# --description--

เพื่อที่ styling ของหน้านี้จะได้ดูหมือน ๆ กันในหน้าจอโทรศัพท์อย่างที่มันแสดงผลบน desktop หรือ labtop คุณจำเป็นจำต้องเพิ่ม `meta` element พร้อมกับ `content` attribute แบบพิเศษ

จงเพิ่มโค้ดดังต่อไปนี้ใน `head` element:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

# --hints--

คุณควรมี 2 `meta` elements.

```js
assert(code.match(/<meta.*\/?>/g).length === 2);
```

Your `meta` element should have a `name` attribute with a value of `viewport`.

```js
const meta = $('meta');
assert(meta[0].outerHTML.match(/name=('|")viewport\1/) || meta[1].outerHTML.match(/name=('|")viewport\1/));
```

Your `meta` element should have a `content` attribute with a value of `width=device-width, initial-scale=1.0`.

```js
const meta = $('meta');
assert(meta[0].outerHTML.match(/content=('|")width=device-width, initial-scale=1.0\1/) || meta[1].outerHTML.match(/content=('|")width=device-width, initial-scale=1.0\1/));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>
--fcc-editable-region--
  <body>
    <header>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
    </header>
    <main>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
<html>
```

```css
h1, h2, p {
  text-align: center;
}
```
