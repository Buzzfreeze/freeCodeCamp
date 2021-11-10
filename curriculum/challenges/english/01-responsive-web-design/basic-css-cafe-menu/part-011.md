---
id: 5f344fad8bf01691e71a30eb
title: Part 11
challengeType: 0
dashedName: part-11
---

# --description--

จนถึงตอนนี้ คุณถูกจำกัดการนำเสนอและหน้าตาของ content ที่คุณสร้าง
เพื่อที่จะทำการเปลี่ยนแปลงมัน จงเพิ่ม`style` element ภายใน `head` element.

# --hints--

คุณควรมีแท็กเปิด`<style>` อันหนึ่ง

```js
assert(code.match(/<style\s*>/i));
```

Your code should have a closing `</style>` tag.

```js
assert(code.match(/<\/style\s*>/));
```

Your `style` element should be nested in your `head` element.

```js
assert(code.match(/<head\s*>[\w\W\s]*<style\s*>[\w\W\s]*<\/style\s*>[\w\W\s]*<\/head\s*>/i))
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
  </head>
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
--fcc-editable-region--
<html>
```
