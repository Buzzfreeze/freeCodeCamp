---
id: 5f344f9c805cd193c33d829c
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

คุณสามารถเพิ่ม style ให้กับ elementโดยการระบุมันไว้ใน `style` element แและกำหนด property ให้มันแบบนี้:

```css
element {
 property: value;
}
```

จงจัดให้`h1` element ของคุณอยู่ตรงกลางโดยการกำหนดให้ `text-align` property มีค่าเป็น `center`

# --hints--

คุณควรมี `h1` selector อันหนึ่งใน `style` element.

```js
const hasSelector = new __helpers.CSSHelp(document).getStyle('h1');
assert(hasSelector);
```

Your `text-align` property should set a value of `center`.

```js
const hasTextAlign = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style['text-align'] === 'center');
assert(hasTextAlign);
```

Your `h1` selector should set the `text-align` property to `center`.

```js
const h1TextAlign = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('text-align');
assert(h1TextAlign === 'center');
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

