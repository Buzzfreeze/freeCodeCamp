---
id: 612e8279827a28352ce83a72
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

ตอนนี้ จงคัดลอกเช็ตของ `.key` elements ทั้ง 7 และเพิ่มอีก 2 เช็ตใน `.keys` div

# --hints--

คุณควรมี 21 `.key` elements.

```js
const keys = document.querySelectorAll('.key');
assert(keys?.length === 21);
```

You should have 15 `.black--key` elements.

```js
const blackKeys = document.querySelectorAll('.black--key');
assert(blackKeys?.length === 15);
```

All `.key` elements should be within your `.keys` element.

```js
const keys = document.querySelector('.keys');
assert(keys?.querySelectorAll('.key')?.length === 21);
```

All `.black--key` elements should be within your `.keys` element.

```js
const keys = document.querySelector('.keys');
assert(keys?.querySelectorAll('.black--key')?.length === 15);
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
      <div class="keys">
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
      </div>
    </div>
    --fcc-editable-region--
  </body>
</html>
```

```css

```
