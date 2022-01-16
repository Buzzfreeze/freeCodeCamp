---
id: bad87fee1348bd9aec908847
title: Split Your Bootstrap Row
challengeType: 0
forumTopicId: 18306
dashedName: split-your-bootstrap-row
---

# --description--

ตอนนี้เราได้สร้าง row ของ Bootstrap เรียบร้อยแล้ว เราลองมาสร้าง column 2 ตัวเพื่อที่จะใส่ element อื่นๆไว้ข้างในกันต่อ

สร้าง `div` สองตัวไว้ข้างใน row แล้วให้ `div` ทั้งสองตัวมี class เป็น `col-xs-6`

# --hints--

`div class="col-xs-6"` ทั้งสองตัวต้องอยู่ใน `div class="row"`

```js
assert($('div.row > div.col-xs-6').length > 1);
```

อย่าลืม tag ปิดของ `div` ทุกตัวด้วย

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">


  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
</div>
```
