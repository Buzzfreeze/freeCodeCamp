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


คุณได้เห็นแล้วว่าทำไมการใช้ id เพื่อเลือก element ใน jQuery selector ถึงสะดวก แต่ในบางทีเราก็ไม่จำเป็นต้องใช้ id ในการเลือก element ก็ได้

jQuery นั้นมีวิธีอื่นที่เราจะใช้เลือก element ให้ถูกตัวได้

jQuery จะใช้ CSS selector เพื่อเลือก element ได้ด้วย   
อย่างการใช้ CSS selector ที่เป็น `target:nth-child(n)`  ซึ่งจะทำให้คุณเลือก element ที่ n ของ class หรือ element ที่ระบุได้

ตัวอย่างด้านล่างจะเป็นการเพิ่ม class `bounce` ให้กับ element ที่สามของ well ทั้งสองตัว:

```js
$(".target:nth-child(3)").addClass("animated bounce");
```

ให้ทำให้ element ลูกตัวที่สองใน well เด้งได้ 
โดยการเลือก element ลูกตัวที่สองที่มี class เป็น `target`

# --hints--

`target` ตัวที่สองในทั้งสอง `well` จะต้องเด้งได้

```js
assert(
  $('.target:nth-child(2)').hasClass('animated') &&
    $('.target:nth-child(2)').hasClass('bounce')
);
```

ในหน้านี้จะมี element สองตัวที่เด้ง

```js
assert($('.animated.bounce').length === 2);
```

ต้องใช้ selector `:nth-child()` เพื่อเลือก element

```js
assert(code.match(/\:nth-child\(/g));
```

คุณจะต้องใช้แค่ jQuery เท่านั้นในการเพิ่ม class ให้กับ element

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
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $(".target:nth-child(2)").addClass("animated bounce");
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
