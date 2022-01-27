---
id: bad87fee1348bd9acdd08826
title: Learn How Script Tags and Document Ready Work
challengeType: 6
forumTopicId: 18224
dashedName: learn-how-script-tags-and-document-ready-work
---

# --description--

พร้อมที่เรียนเรื่อง jQuery ที่เป็นเครื่องมือ JavaScript ที่เป็นที่นิยมที่สุดหรือยัง?

ก่อนที่จะเริ่มใช้งาน jQuery นั้น เราจำเป็นจะต้องเติมบางอย่างให้กับ HTML ของเรา

เริ่มจาก เพิ่ม `script` element ในส่วนบนของ HTML แล้วอย่าลืมแท็กปิดด้วย

เบราว์เซอร์ของคุณจะเรียกใช้ JavaScript ทุกตัวใน `script` ซึ่งรวมถึง jQuery ด้วย

เพิ่มโค้ดนี้ `$(document).ready(function() {` ใน `script` แล้วปิดด้วย `});` (แท็กปิดก็ต้องอยู่ใน `script` นะ)

เราจะเรียนเรื่อง `function` ทีหลัง ตอนนี้สิ่งสำคัญที่ควรรู้ก็คือโค้ดที่คุณเขียนใน `function` นี้จะทำงานทันทีที่เบราว์เซอร์โหลดหน้าเว็บของคุณ

เราจำเป็นต้องใช้ฟังก์ชัน `document ready` เพราะถ้าไม่ใส่ โค้ดของคุณอาจจะทำงานก่อน HTML โหลดเสร็จ ซึ่งอาจจะเกิด bug ได้

# --hints--

คุณจะต้องสร้าง `script` element ให้ถูกต้องและมีแท็กปิดด้วย

```js
assert(
  code.match(/<\/script\s*>/g) &&
    code.match(
      /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
    ) &&
    code.match(/<\/script\s*>/g).length ===
      code.match(
        /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
      ).length
);
```

คุณต้องเพิ่ม `$(document).ready(function() {` ในส่วนต้นของ `script` element

```js
assert(
  code.match(
    /\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g
  )
);
```

แล้วคุณต้องปิดฟังก์ชัน `$(document).ready(function() {` ด้วย `});`

```js
assert(code.match(/\n*?\s*?\}\s*?\);/g));
```

# --seed--

## --seed-contents--

```html
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
