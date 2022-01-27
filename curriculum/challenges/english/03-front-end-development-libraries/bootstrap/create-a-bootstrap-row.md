---
id: bad87fee1348bd9bec908846
title: Create a Bootstrap Row
challengeType: 0
forumTopicId: 16813
dashedName: create-a-bootstrap-row
---

# --description--

มาลองใช้ row ของ Bootstrap ทำ inline element กัน

โดยเริ่มจากสร้าง `div` ตัวใหม่ไว้ใต้ `h3` แล้วใส่ class เป็น `row`

# --hints--

เพิ่ม `div` ไว้ใต้ `h3`

```js
assert(
  $('div').length > 1 &&
    $('div.row h3.text-primary').length == 0 &&
    $('div.row + h3.text-primary').length == 0 &&
    $('h3.text-primary + div.row').length > 0
);
```

`div` ที่เพิ่มมาจะต้องมี class เป็น `row`

```js
assert($('div').hasClass('row'));
```

`row div` ที่สร้างใหม่จะต้องอยู่ใน `div` ที่มี class เป็น `container-fluid`

```js
assert($('div.container-fluid div.row').length > 0);
```

อย่าลืมแท็กปิดของ `div` ด้วย

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
