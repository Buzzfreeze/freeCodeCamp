---
id: 5f3477ae34c1239cafe128be
title: Part 14
challengeType: 0
dashedName: part-14
---

# --description--

ตอนนี้คุณมี 3 type selector ที่มี styling ที่เหมือนกันเป๊ะๆ
คุณสามารถเพิ่มกลุ่มของ style แบบเดียวกันให้กับหลาย ๆ  ได้โดยการแยก selector ด้วย comma แบบนี้:

```css
selector1, selector2 {
  property: value;
}
```

จงใช้ single type selector เพื่อจัดให้  `h1`, `h2` และ `p` element อยู่ตรงกลางในเวลาเดียวกัน

# --hints--

คุรควรใช้ single type selector สำหรับทั้ง 3f element, `h1, h2, p`
จงเช็คให้มั่นใจว่าคุณได้ใช้ลำดับตามนั้น

```js
const hasSelector = new __helpers.CSSHelp(document).getStyle('h1, h2, p');
assert(hasSelector);
```

You should only have one selector in your `style` element.

```js
const selectors = new __helpers.CSSHelp(document).getCSSRules().filter(x => x.selectorText)
assert(selectors.length === 1);
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
      h2 {
        text-align: center;
      }
      p {
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

