---
id: bad87fee1348bd9aed908826
title: Change the CSS of an Element Using jQuery
challengeType: 6
forumTopicId: 16776
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: change-the-css-of-an-element-using-jquery
---

# --description--

เราสามารถเปลี่ยนสไตล์ CSS ของ HTML element ได้โดยตรงด้วย jQuery

jQuery มีฟังก์ชันที่เรียกว่า `.css()` ที่ทำให้คุณสามารถเปลี่ยน CSS ของ element ได้

มาลองเปลี่ยนสี element เป็นสีน้ำเงินกัน:

```js
$("#target1").css("color", "blue");
```

การใช้งานฟังก์ชันนี้จะแตกต่างจากการใช้ CSS แบบปกติเล็กน้อย ซี่ง CSS property และ value จะต้องครอบดด้วยเครื่องหมายคำพูด และคั่นด้วย comma แทนที่จะเป็น colon แบบเดิม


ขั้นแรกให้ลบ selector ของ jQuery ออกจากฟังก์ชัน `document ready` ก่อน

แล้วให้เลือก `target1` แล้วเปลี่ยน CSS `color` เป็น `red`

# --hints--

`target1` จะต้องมีข้อความที่เป็นสีแดง

```js
assert($('#target1').css('color') === 'rgb(255, 0, 0)');
```

ต้องใช้แค่ jQuery เท่านั้นในการเพิ่ม class ให้กับ element


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
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");

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
    $("button").removeClass("btn-default");
    $("#target1").css("color", "red");
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
