---
id: bad87fee1348bd9aec908857
title: Use Comments to Clarify Code
challengeType: 0
forumTopicId: 18347
dashedName: use-comments-to-clarify-code
---

# --description--
การใช้ comment เป็นการเพิ่มข้อความในโค้ดของเรา แต่ข้อความเหล่านี้จะไม่ได้รับการ compile เมื่อโค้ดทำงาน โดยส่วนใหญ่จะ comment ถ้าเราต้องการบอกอะไรบางอย่างกับคนที่มาอ่านโค้ดของเรา

คราวนี้เราจะ comment เพื่อบอกกับคนที่มาอ่านโค้ดของเราว่าเขาไม่ควรแก้ไขโค้ดนี้ตรงๆ

ให้ comment ที่ส่วนบนสุดของ HTML ว่า `Code below this line should not be changed`

เพิ่ม comment โดยใส่ `<!--` หน้าข้อความใน comment และปิดด้วย `-->`

# --hints--

เริ่มข้อความ comment ด้วย `<!--` ในส่วนบนสุดของ HTML

```js
assert(code.match(/^\s*<!--/));
```

ข้อความใน comment คือ `Code below this line should not be changed`

```js
assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi));
```

และปิด comment ด้วย `-->`

```js
assert(code.match(/-->.*\n+.+/g));
```

ใช้ `<!--` เปิด comment กี่ตัว ก็จะต้องปิดด้วย `-->` จำนวนเท่ากัน

```js
assert(code.match(/<!--/g).length === code.match(/-->/g).length);
```

# --seed--

## --seed-contents--

```html
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
<!-- Code below this line should not be changed -->
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
