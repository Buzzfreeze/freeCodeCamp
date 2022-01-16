---
id: bad87fee1348bd9aed508826
title: Clone an Element Using jQuery
challengeType: 6
forumTopicId: 16780
dashedName: clone-an-element-using-jquery
---

# --description--

นอกจากการย้าย element แล้วเรายังคัดลอก element จากที่นึงไปไว้อีกที่นึงได้อีกด้วย

jQuery มีฟังก์ชันที่เรียกว่า `clone()` ที่ใช้คัดลอก element ได้

เช่น หากเราอยากจะคัดลอก `target2` จากใน `left-well` ไปไว้ใน `right-well` แล้ว เราจะใช้โค้ด: 

```js
$("#target2").clone().appendTo("#right-well");
```

สังเกตเห็นไหมว่าโค้ดข้างบนเป็นการใช้ฟังก์ชันของ jQuery สองฟังก์ชันทีเดียวเลย เราเรียกการทำแบบนี้ว่า <dfn>function chaining</dfn> ซึ่งวิธีนี้จะทำให้เราใช้ jQuery ได้สะดวกขึ้นมากๆ

มาลองคัดลอก `target5` และเอาไปใส่ใน `left-well` กัน

# --hints--

ยังต้องมี `target5` อยู่ใน `right-well` ด้วย

```js
assert($('#right-well').children('#target5').length > 0);
```

`target5` ที่คัดลอกมาจะต้องไปอยู่ใน `left-well`

```js
assert($('#left-well').children('#target5').length > 0);
```

คุณต้องใช้ jQuery เท่านั้นในการทำโจทย์นี้

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

# --solutions--

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
