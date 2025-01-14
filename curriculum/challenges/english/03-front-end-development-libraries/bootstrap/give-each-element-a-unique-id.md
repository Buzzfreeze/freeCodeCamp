---
id: bad87fee1348bd9aec908855
title: Give Each Element a Unique id
challengeType: 0
forumTopicId: 18191
dashedName: give-each-element-a-unique-id
---

# --description--

เราใช้ jQuery เลือก element โดยใช้ id ได้ด้วย

เรามาลองใส่ id ให้กับปุ่มของเรากัน โดยให้ไล่จาก id `target1` ไปจนถึง id `target6`

ให้ใส่ id `target1` `target2` `target3` ในปุ่มที่อยู่ใน `div` ที่มี id เป็น `#left-well`  
และใส่ id `target4` `target5` `target6` ในปุ่มที่อยู่ใน `div` ที่มี id เป็น `#right-well`

# --hints--

ต้องมี `button` หนึ่งปุ่มที่มี id เป็น `target1`

```js
assert(
  $('#left-well').children('#target1') &&
    $('#left-well').children('#target1').length > 0
);
```

ต้องมี `button` หนึ่งปุ่มที่มี id เป็น `target2`

```js
assert(
  $('#left-well').children('#target2') &&
    $('#left-well').children('#target2').length > 0
);
```

ต้องมี `button` หนึ่งปุ่มที่มี id เป็น `target3`

```js
assert(
  $('#left-well').children('#target3') &&
    $('#left-well').children('#target3').length > 0
);
```

ต้องมี `button` หนึ่งปุ่มที่มี id เป็น `target4`

```js
assert(
  $('#right-well').children('#target4') &&
    $('#right-well').children('#target4').length > 0
);
```

ต้องมี `button` หนึ่งปุ่มที่มี id เป็น `target5`

```js
assert(
  $('#right-well').children('#target5') &&
    $('#right-well').children('#target5').length > 0
);
```

ต้องมี `button` หนึ่งปุ่มที่มี id เป็น `target6`

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
