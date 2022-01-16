---
id: bad87fee1348bd9aec908850
title: Apply the Default Bootstrap Button Style
challengeType: 0
forumTopicId: 16657
dashedName: apply-the-default-bootstrap-button-style
---

# --description--

Bootstrap ยังมี class ของปุ่มอีกอันที่ชื่อว่า `btn-default`

ให้ใส่ class ของ `button` ทุกตัวเป็น `btn` และ `btn-default` 

# --hints--

ทุก `button` ต้องมี class `btn`

```js
assert($('.btn').length > 5);
```

ทุก `button` ต้องมี class `btn-default` ด้วย

```js
assert($('.btn-default').length > 5);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
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
