---
id: 5f3477ae9675db8bb7655b30
title: Part 13
challengeType: 0
dashedName: part-13
---

# --description--

ในขั้นตอนที่แล้ว คุณได้ใช้ <dfn>type selector</dfn> เพื่อที่จะตกแต่ง `h1` element
จงจัดให้ `h2` และ `p` element อยู่ตรงกลางโดย type selector อันใหม่สำหรับมันแต่ละอัน

# --hints--

คุรไม่สร้างเปลี่ยนอะไรของ `h1` selector เดิม

```js
const hasH1 = new __helpers.CSSHelp(document).getStyle('h1');
assert(hasH1);
```

You should add a new `h2` selector.

```js
const hasH2 = new __helpers.CSSHelp(document).getStyle('h2');
assert(hasH2);
```

You should add a new `p` selector.

```js
const hasP = new __helpers.CSSHelp(document).getStyle('p');
assert(hasP);
```

Your `h1` element should have a `text-align` of `center`.

```js
const h1TextAlign = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('text-align');
assert(h1TextAlign === 'center');
```

Your `h2` element should have a `text-align` of `center`.

```js
const h2TextAlign = new __helpers.CSSHelp(document).getStyle('h2')?.getPropertyValue('text-align');
assert(h2TextAlign === 'center');
```

Your `p` element should have a `text-align` of `center`.

```js
const pTextAlign = new __helpers.CSSHelp(document).getStyle('p')?.getPropertyValue('text-align');
assert(pTextAlign === 'center');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
--fcc-editable-region--
    <style>
      h1 {
        text-align: center;
      }
    </style>
--fcc-editable-region--
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
<html>
```

