---
id: 5f344fbc22624a2976425065
title: Part 10
challengeType: 0
dashedName: part-10
---

# --description--

จงสร้าง `h2` element ไว้ใน `section` element และจงกำหนดให้มันมีข้อความที่เขียนว่า `Coffee`.

# --hints--

คุณควรมีแท็กเปิด`<h2>` อันหนึ่ง

```js
assert(code.match(/<h2\s*>/i));
```

You should have a closing `</h2>` tag.

```js
assert(code.match(/<\/h2\s*>/i));
```

You should not change your existing `section` element. Make sure you did not delete the closing tag.

```js
assert($('section').length === 1);
```

Your `h2` element should be within your `section` element.

```js
const h2 = document.querySelector('h2');
assert(h2.parentElement.tagName === 'SECTION');
```

Your `h2` element should have the text `Coffee`.

```js
const h2 = document.querySelector('h2');
assert(h2.innerText === 'Coffee');
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
    <main>
--fcc-editable-region--
      <section>
      </section>
--fcc-editable-region--
    </main>
  </body>
<html>
```
