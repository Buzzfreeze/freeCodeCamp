---
id: bad87fee1348bd9aec908856
title: Label Bootstrap Buttons
challengeType: 0
forumTopicId: 18222
dashedName: label-bootstrap-buttons
---

# --description--

เรามาระบุแสดงให้เห็นว่าปุ่มไหนมี id เป็นอะไรกันดีกว่า

ให้ใส่ข้อความในปุ่มแต่ละปุ่มให้เป็น id selector ของปุ่มนั้นๆ

# --hints--

ใส่ข้อความว่า `#target1` ให้กับ `button` ที่มี id เป็น `target1`

```js
assert(new RegExp('#target1', 'gi').test($('#target1').text()));
```

ใส่ข้อความว่า `#target2` ให้กับ `button` ที่มี id เป็น `target2`

```js
assert(new RegExp('#target2', 'gi').test($('#target2').text()));
```

ใส่ข้อความว่า `#target3` ให้กับ `button` ที่มี id เป็น `target3`

```js
assert(new RegExp('#target3', 'gi').test($('#target3').text()));
```

ใส่ข้อความว่า `#target4` ให้กับ `button` ที่มี id เป็น `target4`

```js
assert(new RegExp('#target4', 'gi').test($('#target4').text()));
```

ใส่ข้อความว่า `#target5` ให้กับ `button` ที่มี id เป็น `target5`

```js
assert(new RegExp('#target5', 'gi').test($('#target5').text()));
```

ใส่ข้อความว่า `#target6` ให้กับ `button` ที่มี id เป็น `target6`

```js
assert(new RegExp('#target6', 'gi').test($('#target6').text()));
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

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
