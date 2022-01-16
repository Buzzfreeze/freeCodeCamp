---
id: bad87fee1348bd9aec908849
title: Add Elements within Your Bootstrap Wells
challengeType: 0
forumTopicId: 16636
dashedName: add-elements-within-your-bootstrap-wells
---

# --description--

ตอนนี้เราจะมี `div` ที่ซ้อนกันหลายๆชั้นแล้ว เราทำลึกแค่นี้ก็พอแล้วล่ะ ต่อไปเรามาเพิ่ม `button` กันต่อ

ให้เพิ่ม `button` สามตัวใน `div` ที่อยู่ข้างในสุด (ตัวที่มี class เป็น `well`)

# --hints--

`button` ทั้ง 3 ตัวจะต้องอยู่ใน `div` ที่มี class เป็น `well`

```js
assert(
  $('div.well:eq(0)').children('button').length === 3 &&
    $('div.well:eq(1)').children('button').length === 3
);
```

คุณต้องมี `button` ทั้งหมด 6 ปุ่ม

```js
assert($('button') && $('button').length > 5);
```

อย่าลืมปิด tag `button` ทั้ง 6 ปุ่มด้วย

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</div>
```
