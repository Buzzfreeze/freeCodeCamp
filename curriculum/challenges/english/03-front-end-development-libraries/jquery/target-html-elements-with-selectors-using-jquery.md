---
id: bad87fee1348bd9bedc08826
title: Target HTML Elements with Selectors Using jQuery
challengeType: 6
forumTopicId: 18319
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-html-elements-with-selectors-using-jquery
---

# --description--

ตอนนี้เรามีฟังก์ชัน `document ready` แล้ว

คราวนี้มาลองเขียนคำสั่ง jQuery กันเลย โดยฟังก์ชันของ jQuery ทุกฟังก์ชันจะขึ้นต้นด้วย `$` โดยปกติแล้วเราจะเรียกเครื่องหมายนี้ว่า เครื่องหมายดอลลาร์ หรือ bling

jQuery นั้นจะเลือก HTML element เป้าหมายด้วย <dfn>selector</dfn> ก่อนที่จะทำอะไรบางอย่างกับ element นั้น

มาลองทำ `button` ของเราให้เด้งได้กัน เพียงแค่เพิ่มโค้ดดังตัวอย่างข้างล่างไปในฟังก์ชัน document ready

```js
$("button").addClass("animated bounce");
```

หมายเหตุ เราได้ลง library ทั้ง jQuery และ Animate.css ไว้เรียบร้อยแล้ว คุณสามารถใช้ทั้งสองตัวนี้ใน editor ได้เลย  
โค้ดด้านบนจะเป็นการใช้ jQuery เพื่อเพิ่ม class ของ Animate.css ที่ชื่อ `bounce` ให้กับ `button`

# --hints--

คุณจะต้องใช้ฟังก์ชัน jQuery `addClass()` เพื่อเพิ่ม class `animated` และ `bounce` ให้กับ `button` element

```js
assert($('button').hasClass('animated') && $('button').hasClass('bounce'));
```

คุณจะต้องใช้แค่ jQuery เท่านั้นในการเพิ่ม class ให้กับ element

```js
assert(!code.match(/class.*animated/g));
```

คุณจะต้องเขียนโค้ด jQuery ไว้ในฟังก์ชัน `$(document).ready();`

```js
assert(
  code.replace(/\s/g, '').match(/\$\(document\)\.ready\(function\(\)\{\$/g)
);
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
    $("button").addClass("animated bounce");
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
