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

คุณสามารถเลือก element ตามตำแหน่งได้ถ้าใช้ selector `:odd` หรือ `:even`

โดย `:even` (แปลว่าเลขคู่) จะเลือก element ตัวที่ 1 3 5 ฯลฯ
และ `:odd` (แปลว่าเลขคี่) จะเลือก element ตัวที่ 2 4 6 ฯลฯ

ถ้าอ่านคำอธิบายข้างบนอาจจะงงนิดนึง เพราะจะเห็นว่า odd ที่แปลว่าเลขคี่นั้นเลือก element ที่ 2 4 6 ซึ่งเป็นเลขคู่
นั่นก็เพราะ jQuery นั้นก็ใช้ระบบ zero-based-index แปลว่า element ตัวแรกสุดจะมีตำแหน่ง (index) เป็น 0 
เช่นถ้าเราใช้ `:odd` เราจะเลือก element ตัวที่ 2 (ตำแหน่งที่ 1) ตัวต่อมาก็จะเป็น element ตัวที่ 4 (ตำแหน่งที่ 3) และต่อไปเรื่อยๆ

ตัวอย่างด้านล่างจะเป็นการเพิ่ม class ให้กับ element ที่มี class เป็น `target` และก็มีตำแหน่งเป็นเลขคี่

```js
$(".target:odd").addClass("animated shake");
```

ให้เลือก `target` ในตำแหน่งคู่ (`even`) ทั้งหมด และเพิ่ม class `animated` และ `shake` ให้กับ element ที่เลือก 
อย่าลืมว่า **even** จะใช้ตำแหน่งในระบบ zero-based

# --hints--

`target` ทั้งหมดที่ jQuery เลือกให้เป็นตำแหน่งคู่จะต้องสั่นได้

```js
assert(
  $('.target:even').hasClass('animated') && $('.target:even').hasClass('shake')
);
```

คุณจะต้องใช้ `:even` selector เพื่อเลือก element

```js
assert(code.match(/\:even/g));
```

คุณจะต้องใช้แค่ jQuery เท่านั้นในการเพิ่ม class ให้แก่ element

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
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
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
