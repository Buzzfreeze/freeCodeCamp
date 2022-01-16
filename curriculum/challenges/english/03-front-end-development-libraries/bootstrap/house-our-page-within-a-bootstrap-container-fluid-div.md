---
id: bad87fee1348bd9aec908746
title: House our page within a Bootstrap container-fluid div
challengeType: 0
forumTopicId: 18198
dashedName: house-our-page-within-a-bootstrap-container-fluid-div
---

# --description--

มาลองทำให้เนื้อหาในหน้าที่เราสร้างนั้นเป็น mobile-responsive กัน

ให้ย้าย `h3` ไปไว้ใน `div` ที่มี class เป็น `container-fluid`

# --hints--

สร้าง `div` และกำหนดให้มี class เป็น `container-fluid`

```js
assert($('div').hasClass('container-fluid'));
```

อย่าลืม tag ปิดของ `div` ด้วย

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

นำ `h3` ไปใส่ไว้ใน `div` ที่สร้างขึ้นมา

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
