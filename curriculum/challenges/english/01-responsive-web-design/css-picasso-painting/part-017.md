---
id: 60b69a66b6ddb80858c51587
title: Part 17
challengeType: 0
dashedName: part-17
---

# --description--

จงย้าย `offwhite-character` ไปตำแหน่งที่กำหนดให้มันมี `position` เป็น `absolute`, `top` เท่ากับ `20%`, `left` เท่ากับ `17.5%`

# --hints--

`#offwhite-character` selector ควรมี 1 `position` property ที่เป็น `absolute`

```js
assert(new __helpers.CSSHelp(document).getStyle('#offwhite-character')?.position === 'absolute');
```

Your `#offwhite-character` selector should have a `top` property set to `20%`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#offwhite-character')?.top === '20%');
```

Your `#offwhite-character` selector should have a `left` property set to `17.5%`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#offwhite-character')?.left === '17.5%');
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
              <div class="black-dot"></div>
              <div class="black-dot"></div>
              <div class="black-dot"></div>
              <div class="black-dot"></div>
              <div class="black-dot"></div>
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

#offwhite-character {
  width: 300px;
  height: 550px;
  background-color: GhostWhite;
  --fcc-editable-region--

  --fcc-editable-region--
}
```
