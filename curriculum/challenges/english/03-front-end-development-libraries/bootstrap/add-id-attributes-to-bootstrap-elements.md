---
id: bad87fee1348bd9aec908853
title: Add id Attributes to Bootstrap Elements
challengeType: 0
forumTopicId: 16639
dashedName: add-id-attributes-to-bootstrap-elements
---

# --description--

นอกจากการกำหนด attribute class แล้ว เรายังสามารถกำหนด attribute `id` ให้กับ element ได้ด้วย

id ของ element แต่ละตัวจะต้องไม่ซ้ำกันในเว็บหน้าเดียวกัน

มาลองกำหนด id ให้กับ `div` แต่ละตัวที่มี class เป็น `well` กัน

ดูตัวอย่างการกำหนด id ให้ element ด้านล่างนี้:

```html
<div class="well" id="center-well">
```

ลองกำหนด class `well` ทางซ้ายให้มี id เป็น `left-well` และ กำหนด class `well` ทางขวาให้มี id เป็น `right-well`


# --hints--

`well` ทางซ้ายมือ จะต้องมี id เป็น `left-well`

```js
assert(
  $('.col-xs-6').children('#left-well') &&
    $('.col-xs-6').children('#left-well').length > 0
);
```

`well` ทางขวามือ จะต้องมี id เป็น `right-well`

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
