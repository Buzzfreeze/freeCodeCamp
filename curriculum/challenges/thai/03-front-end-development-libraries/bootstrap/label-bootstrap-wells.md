---
id: bad87fee1348bd9aec908854
title: Label Bootstrap Wells
challengeType: 0
forumTopicId: 18223
dashedName: label-bootstrap-wells
---

# --description--

เรามาใส่ไอดีให้แต่ละ well เพื่อให้รู้ชัดว่า well ไหนเป็น well ไหนดีกว่า

โดยให้เพิ่ม `h4` element ข้างบน left-well ใส่ข้อความว่า `#left-well` ไว้ใน `div` element ที่มี class `col-xs-6` ที่ครอบ `div` ที่มีไอดี `left-well` อยู่

และเพิ่ม `h4` element ข้างบน right-well ใส่ข้อความว่า `#right-well` ไว้ใน `div` element ที่มี class `col-xs-6` ที่ครอบ `div` ที่มีไอดี `right-well` อยู่

# --hints--

เพิ่ม `h4` element ไว้ใน `<div class="col-xs-6">` ทั้งสองอัน

```js
assert(
  $('.col-xs-6').children('h4') && $('.col-xs-6').children('h4').length > 1
);
```

ใส่ข้อความ `#left-well` ให้กับหนึ่งใน `h4` element ที่เพิ่มมา

```js
assert(new RegExp('#left-well', 'gi').test($('h4').text()));
```

และข้อความ `#right-well` ให้กับ `h4` element ที่เหลือ

```js
assert(new RegExp('#right-well', 'gi').test($('h4').text()));
```

อย่าลืม tag ปิด สำหรับแต่ละ `h4` element

```js
assert(
  code.match(/<\/h4>/g) &&
    code.match(/<h4/g) &&
    code.match(/<\/h4>/g).length === code.match(/<h4/g).length
);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```
