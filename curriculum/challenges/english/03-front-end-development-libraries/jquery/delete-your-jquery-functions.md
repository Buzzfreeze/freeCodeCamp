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

อนิเมชันที่เราด้ำมาแล้วนั้นเจ๋งดีอยู่ แต่คราวนี้มันเริ่มจะน่าเบื่อไปนิดนึง

มาลองลบฟังก์ชันทั้ง 3 ของ jQuery เหล่านี้ออกไปจาก `document ready function` กัน ยังคงตัว `document ready function` ไว้เหมือนเดิม

# --hints--

ฟังก์ชันทั้ง 3 ของ jQuery ต้องถูกลบออกจาก `document ready function`

```js
assert(code.match(/\{\s*\}\);/g));
```

ให้ `script` element ยังอยู่เหมือนเดิม

```js
assert(code.match(/<script>/g));
```

ปล่อยให้ `$(document).ready(function() {` ในส่วนหน้าของ `script` element ยังอยู่เช่นเดิม

```js
assert(code.match(/\$\(document\)\.ready\(function\(\)\s?\{/g));
```

ปล่อยให้ `})` ปีกกาปิดของ `document.ready` ยังอยู่เหมือนเดิม

```js
assert(code.match(/.*\s*\}\);/g));
```

และให้ tag ปิดของ `script` element อยู่เหมือนเดิม


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

<!-- Only change code above this line -->

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

<!-- Only change code above this line -->

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
