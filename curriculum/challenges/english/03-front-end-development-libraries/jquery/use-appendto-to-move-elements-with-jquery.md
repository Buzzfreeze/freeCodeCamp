---
id: bad87fee1348bd9aed608826
title: Use appendTo to Move Elements with jQuery
challengeType: 6
forumTopicId: 18340
dashedName: use-appendto-to-move-elements-with-jquery
---

# --description--

คราวนี้มาลองย้าย element จาก `div` นึง ไป `div` อื่นกัน

jQuery มีฟังก์ชันที่เรียกว่า `appendTo()` ที่ทำให้คุณสามารถเลือก HTML element และ ผนวกเข้ากับ element อื่นๆ

มาดูตัวอย่างข้างล่าง ถ้าคุณต้องการย้าย `target4` จาก right well ไปยัง left well เราจะใช้:

```js
$("#target4").appendTo("#left-well");
```

ย้าย `target2` element จาก `left-well` ไปยัง `right-well`

# --hints--

`target2` element จะต้องไม่อยู่ใน `left-well`

```js
assert($('#left-well').children('#target2').length === 0);
```

`target2` element จะต้องย้ายไปอยู่ใน `right-well`.

```js
assert($('#right-well').children('#target2').length > 0);
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
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();

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
