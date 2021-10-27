---
id: 564944c91be2204b269d51e3
title: Change Text Inside an Element Using jQuery
challengeType: 6
forumTopicId: 16773
dashedName: change-text-inside-an-element-using-jquery
---

# --description--

การใช้ jQuery ทำให้คุณสามารถเปลี่ยนข้อความที่อยู่ระหว่าง tag เปิดและปิดของ element ใดๆ หรือจะเปลี่ยน HTML markup ไปเลยก็ยังได้

jQuery มีฟังก์ชันที่เรียกว่า `.html()` ที่ทำให้คุณสามารถที่จะเพิ่ม HTML tag และ ข้อความข้างใน element ได้ เนื้อหาใดๆ ที่มีใน element ก่อนหน้านี้จะถูกแทนที่ทั้งหมดด้วยเนื้อหาใหม่ที่คุณเพิ่มมันเข้ามาจากการใช้ฟังก์ชันนี้

มาลองใส่ข้อความใหม่และทำการเน้นข้อความใน heading ของเรากัน:

```js
$("h3").html("<em>jQuery Playground</em>");
```

jQuery ยังมีฟังก์ชันที่คล้ายกันคือ `.text()` ที่จะเปลี่ยนเพียงแค่ข้อความข้างในแต่ไม่ได้เพิ่ม tag อธิบายง่ายๆ ก็คือ ฟังก์ชันนี้ไม่ได้มีผลใดๆ ต่อ HTML tag เพียงแค่เปลี่ยนข้อความในเนื้อหาเดิมเท่านั้น

เปลี่ยนการเน้นข้อความในปุ่มที่มีไอดีว่า `target4`

ดูบทความนี้ [View our news article for &lt;em>](https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element) เพื่อเรียนรู้ความแตกต่างระหว่าง `<i>` และ `<em>` รวมถึงการนำไปใช้

โปรดจำไว้ว่าในอดีตนั้น `<i>` tag จะถูกใช้เพื่อการเน้นข้อความ แต่เดี๋ยวนี้กลับนิยมนำมาใช้เป็น tag สำหรับการใช้ไอคอนต่างๆ แทน ขณะเดียวกันก็มี `<em>` tag มาแทนในการเน้นข้อความ แต่คุณก็สามารถใช้ tag ทั้งสองได้ในแบบทดสอบนี้

# --hints--

คุณจะต้องเน้นข้อความในปุ่ม `target4` โดยการเพิ่ม HTML tag เข้าไป

```js
assert.isTrue(
  /<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi.test($('#target4').html())
);
```

แต่ข้อความข้างในยังคงเดิม

```js
assert($('#target4') && $('#target4').text().trim() === '#target4');
```

คุณไม่ควรแก้ไขข้อความอื่นใด

```js
assert.isFalse(/<em>|<i>/gi.test($('h3').html()));
```

ควรใช้ฟังก์ชัน `.html()` ไม่ควรใช้ `.text()` ในกรณีนี้

```js
assert(code.match(/\.html\(/g));
```

คุณควรเลือกปุ่ม `button id="target4"` ด้วย jQuery

```js
assert(code.match(/\$\(\s*?(\"|\')#target4(\"|\')\s*?\)\.html\(/));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
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

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html('<em>#target4</em>');
  });
</script>

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
