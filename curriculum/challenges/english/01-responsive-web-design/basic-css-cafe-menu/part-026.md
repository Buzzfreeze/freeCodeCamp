---
id: 5f356ed656a336993abd9f7c
title: Part 26
challengeType: 0
dashedName: part-26
---

# --description--

ถัดไป คุรต้องการที่จะจัดให้ `div` อยู่ตรงกลางในแนวนอน
คุณสามารถทำมันได้โดยการกำหนดให้ `margin-left` และ `margin-right` properties มีค่าเป็น `auto`
การใช้ margin property 2 อันนี้จะทำให้ `div` element ข้างใน `body` element อยู่ตรงกลาง

# --hints--

คุรควรกำหนดให้`margin-left` property เท่ากับ `auto`.

```js
const hasMargin = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style['margin-left'] === 'auto');
assert(hasMargin);
```

You should set the `margin-right` property to `auto`.

```js
const hasMargin = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style['margin-right'] === 'auto');
assert(hasMargin);
```

You should set the `margin-left` and `margin-right` properties of your `div` to `auto`.

```js
const divMarginRight = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('margin-right');
const divMarginLeft = new __helpers.CSSHelp(document).getStyle('div')?.getPropertyValue('margin-left');
assert(divMarginRight === 'auto');
assert(divMarginLeft === 'auto');
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
}
--fcc-editable-region--
```
