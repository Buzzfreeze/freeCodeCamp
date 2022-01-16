---
id: bad87fee1348bd9aeda08826
title: Target Elements by id Using jQuery
challengeType: 6
forumTopicId: 18317
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-elements-by-id-using-jquery
---

# --description--

คุณสามารถเลือก element โดยใช้ id ได้ด้วย

คราวนี้เราจะเลือก `button` ที่มี id เป็น `target3` โดยใช้ selector นี้ `$("#target3")`

ในการเลือก element ตาม id เราจะใช้ `#` นำหน้าชื่อ id นั้น เหมือนกับตอนเขียน CSS เลย

หลังจากนั้นให้ใช้ฟังก์ชัน `.addClass()` ของ jQuery เพื่อเพิ่ม class `animated` และ `fadeOut`

โค้ดข่างล่างเป็นตัวอย่างการทำให้ `button` ที่มี id เป็น `target6` ค่อยๆจางหายไป

```js
$("#target6").addClass("animated fadeOut");
```

# --hints--

คุณจะต้องเลือก `button` ที่มี `id` เป็น `target3` และใช้ฟังก์ชัน jQuery `addClass()` เพื่อที่จะเพิ่ม class `animated` เข้าไป

```js
assert($('#target3').hasClass('animated'));
```

ต้องเลือก element ที่มี id เป็น `target3` และใช้ฟังก์ชัน jQuery `addClass()` เพื่อที่จะเพิ่ม class `fadeOut` เข้าไป

```js
assert(
  ($('#target3').hasClass('fadeOut') || $('#target3').hasClass('fadeout')) &&
    code.match(/\$\(\s*.#target3.\s*\)/g)
);
```

คุณจะต้องใช้แค่ jQuery เท่านั้นในการเพิ่ม class ให้แก่ element

```js
assert(!code.match(/class.*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");

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
