---
id: 5f331e55dfab7a896e53c3a1
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

`title` เป้นหนึ่งในหลาย ๆ element ที่จะให้ข้อมูลเพิ่มเติมที่ไม่สามารถมองเห็นได้ในหน้าเว็บ แต่มีประโยชน์ต่อ search engines หรือวิธีที่หน้าเว็บเพจนี้จะถูกแสดง

ภายใน `head` element, จงเก็บ `meta` element ที่มาพร้อมกับ attribute ชื่อ `charset` ซึ่งถูกกำหนดค่าให้เป็น `utf-8` เพื่อบอกกับ browser ถึงวิธีที่ใช้ในการ encode ตัวอักษร 
จงไว้ว่า `meta` elements เป็น self-closing

# --hints--

คุณควรมี 1 `meta` tag.

```js
assert(code.match(/<meta\s.*>/i));
```

Your `meta` tag should have a `charset` attribute.

```js
assert(code.match(/<meta charset=/i));
```

Your `charset` attribute should have a value of `utf-8`.

```js
assert(code.match(/charset=('|")utf-8\1/i));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    <title>Camper Cafe Menu</title>
  </head>
--fcc-editable-region--
<html>
```
