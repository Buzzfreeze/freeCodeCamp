---
id: 5f356ed60785e1f3e9850b6e
title: Part 25
challengeType: 0
dashedName: part-25
---

# --description--

ตอนนี้ มันง่ายที่เห็นว่าข้อความได้ถูกจัดให้อยู่ตรงกลางภายใน `div` element แล้ว
ณ ตอนนี้ ความกว้างของ `div` element ได้ถูกระบุเป็น (`px`)
จงเปลี่ยนให้ค่าของ `width` property กลายเป็น `80%` เพื่อที่มันจะได้มีขนาด 80% ของความกล้างของ parent element (`body`) ของมัน

# --hints--

คุณควรกำหนดให้ `width` property เท่ากับ `80%`.

```js
const hasWidth = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style.width === '80%');
assert(hasWidth);
```

You should not have a `width` property of `300px`.

```js
const hasWidth = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style.width === '300px');
assert(!hasWidth);
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
  width: 300px;
  background-color: burlywood;
}
--fcc-editable-region--
```

