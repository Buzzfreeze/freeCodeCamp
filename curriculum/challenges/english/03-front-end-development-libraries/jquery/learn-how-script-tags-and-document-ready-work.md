---
id: bad87fee1348bd9acdd08826
title: Learn How Script Tags and Document Ready Work
challengeType: 6
forumTopicId: 18224
dashedName: learn-how-script-tags-and-document-ready-work
---

# --description--

พร้อมที่เรียนรู้เกี่ยวกับ jQuery ที่เป็นเครื่องมือ JavaScript ยอดนิยมตลอดกาลหรือยัง?

ก่อนที่จะเริ่มใช้งาน jQuery นั้น เราจำเป็นจะต้องเติมบางอย่างให้กับ HTML ของเรา

เริ่มจาก เพิ่ม `script` element ในส่วนบนของ HTML แล้วอย่าลืม tag ปิดด้วย

เบราว์เซอร์ของคุณจะเรียกใช้ JavaScript ใดๆ ใน `script` element รวมถึง jQuery

เพิ่มโค้ดต่อไปนี้: `$(document).ready(function() {` ภายใน `script` element แล้วปิดด้วย `});` (ยังคงอยู่ภายใน `script` element)

เราจะเรียนรู้เกี่ยว `functions` ต่างๆ ภายหลัง สิ่งสำคัญที่ควรรู้ก็คือโค้ดต่างๆ ที่คุณเขียนใน `function` นี้จะทำงานทันทีที่เบราว์เซอร์โหลดหน้าเว็บของคุณ 

สิ่งสำคัญก็คือ หากไม่มี `document ready function` แล้ว โค้ดของคุณอาจจะทำงานก่อนการแสดงผลของ HTML ซึ่งอาจจะก่อให้เกิด bug ได้

# --hints--

คุณจะต้องสร้าง `script` element ที่ถูกต้องและมี tag ปิดด้วย

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
