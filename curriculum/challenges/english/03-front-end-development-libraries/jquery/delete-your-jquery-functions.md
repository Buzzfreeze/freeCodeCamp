---
id: bad87fee1348bd9aeda08726
title: Delete Your jQuery Functions
challengeType: 6
forumTopicId: 17561
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: delete-your-jquery-functions
---

# --description--

อนิเมชันที่เราได้ทำมาก็เท่ดีนะ แต่ตอนนี้มันเริ่มรกแล้ว

คราวนี้ให้ลบฟังก์ชันของ jQuery ทั้งสามตัว เหล่านี้ออกไปจากฟังก์ชัน `document ready` กัน แต่ยังต้องมีฟังก์ชัน `document ready` อยู่เหมือนเดิมนะ

# --hints--

ต้องลบฟังก์ชันทั้ง 3 ตัวของ jQuery ออกจากฟังก์ชัน `document ready`

```js
assert(code.match(/\{\s*\}\);/g));
```

`<script>` ต้องยังอยู่เหมือนเดิม

```js
assert(code.match(/<script>/g));
```

ต้องยังมี `$(document).ready(function() {` ใน `script` อยู่เหมือนเดิม

```js
assert(code.match(/\$\(document\)\.ready\(function\(\)\s?\{/g));
```

ต้องยังมี `})` ที่ใช้ปิด `document.ready` อยู่เหมือนเดิม

```js
assert(code.match(/.*\s*\}\);/g));
```

และต้องยังมีแท็กปิดของ `script` อยู่เหมือนเดิม


```js
assert(
  code.match(/<\/script>/g) &&
    code.match(/<script/g) &&
    code.match(/<\/script>/g).length === code.match(/<script/g).length
);
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");

  });
</script>

<!-- แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น -->

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

# --solutions--

```html
<script>
  $(document).ready(function() {

  });
</script>

<!-- แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น -->

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
