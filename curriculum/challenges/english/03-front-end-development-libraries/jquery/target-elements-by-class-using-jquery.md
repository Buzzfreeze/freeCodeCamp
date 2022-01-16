---
id: bad87fee1348bd9aedc08826
title: Target Elements by Class Using jQuery
challengeType: 6
forumTopicId: 18316
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-elements-by-class-using-jquery
---

# --description--

คุณได้รู้วิธีการทำให้ `button` ทุกปุ่มเด้งได้แล้ว เราใช้วิธีการเลือก element ด้วย `$("button")` แล้วจึงเพิ่ม CSS class ให้โดยใช้ `.addClass("animated bounce");`

`.addClass()` เป็นฟังก์ชันที่ทำให้คุณสามารถเพิ่ม class ให้กับ element ได้

คราวนี้มาลองเลือก `div` ที่มี class เป็น `well` กัน รอบนี้เราจะใช้ selector เป็น `$(".well")` เพื่อเลือก element

ในการเลือก element ตาม class เราจะใช้ `.` นำหน้าชื่อ class นั้น เหมือนกับตอนเขียน CSS เลย

จากนั้นให้ใช้ฟังก์ชัน `.addClass()` ของ jQuery เพื่อเพิ่ม class `animated` และ `shake`

เช่น ถ้าเราอยากให้ element ทุกตัวที่มี class เป็น `text-primary` สั่นได้ เราจะใช้โค้ดข้างล่างนี้ในฟังก์ชัน `document ready`:

```js
$(".text-primary").addClass("animated shake");
```

# --hints--

ต้องใช้ฟังก์ชัน `addClass()` ของ jQuery เพื่อเพิ่ม class `animated` และ `shake` ให้กับ element ทุกตัวที่มี class เป็น `well`

```js
assert($('.well').hasClass('animated') && $('.well').hasClass('shake'));
```

คุณจะต้องใช้แค่ jQuery เท่านั้นในการเพิ่ม class ให้กับ element

```js
assert(!code.match(/class\.\*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
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
