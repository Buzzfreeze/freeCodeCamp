---
id: bad87fee1348bd9aec908857
title: Use Comments to Clarify Code
challengeType: 0
forumTopicId: 18347
dashedName: use-comments-to-clarify-code
---

# --description--
การใช้ comment เป็นการเพิ่มข้อความบางอย่างในโค้ดของเรา แต่ข้อความเหล่านี้จะไม่ได้รับการ compile เมื่อรันงาน โดยส่วนใหญ่จะใช้ในกรณีต้องาการสื่อสารบางอย่างแก่ผู้ที่เข้ามาอ่านโค้ดของเรา เช่นกรณี เมื่อเราเริ่มใช้งาน jQuery เราจะสามารถแก้ไข element ของ HTML โดยที่ไม่ต้องแก้ไขโค้ดจริงๆ ในตัว HTML เอง

เราอาจจะใช้การ comment เพื่อบอกกับคนที่มาอ่านโค้ดของเราว่าไม่ควรแก้ไขโดยตรง

โดยการลองเพิ่ม comment ที่ส่วนบนสุดของ HTML ว่า `Code below this line should not be changed`

เพิ่ม comment โดยใส่ `<!--` ก่อนข้อความใน comment และปิดด้วย `-->`

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

ใช้ `<!--` เปิด comment เท่าไหร่ ก็จะต้องปิดด้วย `-->` เท่านั้น

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
