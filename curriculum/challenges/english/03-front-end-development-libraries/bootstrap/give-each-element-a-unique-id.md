---
id: bad87fee1348bd9aec908855
title: Give Each Element a Unique id
challengeType: 0
forumTopicId: 18191
dashedName: give-each-element-a-unique-id
---

# --description--

เราสามารถที่จะใช้ jQuery ในการระบุเป้าหมายในแต่ละปุ่ม (button) โดยการระบุไอดีเฉพาะให้มัน

เรามาลองใส่ไอดีเฉพาะให้กับปุ่มต่างๆ โดยเริ่มจาก id ชื่อว่า `target1` ไปจนถึง `target6`

ให้ใส่ไอดี `target1` ถึง `target3` ในปุ่มที่อยู่ใน `div` ที่มีไอดี `#left-well` และใส่ไอดี `target4` ถึง `target6` ในปุ่มที่อยู่ใน `div` ที่มีไอดี `#right-well`

# --hints--

เพิ่มไอดี `target1` ให้แก่ปุ่ม `button` element

```js
assert(
  $('#left-well').children('#target1') &&
    $('#left-well').children('#target1').length > 0
);
```

เพิ่มไอดี `target2` ให้แก่ปุ่ม `button` element

```js
assert(
  $('#left-well').children('#target2') &&
    $('#left-well').children('#target2').length > 0
);
```

เพิ่มไอดี `target3` ให้แก่ปุ่ม `button` element

```js
assert(
  $('#left-well').children('#target3') &&
    $('#left-well').children('#target3').length > 0
);
```

เพิ่มไอดี `target4` ให้แก่ปุ่ม `button` element

```js
assert(
  $('#right-well').children('#target4') &&
    $('#right-well').children('#target4').length > 0
);
```

เพิ่มไอดี `target5` ให้แก่ปุ่ม `button` element

```js
assert(
  $('#right-well').children('#target5') &&
    $('#right-well').children('#target5').length > 0
);
```

เพิ่มไอดี `target6` ให้แก่ปุ่ม `button` element

```js
assert(
  $('#right-well').children('#target6') &&
    $('#right-well').children('#target6').length > 0
);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
      </div>
    </div>
  </div>
</div>
```
