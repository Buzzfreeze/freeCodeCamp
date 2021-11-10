---
id: 612e813b3ba67633222cbe54
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

จงจำไว้ว่า `class` attribute สามารถมีหลายค่าได้
เพื่อที่จะแยกระหว่างคีย์สีขาวและสีดำ คุณควรเพิ่มค่า `class` อันที่ 2 ให้เป็น `black--key`
จงเพิ่มค่านี้ให้กับ `.key` elements ตัวที่ 2, 3, 5, 6, และ 7

# --hints--

`.key` element ตัวที่ 2 ควรมีอีกคลาสชื่อ `black--key`

```js
const key = document.querySelectorAll('.key')?.[1];
assert(key?.className?.includes('black--key'));
```

Your third `.key` should have `black--key` in the `class`.

```js
const third = document.querySelectorAll('.key')?.[2];
assert(third?.classList?.contains('black--key'));
```

Your fifth `.key` should have `black--key` in the `class`.

```js
const fifth = document.querySelectorAll('.key')?.[4];
assert(fifth?.classList?.contains('black--key'));
```

Your sixth `.key` should have `black--key` in the `class`.

```js
const sixth = document.querySelectorAll('.key')?.[5];
assert(sixth?.classList?.contains('black--key'));
```

Your seventh `.key` should have `black--key` in the `class`.

```js
const seventh = document.querySelectorAll('.key')?.[6];
assert(seventh?.classList?.contains('black--key'));
```

You should have five `.black--key` elements.

```js
const blackKeys = document.querySelectorAll('.black--key');
assert(blackKeys?.length === 5);
```

You should have seven `.key` elements.

```js
const keys = document.querySelectorAll('.key');
assert(keys?.length === 7);
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
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
        <div class="key"></div>
      </div>
    </div>
    --fcc-editable-region--
  </body>
</html>
```

```css

```
