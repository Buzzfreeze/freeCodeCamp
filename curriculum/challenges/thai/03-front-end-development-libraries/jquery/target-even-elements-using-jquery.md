---
id: bad87fee1348bd9aed008826
title: Target Even Elements Using jQuery
challengeType: 6
forumTopicId: 18318
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-even-elements-using-jquery
---

# --description--

คุณสามารถเลือก element เป้าหมายอาศัยการระบุตำแหน่งคู่หรือคี่ โดยใช้ `:odd` or `:even` selector

โปรดทราบว่า jQuery คือ zero-indexed ซึ่งหมายความว่า element ตัวแรกสุดในลำดับการเลือกนั้นจะมีตำแหน่งที่ 0 นี่อาจจะทำให้สับสนได้ เพราะขัดแย้งกับหลักคิดพื้นฐานของเรา จะเห็นได้ว่า `:odd` จะเลือก element ตัวที่ 2 (ตำแหน่งที่ 1), element ตัวที่ 4 (ตำแหน่งที่ 3) ต่อไปเรื่อยๆ

นี่คือวิธีการที่คุณจะสามารถเลือกเป้าหมาย elementที่มี class `target` ที่มีตำแหน่งคี่ทั้งหมด แล้วเพิ่ม class ต่างๆ ให้กับมัน

```js
$(".target:odd").addClass("animated shake");
```

มาลองเลือก `target` element ที่มีตำแหน่งคู่ทั้งหมด และเพิ่ม class `animated` และ `shake` ให้ โปรดจำไว้ว่า **even** หมายถึงตำแหน่งของ element ที่เป็นระบบ zero-based

# --hints--

`target` element ทั้งหมดที่ jQuery เลือกให้เป็นตำแหน่งคู่จะต้องมีเอฟเฟคสั่น

```js
assert(
  $('.target:even').hasClass('animated') && $('.target:even').hasClass('shake')
);
```

คุณจะต้องใช้ `:even` selector ในการปรับแต่ง element นี้

```js
assert(code.match(/\:even/g));
```

คุณจะต้องใช้ jQuery เท่านั้นในการเพิ่ม class ให้แก่ element

```js
assert(
  code.match(/\$\(".target:even"\)/g) ||
    code.match(/\$\('.target:even'\)/g) ||
    code.match(/\$\(".target"\).filter\(":even"\)/g) ||
    code.match(/\$\('.target'\).filter\(':even'\)/g)
);
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
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");

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
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
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
