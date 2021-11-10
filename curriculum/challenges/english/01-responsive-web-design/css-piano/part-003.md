---
id: 612e78af05201622d4bab8aa
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

ถึเวลาที่จะเริ่มสร้างเปียโนแล้ว
จงสร้าง 1 `div` element ภายใน `body` element ที่มี `id` เป็น `piano`

# --hints--

คุณควรสร้าง `div` element อันหนึ่งใหม่

```js
const div = document.querySelector('div');
assert.exists(div);
```

Your `div` should be within your `body` element.

```js
const div = document.querySelector('div');
assert(div?.parentElement?.localName === 'body');
```

Your `div` should have the `id` set to `piano`.

```js
const div = document.querySelector('div');
assert(div?.getAttribute('id') === 'piano');
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

  --fcc-editable-region--
  </body>
</html>
```

```css

```
