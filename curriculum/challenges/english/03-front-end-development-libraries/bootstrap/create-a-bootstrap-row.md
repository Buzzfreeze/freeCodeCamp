---
id: bad87fee1348bd9bec908846
title: Create a Bootstrap Row
challengeType: 0
forumTopicId: 16813
dashedName: create-a-bootstrap-row
---

# --description--

มาลองสร้าง Bootstrap row สำหรับ inline element กัน

โดยเริ่มจากสร้าง `div` element ข้างล่าง tag `h3` แล้วใส่ class ว่า `row`

# --hints--

เพิ่ม `div` element ใต้ `h3` element

```js
assert(
  $('div').length > 1 &&
    $('div.row h3.text-primary').length == 0 &&
    $('div.row + h3.text-primary').length == 0 &&
    $('h3.text-primary + div.row').length > 0
);
```

`div` element ที่เพิ่มมาจะต้อง class ชื่อว่า `row`

```js
assert($('div').hasClass('row'));
```

`row div` ที่สร้างขึ้นจะต้องอยู่ใน `div` ที่มี class `container-fluid`

```js
assert($('div.container-fluid div.row').length > 0);
```

อย่าลืม tag ปิดสำหรับ `div` element นี้

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

</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row"></div>
</div>
```
