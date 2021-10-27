---
id: bad87fee1348bd9aec908848
title: Create Bootstrap Wells
challengeType: 0
forumTopicId: 16825
dashedName: create-bootstrap-wells
---

# --description--

Bootstrap มี class ที่เรียกว่า `well` ซึ่งจะทำให้เกิดกรอบที่ดูเหมือนคอลัมน์นั้นๆ มีความลึกขึ้นมา

มาลองเพิ่ม `div` element ที่มี class `well` ภายในทุกๆ `div` element ที่มี class `col-xs-6` ดู

# --hints--

ต้องเพิ่ม `div` element ที่มี class `well` ไปใน ทุก `div` ที่มี class `col-xs-6`

```js
assert($('div.col-xs-6').not(':has(>div.well)').length < 1);
```

และ `div` element ที่มี class `col-xs-6` ทั้งสองอันนั้น ควรจะต้องอยู่ภายใน `div` ที่มี class ว่า `row`

```js
assert($('div.row > div.col-xs-6').length > 1);
```

อย่าลืม tag ปิด ของทุก `div` element

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

    </div>
    <div class="col-xs-6">

    </div>
  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```
