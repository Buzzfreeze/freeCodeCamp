---
id: bad87fee1348bd9aec908846
title: Create a Bootstrap Headline
challengeType: 0
forumTopicId: 16812
dashedName: create-a-bootstrap-headline
---

# --description--

เรามาเริ่มสร้างแอปจากศูนย์กันดีกว่า เพื่อฝึกทักษะการใช้ HTML, CSS และ Bootstrap

เราจะสร้างแอปที่ชื่อว่า jQuery playground ซึ่งจะใช้ต่อยอดในแบบฝึกหัด jQuery ในบทเรียนต่อๆ ไป

โดยเริ่มจากสร้าง `h3` element ที่มีข้อความว่า `jQuery Playground`

เปลี่ยนสี `h3` element ด้วย class `text-primary` ของ Bootstrap และกำหนดให้ข้อความอยู่ตรงกลางด้วย Bootstrap class `text-center`

# --hints--

เพิ่ม `h3` element ในหน้านี้

```js
assert($('h3') && $('h3').length > 0);
```

อย่าลืมแท็กปิดของ `h3` element

```js
assert(
  code.match(/<\/h3>/g) &&
    code.match(/<h3/g) &&
    code.match(/<\/h3>/g).length === code.match(/<h3/g).length
);
```

เพิ่มสีของ `h3` element โดยการใส่ class `text-primary`

```js
assert($('h3').hasClass('text-primary'));
```

ทำให้ `h3` element อยู่ตรงกลางหน้า โดยการใส่ class `text-center`

```js
assert($('h3').hasClass('text-center'));
```

ใส่ข้อความใน `h3` element ว่า `jQuery Playground`

```js
assert.isTrue(/jquery(\s)+playground/gi.test($('h3').text()));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```
