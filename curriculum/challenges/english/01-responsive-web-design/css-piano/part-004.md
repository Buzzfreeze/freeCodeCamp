---
id: 612e7d1c29fb872d6384379c
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

จงเก็บ `div` อันที่สองไว้ใน `div` ที่คุณสร้างไปแล้ว
และกำหนดให้ `class` ของมันเป็น `keys`

# --hints--

คุณควรสร้าง `div` element อันที่สอง

```js
const divDiv = document.querySelectorAll('div');
assert(divDiv?.length === 2);
```

Your new `div` element should be within your existing `div` element.

```js
const div = document.querySelector('div');
assert(div?.children?.length === 1);
assert(div?.children?.[0]?.localName === 'div');
```

Your new `div` element should have the `class` set to `keys`.

```js
const div = document.querySelector('div');
assert(div?.children?.[0]?.className === 'keys');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Responsive Web Design Piano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="piano">
  --fcc-editable-region--

  --fcc-editable-region--
    </div>
  </body>
</html>
```

```css

```
