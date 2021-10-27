---
id: bad87fee1348bd9aed208826
title: Target the Children of an Element Using jQuery
challengeType: 6
forumTopicId: 18320
dashedName: target-the-children-of-an-element-using-jquery
---

# --description--

เมื่อ HTML element ใดๆ ซ้อนอยู่ใน element อีกที เราจะเรียก element นั้นว่า <dfn>children</dfn> ของ elementที่มันซ้อนอยู่ ตัวอย่างเช่น button element ที่มีข้อความ `#target1`, `#target2`, และ `#target3` ทั้งหมดในแบบทดสอบนี้ เป็น children ของ `<div class="well" id="left-well">` element

jQuery มีฟังก์ชันที่เรียกว่า `children()` ที่จะให้ให้คุณเข้าถึง children ของ element ใดๆที่คุณได้เลือกมา

ข้างล่างคือตัวอย่างของการใช้ฟังก์ชัน `children()` เพื่อเปลี่ยน children ของ `left-well` element เป็นสี `blue`:

```js
$("#left-well").children().css("color", "blue")
```

# --instructions--

ทำให้ children ของ `right-well` element เป็นสีส้ม

# --hints--

Children ของ `#right-well` ทั้งหมด จะต้องมีข้อความที่เป็นสีส้ม

```js
assert($('#right-well').children().css('color') === 'rgb(255, 165, 0)');
```

คุณจะต้องใช้ฟังก์ชัน `children()` ในการปรับแต่ง element

```js
assert(code.match(/\.children\(\)\.css/g));
```

คุณจะต้องใช้ jQuery เท่านั้นในการเพิ่ม class ให้แก่ element


```js
assert(code.match(/<div class="well" id="right-well">/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");

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
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
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
