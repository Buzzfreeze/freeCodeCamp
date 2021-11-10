---
id: 5f356ed60a5decd94ab66986
title: Part 23
challengeType: 0
removeComments: false
dashedName: part-23
---

# --description--

คอมเมนต์ใน CSS หน้าตาแบบนี้:

```css
/* comment here */
```

ใน style sheet, จงคอมเมนต์บรรทัดที่มีproperty และ value ของ `background-color` เพื่อคุณจะได้เห็นผลจาก `div` element เท่านั้น
นี่จะทำให้พื้นหลังกลับมามีสีขาวอีกครั้ง

# --hints--

คุณควรคอมเมนต์บรรทัด `background-color: burlywood;` ใน CSS.

```js
assert(code.match(/\/\*\s*background-color:\s*burlywood;?\s*\*\//i));
```


Your `body` should have a white background.

```js
const bodyCSS = $('body').css('background-color');
assert(bodyCSS === "rgba(0, 0, 0, 0)")
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
--fcc-editable-region--
  background-color: burlywood;
--fcc-editable-region--
}

h1, h2, p {
  text-align: center;
}

div {
  width: 300px;
}
```

