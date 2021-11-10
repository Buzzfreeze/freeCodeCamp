---
id: 5f356ed6199b0cdef1d2be8f
title: Part 27
challengeType: 0
dashedName: part-27
---

# --description--

Sจนถึงตอนนี้คุณได้ลองใช้ type selector เพื่อตกแต่ง element
<dfn>class selector</dfn> ถูกกำหนดโดยชื่อพร้อมกับจุดตรงหน้ามัน แบบนี้:

```css
.class-name {
  styles
}
```

จงเปลี่ยน `div` selector ที่มีอยู่ให้เป็น class selector โดยการแทนที่ `div` ด้วยชื่อคลาส `menu`

# --hints--

คุรควรมี `.menu` type selector.

```js
const hasMenu = new __helpers.CSSHelp(document).getStyle('.menu');
assert(hasMenu);
```

You should not have a `div` selector.

```js
const hasDiv = new __helpers.CSSHelp(document).getStyle('div');
assert(!hasDiv);
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
    <div>
      <header>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
      </header>
      <main>
        <section>
          <h2>Coffee</h2>
        </section>
      </main>
    </div>
  </body>
<html>
```

```css
body {
  /*
  background-color: burlywood;
  */
}

h1, h2, p {
  text-align: center;
}

--fcc-editable-region--
div {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}
--fcc-editable-region--
```

