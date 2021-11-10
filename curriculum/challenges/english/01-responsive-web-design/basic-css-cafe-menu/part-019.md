---
id: 5f3477cb303c5cb61b43aa9b
title: Part 19
challengeType: 0
dashedName: part-19
---

# --description--

พวกตัวอักษรได้ถูกจัดให้อยู่ตรงกลางอีกครั้ง ซึ่งแปลว่าตอนนี้ลิงค์ที่พาไปยัง CSS file นั้นใช้งานได้
จงเพิ่ม style อีกอันให้กับไฟล์ที่จะเปลี่ยน `background-color` property ไปเป็น `brown` ให้กับ `body` element.

# --hints--

Yคุณควรใช้ `body` selector อันหนึ่ง

```js
const hasBody = new __helpers.CSSHelp(document).getStyle('body');
assert(hasBody);
```

You should set the `background-color` property to `brown`.

```js
const hasBackground = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style['background-color'] === 'brown');
assert(hasBackground);
```

Your `body` element should have a `brown` background.

```js
const bodyBackground = new __helpers.CSSHelp(document).getStyle('body')?.getPropertyValue('background-color');
assert(bodyBackground === 'brown');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Camper Cafe Menu</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
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

```css
--fcc-editable-region--
h1, h2, p {
  text-align: center;
}
--fcc-editable-region--

```

