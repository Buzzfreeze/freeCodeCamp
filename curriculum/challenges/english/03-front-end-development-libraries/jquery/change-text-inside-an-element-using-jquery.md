---
id: 564944c91be2204b269d51e3
title: Change Text Inside an Element Using jQuery
challengeType: 6
forumTopicId: 16773
dashedName: change-text-inside-an-element-using-jquery
---

# --description--

การใช้ jQuery ทำให้คุณสามารถเปลี่ยนข้อความที่อยู่ระหว่าง tag เปิดและปิดของ element ได้ หรือจะเปลี่ยนโค้ด HTML ไปเลยก็ยังได้

jQuery มีฟังก์ชันที่เรียกว่า `.html()` ที่ทำให้คุณสามารถที่จะเพิ่ม tag HTML และข้อความข้างใน element ได้ 
ข้อมูลเดิมทั้งหมดที่อยู่ใน element จะถูกลบออก และเปลี่ยนเป็นข้อมูลใหม่ที่เพิ่มเข้ามาจากการใช้ฟังก์ชันนี้

มาลองใส่ข้อความใหม่และทำการเน้นข้อความใน heading ของเรากัน:

```js
$("h3").html("<em>jQuery Playground</em>");
```

jQuery ยังมีฟังก์ชันที่คล้ายกันคือ `.text()` ที่จะเปลี่ยนเพียงแค่ข้อความข้างในแต่ไม่ได้เพิ่ม tag แปลว่าถ้าเราใส่ข้อความที่มีหน้าตาเหมือน tag HTML ข้อความนั้นก็จะไม่ถูกอ่านเป็น HTML แต่จะเป็นแค่ข้อความธรรมดาเท่านั้น

ให้ทำการเน้นข้อความในปุ่มที่มี id เป็น `target4`

ลองอ่านบทความนี้ [View our news article for &lt;em>](https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element) เพื่อทำความเข้าใจว่า `<i>` และ `<em>` ต่างกันอย่างไร

ในตอนแรก tag `<i>` ถูกใช้เพื่อเน้นข้อความ แต่ตอนนี้กลับนิยมนำมาใช้เป็น tag สำหรับการใช้ไอคอนแทน คนเลยนิยมใช้ tag `<em>` เพื่อเน้นข้อความแทน แต่ในแบบทดสอบนี้คุณจะใช้ tag ไหนก็ได้

# --hints--

คุณจะต้องเน้นข้อความในปุ่ม `target4` โดยการเพิ่ม tag HTML เข้าไป

```js
assert.isTrue(
  /<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi.test($('#target4').html())
);
```

แต่ข้อความข้างในต้องเหมือนเดิม

```js
assert($('#target4') && $('#target4').text().trim() === '#target4');
```

ต้องไม่แก้ไขข้อความที่จุดอื่น

```js
assert.isFalse(/<em>|<i>/gi.test($('h3').html()));
```

ในกรณีนี้ควรใช้ฟังก์ชัน `.html()` ไม่ใช่ `.text()`

```js
assert(code.match(/\.html\(/g));
```

คุณควรเลือกปุ่ม `button id="target4"` โดยใช้ jQuery

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
