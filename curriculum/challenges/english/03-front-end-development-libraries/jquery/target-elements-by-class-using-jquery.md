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

คุณได้รู้วิธีการทำให้ `button` element ทั้งหมดของคุณมีเอฟเฟคเด้งมาแล้ว โดยการเลือกเป้าหมายด้วย `$("button")` แล้วจึงเพิ่ม CSS class ให้ ด้วย `.addClass("animated bounce");`

`.addClass()` เป็นฟังก์ชันที่ทำให้คุณสามารถเพิ่ม class ให้กับ element ได้

อย่างแรก ลองเล็งเป้าหมาย `div` elements ที่มี class `well` โดยการใช้ `$(".well")` selector

โปรดทราบว่าคุณจะต้องพิมพ์ `.` หน้าชื่อ class เช่นเดียวกับการประกาศคำสั่ง CSS

จากนั้นให้ใช้ฟังก์ชัน `.addClass()` ของ jQuery เพื่อเพิ่ม class `animated` และ `shake`

อย่างเช่น จะทำให้ element ทั้งหมดที่มี class `text-primary` มีเอฟเฟคสั่นโดยการเพิ่มโค้ดข้างล่างไปใน `document ready function`:

```js
$(".text-primary").addClass("animated shake");
```

# --hints--

คุณจะต้องใช้ฟังก์ชัน jQuery `addClass()` เพื่อเพิ่ม class animated` และ `shake`ให้แก่ element ทุกอันที่มี class `well`

```js
assert($('.well').hasClass('animated') && $('.well').hasClass('shake'));
```

คุณจะต้องใช้ jQuery เท่านั้นในการเพิ่ม class ให้แก่ element

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
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
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
