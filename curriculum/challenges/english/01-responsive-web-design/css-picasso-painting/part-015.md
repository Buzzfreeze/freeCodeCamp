---
id: 60b69a66b6ddb80858c51585
title: Part 15
challengeType: 0
dashedName: part-15
---

# --description--

จงสร้าง "dots" ให้กับเครื่องมือ
จงเพิ่ม 5 `div` elements ภายใน `gray-instrument` element
จงกำหนดให้ `class` ของแต่ละเป็น `black-dot`

# --hints--

คุณควรมี 5`div` elements ภายใน `#gray-instrument` element.

```js
assert(document.querySelectorAll('#gray-instrument div').length === 5);
```

Your five `div` elements should all have the class `black-dot`.

```js
assert(document.querySelectorAll('#gray-instrument .black-dot').length === 5);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>freeCodeCamp Picasso Painting</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  </head>
  <body>
    <div id="back-wall"></div>
        <div class="characters">
          <div id="offwhite-character">
            <div id="white-hat"></div>
            <div id="black-mask">
              <div class="eyes left"></div>
              <div class="eyes right"></div>
            </div>
            <div id="gray-instrument">
              --fcc-editable-region--

              --fcc-editable-region--
            </div>
            <div id="tan-table"></div>
          </div>
        </div>
  </body>
</html>
```

```css
body {
  background-color: rgb(184, 132, 46);
}

#back-wall {
  background-color: #8B4513;
  width: 100%;
  height: 60%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
```
