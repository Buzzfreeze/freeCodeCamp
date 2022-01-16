---
id: bad87fee1348bd9aec908852
title: Create a Class to Target with jQuery Selectors
challengeType: 0
forumTopicId: 16815
dashedName: create-a-class-to-target-with-jquery-selectors
---

# --description--

หลายๆครั้งเราก็ไม่ได้ใส่ class ให้ element เพื่อที่จะใช้ CSS เสมอไป
บางทีเราก็ใส่ class เพื่อให้เราใช้ jQuery เลือก element ได้ง่ายขึ้น

เรามาลองเพิ่ม class `target` ใน `button` ทุกปุ่มกัน

# --hints--

ให้เพิ่ม class `target` ใน `button` ทุกปุ่ม

```js
assert($('.target').length > 5);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
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
      <div class="well">
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
```
