---
id: 60b69a66b6ddb80858c5158a
title: Part 20
challengeType: 0
dashedName: part-20
---

# --description--

ตอนนี้คุณมีกล่องใหญ่ ๆ ใบหนึ่ง
จงกำหนดให้มันมี`border-top-color`, `border-right-color`, และ `border-left-color` ที่เป็นแบบ `transparent`
จงกำหนดให้ `border-bottom-color` มีค่าเป็น `GhostWhite`
นี่จะทำให้มันดูเป็นเหมือนกับหมวกมากขึ้น

# --hints--

`#white-hat` selector ควรมี `border-top-color` property ที่เป็นแบบ `transparent`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#white-hat')?.borderTopColor === 'transparent');
```

Your `#white-hat` selector should have a `border-right-color` property set to `transparent`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#white-hat')?.borderRightColor === 'transparent');
```

Your `#white-hat` selector should have a `border-left-color` property set to `transparent`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#white-hat')?.borderLeftColor === 'transparent');
```

Your `#white-hat` selector should have a `border-bottom-color` property set to `GhostWhite`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#white-hat')?.borderBottomColor === 'ghostwhite');
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
  --fcc-editable-region--

  --fcc-editable-region--
}
```
