---
id: 60b69a66b6ddb80858c51586
title: Part 16
challengeType: 0
dashedName: part-16
---

# --description--

จงสร้างกฎสำหรับ `offwhite-character` element โดยใช้ `id` selector
จงกำหนดให้มันมี `width` เท่ากับ `300px`, `height` เท่ากับ `550px`, และ `background-color` เท่ากับ `GhostWhite`

# --hints--

คุณควรใช้ `#offwhite-character` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('#offwhite-character'));
```

Your `#offwhite-character` should have a `width` property set to `300px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#offwhite-character')?.width === '300px');
```

Your `#offwhite-character` should have a `height` property set to `550px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#offwhite-character')?.height === '550px');
```

Your `#offwhite-character` should have a `background-color` property set to `GhostWhite`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#offwhite-character')?.backgroundColor === 'ghostwhite');
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

--fcc-editable-region--

--fcc-editable-region--

```
