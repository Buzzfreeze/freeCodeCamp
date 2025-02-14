---
id: bad87fee1348bd9aec908848
title: Create Bootstrap Wells
challengeType: 0
forumTopicId: 16825
dashedName: create-bootstrap-wells
---

# --description--

Bootstrap มี class ที่ชื่อว่า `well` ซึ่งจะทำให้เกิดกรอบที่ดูเหมือนคอลัมน์นั้นๆมีความลึกขึ้นมา

มาลองเพิ่ม `div` ที่มี class เป็น `well` ใน `div` ทุกตัวที่มี class เป็น `col-xs-6` ดู

# --hints--

ต้องเพิ่ม `div` ที่มี class เป็น `well` ใน `div` ทุกตัวที่มี class เป็น `col-xs-6`

```js
assert($('div.col-xs-6').not(':has(>div.well)').length < 1);
```

และ `div` ที่มี class เป็น `col-xs-6` ทั้งสองตัวนั้น จะต้องอยู่ภายใน `div` ที่มี class เป็น `row`

```js
assert($('div.row > div.col-xs-6').length > 1);
```

อย่าลืมแท็กปิดของ `div` ทุกตัวด้วย

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
