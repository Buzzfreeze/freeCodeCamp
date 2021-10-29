---
id: bad87fee1348bd9aec908852
title: Create a Class to Target with jQuery Selectors
challengeType: 0
forumTopicId: 16815
dashedName: create-a-class-to-target-with-jquery-selectors
---

# --description--

การสร้าง class ของ element บางอย่างก็ไม่ได้เกี่ยวข้องกับ CSS เสมอไป ในบางกรณีเราสร้าง class เพื่อให้ง่ายต่อการเลือก element นั้นๆ ในการใช้ jQuery

เรามาลองเพิ่ม class `target` ในทุก `button` element กัน

# --hints--

ให้เพิ่ม class `target` ไปยัง `button` element ทุกอัน

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
