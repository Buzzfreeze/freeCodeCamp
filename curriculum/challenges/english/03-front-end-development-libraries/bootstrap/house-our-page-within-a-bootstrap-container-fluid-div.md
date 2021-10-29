---
id: bad87fee1348bd9aec908746
title: House our page within a Bootstrap container-fluid div
challengeType: 0
forumTopicId: 18198
dashedName: house-our-page-within-a-bootstrap-container-fluid-div
---

# --description--

มาลองทำให้คอนเทนท์ในเพจที่เราสร้างนั้นเป็น mobile-responsive กัน

โดยย้าย `h3` element ให้ไปอยู่ใน `div` element ที่มี class `container-fluid`

# --hints--

สร้าง `div` element และกำหนดให้มี class ชื่อว่า `container-fluid`

```js
assert($('div').hasClass('container-fluid'));
```

อย่าลืม tag ปิด สำหรับ `div` element

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

นำ `h3` element ไปใส่ไว้ใน `div` element ที่สร้างขึ้นมา

```js
assert($('div').children('h3').length > 0);
```

# --seed--

## --seed-contents--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

# --solutions--

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
</div>
```
