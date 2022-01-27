---
id: bad87fee1348bd9aed908626
title: Target the Same Element with Multiple jQuery Selectors
challengeType: 6
forumTopicId: 18322
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-the-same-element-with-multiple-jquery-selectors
---

# --description--

ตอนนี้เรารู้แล้วว่าการเลือก element มี 3 วิธีคือ: 

1. ใช้ type: `$("button")` 
2. ใช้ class: `$(".btn")` และ
3. ใช้ id: `$("#target1")`


ถึงเราจะเรียกใช้ `.addClass()` ครั้งเดียวเพื่อเพิ่มหลายๆ class เข้าไปใน element ที่เลือกได้  
แต่เรามาลองเพิ่ม class ให้กับ element เดียวกันโดยใช้ทั้งสามวิธีดู:

เพิ่ม class `animated` ให้กับ element ทุกตัวที่มี type เป็น `button`

เพิ่ม class `shake` ให้กับปุ่มทุกปุ่มที่มี class เป็น `.btn`

เพิ่ม class `btn-primary` ให้กับปุ่มที่มี id เป็น `#target1`

**Note:** ต้องเลือกทีละ element แล้วก็เพิ่ม class ทีละ class 
พอรวมกันแล้ว selector ทั้งสามอันนี้จะทำให้ `#target1` ของเรามี class เป็น `shake`, `animated`, และ `btn-primary`

# --hints--

โค้ดของคุณจะต้องใช้ `$("button")` selector

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
```

โค้ดของคุณจะต้องใช้ `$(".btn")` selector

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
```

โค้ดของคุณจะต้องใช้ `$("#target1")` selector

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
```

selector แต่ละตัวจะเพิ่ม class แค่ class เดียว

```js
assert(
  code.match(/addClass/g) &&
    code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2
);
```

เมื่อเพิ่มแล้ว `#target1` จะต้องมี class เป็น `animated`‚ `shake` และ `btn-primary`

```js
assert(
  $('#target1').hasClass('animated') &&
    $('#target1').hasClass('shake') &&
    $('#target1').hasClass('btn-primary')
);
```

คุณจะต้องใช้แค่ jQuery เท่านั้นในการเพิ่ม class ให้กับ element


```js
assert(!code.match(/class.*animated/g));
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
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
