---
id: 60b69a66b6ddb80858c5158b
title: Part 21
challengeType: 0
dashedName: part-21
---

# --description--

จงกำหนดให้หมวกมี `position` เป็น `absolute`, `top` มีค่า `-140px`, `left` มีค่า `0`

# --hints--

`#white-hat` selector ควรมี `position` property อันหนึ่งที่เป็น `absolute`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#white-hat')?.position === 'absolute');
```

Your `#white-hat` selector should have a `top` property set to `-140px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#white-hat')?.top === '-140px');
```

Your `#white-hat` selector should have a `left` property set to `0`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#white-hat')?.left === '0px');
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
  position: absolute;
  top: 20%;
  left: 17.5%;
}

#white-hat {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 120px 140px 180px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: GhostWhite;
  border-left-color: transparent;
  --fcc-editable-region--

  --fcc-editable-region--
}
```
