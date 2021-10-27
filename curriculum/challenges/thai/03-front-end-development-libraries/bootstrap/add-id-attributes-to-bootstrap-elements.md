---
id: bad87fee1348bd9aec908853
title: Add id Attributes to Bootstrap Elements
challengeType: 0
forumTopicId: 16639
dashedName: add-id-attributes-to-bootstrap-elements
---

# --description--

นอกจากการกำหนด class attributes แล้ว เรายังสามารถกำหนด `id` attribute ในแต่ละ element ได้ด้วย

แต่ละชื่อ id จะต้องเป็น id เฉพาะของ element นั้นๆ เลย และใช้กำหนดชื่อ id นั้นได้เพียงครั้งเดียวบนเพจนั้นๆ

มาลองกำหนด id เฉพาะ ให้กับแต่ละ `div` ที่มี class ชื่อว่า `well` กัน

ดูตัวอย่างการกำหนด id ให้ element ด้านล่างนี้:

```html
<div class="well" id="center-well">
```

ลองกำหนด class well ทางซ้ายให้มี id ชื่อว่า `left-well` และ กำหนด class well ทางขวาให้มี id ชื่อว่า `right-well`


# --hints--

`well` ทางซ้ายมือ จะต้องมี id ชื่อว่า `left-well`

```js
assert(
  $('.col-xs-6').children('#left-well') &&
    $('.col-xs-6').children('#left-well').length > 0
);
```

`well` ทางขวามือ จะต้องมี id ชื่อว่า `right-well`

```js
assert(
  $('.col-xs-6').children('#right-well') &&
    $('.col-xs-6').children('#right-well').length > 0
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
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
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```
