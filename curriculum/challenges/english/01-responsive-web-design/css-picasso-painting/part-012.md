---
id: 60b69a66b6ddb80858c51582
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

ภายใน `characters` element, จงสร้าง `div` อีกอันที่มี `id` ชื่อ `offwhite-character`

# --hints--

คุณควรเพิ่มเพียงอีก 1 `div` element.

```js
assert(document.querySelectorAll('div').length === 3);
```

Your new `div` element should be nested in your `.characters` element.

```js
assert(document.querySelector('.characters div'));
```

Your new `div` element should have an `id` of `offwhite-character`.

```js
assert(document.querySelector('.characters div')?.getAttribute('id') === 'offwhite-character');
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
          --fcc-editable-region--

          --fcc-editable-region--
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
