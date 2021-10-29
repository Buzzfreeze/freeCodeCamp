---
id: bad87fee1348bd9aed108826
title: Target a Specific Child of an Element Using jQuery
challengeType: 6
forumTopicId: 18315
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-a-specific-child-of-an-element-using-jquery
---

# --description--


คุณเห็นแล้วว่าทำไมการใช้ id attribute นั้นสะดวกสำหรับการกำหนดเป้าหมายให้กับ jQuery selector แต่ในบางกรณีเราก็ไม่จำเป็นต้องใช้ตัวไอดีในเลือกเป้าหมาย

jQuery นั้นมีวิธีการอย่างอื่นอีกในการกำหนดเป้าหมายให้กับ element ที่ถูกต้อง

jQuery ยังใช้ CSS selector เพื่อที่จะกำหนดเป้าหมายให้กับ element ต่างๆ ได้ อย่างการใช้ `target:nth-child(n)` CSS selector ที่จะทำให้คุณสามารถเลือก element ที่ n ทั้งหมด ของ class หรือ element เป้าหมาย

นี้คือวิธีการที่คุณจะสามารถเพิ่ม bounce class ให้แก่ element ลำดับที่สามของแต่ละ well ได้:

```js
$(".target:nth-child(3)").addClass("animated bounce");
```

มาลองทำให้ element ลูกลำดับที่ 2 ภายใน well element เกิดเอฟเฟคเด้งขึ้นมากัน โดยการเลือก element ลูก ที่มี class เป้าหมาย

# --hints--

Element ที่สองใน `target` element จะต้องมีเอฟเฟคเด้ง

```js
assert(
  $('.target:nth-child(2)').hasClass('animated') &&
    $('.target:nth-child(2)').hasClass('bounce')
);
```

ซึ่งจะมีทั้งหมด 2 element ที่เด้ง

```js
assert($('.animated.bounce').length === 2);
```

คุณควรใช้ selector `:nth-child()` เพื่อที่จะปรับแต่ง element นี้

```js
assert(code.match(/\:nth-child\(/g));
```

คุณจะต้องใช้ jQuery เท่านั้นในการเพิ่ม class ให้แก่ element

```js
assert(
  code.match(/\$\(".target:nth-child\(2\)"\)/g) ||
    code.match(/\$\('.target:nth-child\(2\)'\)/g) ||
    code.match(/\$\(".target"\).filter\(":nth-child\(2\)"\)/g) ||
    code.match(/\$\('.target'\).filter\(':nth-child\(2\)'\)/g)
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
