---
id: bad87fee1348bd9aed908826
title: Change the CSS of an Element Using jQuery
challengeType: 6
forumTopicId: 16776
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: change-the-css-of-an-element-using-jquery
---

# --description--

เราสามารถเปลี่ยนสไตล์ CSS ของ HTML element โดยตรงด้วย jQuery

jQuery มีฟังก์ชันที่เรียกว่า `.css()` ที่ทำให้คุณสามารถเปลี่ยน CSS ของ element ใดๆ ได้

มาลองเปลี่ยนสี element เป็นสีน้ำเงินกัน:

```js
$("#target1").css("color", "blue");
```

การใช้งานฟังก์ชันนี้จะแตกต่างจากการประกาศฟังก์ชัน CSS ทั่วไปเล็กน้อย ซึง CSS property และ value จะต้องครอบดด้วยเครื่องหมายคำพูด และกั้นด้วย comma แทนที่จะเป็น colon แบบเดิม


ให้ลบ jQuery selectors ทั้งหมดออก แล้วปล่อยให้ `document ready function` นั้นว่าง

ให้เลือก `target1` และเปลี่ยนสีของมันให้เป็นสีแดง

# --hints--

`target1` element จะต้องมีข้อความที่เป็นสีแดง

```js
assert($('#target1').css('color') === 'rgb(255, 0, 0)');
```

ต้องใช้ jQuery เท่านั้นในการเพิ่ม class ต่างๆ ไปยัง element


```js
assert(!code.match(/class.*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");

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
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
    $("#target1").css("color", "red");
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
