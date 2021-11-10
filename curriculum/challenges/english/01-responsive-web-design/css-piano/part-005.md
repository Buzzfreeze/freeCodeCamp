---
id: 612e804c54d5e7308d7ebe56
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

จงเพิ่ม7 `div` element ภายใน `.keys` element
จงกำหนดให้พวกมันทั้งหมดมีคลาสที่ชื่อ `key`

# --hints--

คุณควรสร้าง `div` elements อันใหม่ 7 อัน

```js
const divDivDiv = document.querySelectorAll('div');
assert(divDivDiv?.length === 9);
```

Your seven new `div` elements should be within your `.keys` element.

```js
const keys = document.querySelector('.keys');
assert([...keys?.children].length === 7);
assert([...keys?.children].every(child => child?.tagName === 'DIV'));
```

Your seven new `div` elements should all have the `class` set to `key`.

```js
const keys = document.querySelector('.keys');
assert([...keys?.children].every(child => child?.classList?.contains('key')));
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
    --fcc-editable-region--
    <div id="piano">
      <div class="keys"></div>
    </div>
    --fcc-editable-region--
  </body>
</html>
```

```css

```
