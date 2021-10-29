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

ตอนนี้คุณได้รู้แล้วว่าการกำหนด element เป้าหมายมี 3 วิธี คือ โดย type: `$("button")`, โดย class: `$(".btn")`, และโดย id `$("#target1")`


แม้เราจะสามารถเพิ่มหลายๆ class ในการใช้ `.addClass()` ในครั้งเดียว แต่เรามาลองเพิ่ม class ต่างๆ ให้กับ element เดียวกัน โดย *สามวิธีแยกกัน*

3 วิธีที่แยกกันในการใช้ `.addClass()` เพื่อเพิ่ม 1 class ที่ละ class ไปยัง element เดียวกัน 

เพิ่ม `animated` class ให้กับ element ทุกตัวที่มี type `button`

เพิ่ม `shake` class ให้กับปุ่มทุกปุ่มที่มี class `.btn`

เพิ่ม `btn-primary` class ให้กับปุ่มที่มี id `#target1`

**Note:** คุณควรตั้งเป้ากับ element เดียวและเพิ่ม class เดียวในแต่ละครั้ง การใช้ selector ทั้งสามพร้อมกันนี้จะทำให้ class `shake`, `animated`, และ `btn-primary` ทั้ง 3 ถูกเพิ่มไปยัง `#target1`

# --hints--

โค้ดของคุณจะต้องใช้ `$("button")` selector

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
```

โค้ดของคุณจะต้องใช้ `$(".btn")` selector

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
```

โค้ดของคุณจะต้องใช้ `$("#target1")` selector.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
```

คุณจะต้องเพิ่มเพียง class เดียวต่อ selector แต่ละตัว

```js
assert(
  code.match(/addClass/g) &&
    code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2
);
```

`#target1` element จะต้องมี class `animated`‚ `shake` และ `btn-primary`

```js
assert(
  $('#target1').hasClass('animated') &&
    $('#target1').hasClass('shake') &&
    $('#target1').hasClass('btn-primary')
);
```

คุณจะต้องใช้ jQuery เท่านั้นในการเพิ่ม class ให้แก่ element


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
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
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
