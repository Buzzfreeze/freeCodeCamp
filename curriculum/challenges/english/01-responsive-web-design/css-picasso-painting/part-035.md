---
id: 60b69a66b6ddb80858c51599
title: Part 35
challengeType: 0
dashedName: part-35
---

# --description--

ภายใน `black-character` element อันใหม่, จงเพิ่ม 3 `div` elements ทีมีค่า `id` ตามลำดับดังนี้: `black-hat`, `gray-mask`, `white-paper`

# --hints--

คุณควรมี 3 `div` elements อยู่ใน `#black-character` element.

```js
assert(document.querySelectorAll('#black-character > div')?.length === 3);
```

Your first new `div` element should have the `id` set to `black-hat`.

```js
assert(document.querySelectorAll('#black-character > div')?.[0]?.getAttribute('id') === 'black-hat');
```

Your second new `div` element should have the `id` set to `gray-mask`.

```js
assert(document.querySelectorAll('#black-character > div')?.[1]?.getAttribute('id') === 'gray-mask');
```

Your third new `div` element should have the `id` set to `white-paper`.

```js
assert(document.querySelectorAll('#black-character > div')?.[2]?.getAttribute('id') === 'white-paper');
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
          <div id="black-character">
            --fcc-editable-region--

            --fcc-editable-region--
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
  position: absolute;
  top: -140px;
  left: 0;
}

#black-mask {
  width: 100%;
  height: 50px;
  background-color: rgb(45, 31, 19);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

#gray-instrument {
  width: 15%;
  height: 40%;
  background-color: rgb(167, 162, 117);
  position: absolute;
  top: 50px;
  left: 125px;
  z-index: 1;
}

.black-dot {
  width: 10px;
  height: 10px;
  background-color: rgb(45, 31, 19);
  display: block;
  margin: auto;
  margin-top: 65%;
}

#tan-table {
  width: 450px;
  height: 140px;
  background-color: #D2691E;
  position: absolute;
  top: 275px;
  left: 15px;
  z-index: 1;
}
```
