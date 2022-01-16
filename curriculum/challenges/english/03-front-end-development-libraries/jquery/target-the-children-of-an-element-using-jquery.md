---
id: bad87fee1348bd9aed208826
title: Target the Children of an Element Using jQuery
challengeType: 6
forumTopicId: 18320
dashedName: target-the-children-of-an-element-using-jquery
---

# --description--

ถ้าเรามี HTML element ที่ซ้อนกันอยู่ เราจะเรียก element ตัวข้างในว่าเป็น <dfn>children</dfn> (ลูก) ของ element ตัวนอก 
เช่น `button` ทั้งสามปุ่มที่มีข้อความว่า `#target1` `#target2` และ `#target3` จะเป็น children ของ `<div class="well" id="left-well">` ทั้งหมดเลย

jQuery มีฟังก์ชันที่เรียกว่า `children()` ที่จะทำให้คุณเข้าถึง children ของ element ที่เลือกได้

ข้างล่างคือตัวอย่างของการใช้ฟังก์ชัน `children()` เพื่อทำให้ children ของ `left-well` มี CSS `color` เป็น `blue`:

```js
$("#left-well").children().css("color", "blue")
```

# --instructions--

จงทำให้ children ทั้งหมดของ `right-well` มี CSS `color` เป็น `orange`

# --hints--

children ทุกตัวใน `#right-well` จะต้องมีข้อความที่เป็นสีส้ม

```js
assert($('#right-well').children().css('color') === 'rgb(255, 165, 0)');
```

คุณจะต้องใช้ฟังก์ชัน `children()` ในการเลือก element ลูก

```js
assert(code.match(/\.children\(\)\.css/g));
```

คุณจะต้องใช้แค่ jQuery เท่านั้นในการเพิ่ม class ให้แก่ element


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
