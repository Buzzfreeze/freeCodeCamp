---
id: bad87fee1348bd9aed608826
title: Use appendTo to Move Elements with jQuery
challengeType: 6
forumTopicId: 18340
dashedName: use-appendto-to-move-elements-with-jquery
---

# --description--

คราวนี้มาลองย้าย element จาก `div` นึง ไป `div` อื่นกัน

jQuery มีฟังก์ชันที่เรียกว่า `appendTo()` ที่ทำให้คุณสามารถเลือก HTML element ไปใส่ใน element อื่นได้

ลองดูตัวอย่างข้างล่าง ถ้าคุณต้องการย้าย `target4` จาก `right well` ไปยัง `left well` เราจะใช้:

```js
$("#target4").appendTo("#left-well");
```

ให้ย้าย `target2` จาก `left-well` ไปยัง `right-well`

# --hints--

`target2` จะต้องไม่อยู่ใน `left-well` แล้ว

```js
assert($('#left-well').children('#target2').length === 0);
```

`target2` จะต้องย้ายไปอยู่ใน `right-well`

```js
assert($('#right-well').children('#target2').length > 0);
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
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();

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
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
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
