---
id: bad87fee1348bd9aed308826
title: Target the Parent of an Element Using jQuery
challengeType: 6
forumTopicId: 18321
dashedName: target-the-parent-of-an-element-using-jquery
---

# --description--

HTML element ทุก element มี `parent` element ที่พวกมัน `inherits` คุณสมบัติต่างๆ มา

ตัวอย่างเช่น `h3` element ในแอป `jQuery Playground` มี `<div class="container-fluid">` เป็น parent element และ container นี้ก็มี `body` เป็น parent อีกที

jQuery มีฟังก์ชันที่เรียกว่า `parent()` ที่จะทำให้คุณเข้าถึง parent ของ element ที่คุณเลือกได้

ข้างล่างนี้คือตัวอย่างการใช้ฟังก์ชัน `parent()` ในการเปลี่ยนพื้นหลัง parent element ของ `left-well` element เป็นสีน้ำเงิน:

```js
$("#left-well").parent().css("background-color", "blue")
```

จงเปลี่ยนสีพื้นหลัง parent ของ `#target1` element เป็นสีแดง

# --hints--

`left-well` element จะต้องมีพื้นหลังเป็นสีแดง

```js
assert(
  $('#left-well').css('background-color') === 'red' ||
    $('#left-well').css('background-color') === 'rgb(255, 0, 0)' ||
    $('#left-well').css('background-color').toLowerCase() === '#ff0000' ||
    $('#left-well').css('background-color').toLowerCase() === '#f00'
);
```

คุณจะต้องใช้ฟังก์ชัน `.parent()` ในการแก้ไข element
You should use the `.parent()` function to modify this element.

```js
assert(code.match(/\.parent\s*\(\s*\)\s*\.css/g));
```

`.parent()` method จะต้องถูกเรียกใช้บน `#target1` element

```js
assert(
  code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")\s*?\)\s*?\.parent/gi)
);
```

คุณจะต้องใช้ jQuery เท่านั้นในการเพิ่ม class ให้แก่ element

```js
assert(code.match(/<div class="well" id="left-well">/g));
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

  });
</script>

<!-- Only change code above this line -->

<body>
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
</body>
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
  });
</script>

<!-- Only change code above this line -->

<body>
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
</body>
```
