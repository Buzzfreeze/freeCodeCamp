---
id: 5f344fc1520b6719f2e35605
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

มันจะมี 2 sections บนเมนู
หนึ่งคือส่วนสำหรับกาแฟ และอีกหนึ่งสำหรับของความ
จงเพิ่ม `section` element อันหนึ่งไว้ใน`main` element เพื่อที่คุณจะได้มีที่ในการใส่รายชื่อกาแฟที่ร้านนี้ขาย
 
# --hints--

คุณควรมีแท็กเปิด`<section>` อันหนึ่ง

```js
assert(code.match(/<section\s*>/i));
```

You should have a closing `</section>` tag.

```js
assert(code.match(/<\/section\s*>/i));
```

You should not change your existing `main` element. Make sure you didn't delete the closing tag.

```js
assert($('main').length === 1);
```

Your `section` element should be within your `main` element.

```js
const main = document.querySelectorAll('main')?.[0];
assert(main.children[0].tagName === 'SECTION');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
  </head>
  <body>
    <header>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
    </header>
--fcc-editable-region--
    <main>
    </main>
--fcc-editable-region--
  </body>
<html>
```
