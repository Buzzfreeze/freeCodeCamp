---
id: 60b69a66b6ddb80858c51583
title: Part 13
challengeType: 0
dashedName: part-13
---

# --description--

จงสร้าง 4 `div` elements ภายใน `offwhite-character` element
จงกำหนดให้ `div` elements มีค่า `id` ตามลำดับตังนี้: `white-hat`, `black-mask`, `gray-instrument`, `tan-table`.

# --hints--

คุณควรเพิ่ม 4 `div` elements ภายใน `.offwhite-character` element.

```js
assert(document.querySelectorAll('#offwhite-character div').length === 4);
```

Your first new `div` element should have the `id` of `white-hat`.

```js
assert(document.querySelectorAll('#offwhite-character div')[0]?.getAttribute('id') === 'white-hat');
```

Your second new `div` element should have the `id` of `black-mask`.

```js
assert(document.querySelectorAll('#offwhite-character div')[1]?.getAttribute('id') === 'black-mask');
```

Your third new `div` element should have the `id` of `gray-instrument`.

```js
assert(document.querySelectorAll('#offwhite-character div')[2]?.getAttribute('id') === 'gray-instrument');
```

Your fourth new `div` element should have the `id` of `tan-table`.

```js
assert(document.querySelectorAll('#offwhite-character div')[3]?.getAttribute('id') === 'tan-table');
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
```
