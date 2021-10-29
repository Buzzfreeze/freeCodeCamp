---
id: bad87fee1348bd9aec908849
title: Add Elements within Your Bootstrap Wells
challengeType: 0
forumTopicId: 16636
dashedName: add-elements-within-your-bootstrap-wells
---

# --description--

ลองดูโค้ดข้างล่างจะเห็น `div` ซ้อน `div` หลายๆ ชั้น ภายในแต่ละ column ของ row

ให้เพิ่ม 3 `button` element ภายใน `div` ที่อยู่ข้างในสุด ที่มี class ชื่อว่า `well` 

# --hints--

`button` element ทั้ง 3 จะต้องอยู่ภายใน `div` ที่มี class ชื่อว่า `well`

```js
assert(
  $('div.well:eq(0)').children('button').length === 3 &&
    $('div.well:eq(1)').children('button').length === 3
);
```

ดังนั้นจะต้องเพิ่มทั้งหมด 6 `button` element

```js
assert($('button') && $('button').length > 5);
```

อย่าลืมปิด tag `button` ทั้ง 6 ด้วย

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
