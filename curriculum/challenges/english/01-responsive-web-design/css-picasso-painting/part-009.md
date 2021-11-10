---
id: 60b69a66b6ddb80858c5157f
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

โดยทั่วไป  HTML จะถูกแสดงผลตามทิศทางบนลงล่าง
Element ที่ด้านบนของโค้ดจะถูกวางไว้ที่ด้านบนของหน้าเว็บไซต์
อย่างไรก็ตาม มันก็มีหลายครั้งที่คุณต้องการที่จะย้าย element ไปตำแหน่งอื่น ๆ 
คุณสามารถทำเช่นนี้ได้ด้วย `position` attribute

จงกำหนดให้ `position` attribute ของ `back-wall` element กลายเป็น `absolute`
`absolute` position จะทำให้ element ไม่ถูกจัดวางตามลำดับบนล่างของเอกสารแล้ว และมันทำให้คุณสามารถจัดวาง element ได้โดยอ้างอิงตำแหน่งของ container ของมัน

เมื่อ element ถูกจังวางด้วยตัวเราเอง คุณสามารถปรับตำแหน่งมันด้วยคำสั่ง  `top`, `left`, `right`, และ `bottom`
จงกำหนดให้ `back-wall` มีค่า `top` เป็น `0` และ `left` มีค่าเป็น `0`


# --hints--

`#back-wall` selector ควรมี `position` property ที่มีค่าเป็น `absolute`

```js
assert(new __helpers.CSSHelp(document).getStyle('#back-wall')?.position === 'absolute');
```

Your `#back-wall` selector should have the `top` property set to `0`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#back-wall')?.top === '0px');
```

Your `#back-wall` selector should have the `left` property set to `0`.

```js
assert(new __helpers.CSSHelp(document).getStyle('#back-wall')?.left === '0px');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>freeCodeCamp Picasso Painting</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  </head>
  <body>
    <div id="back-wall"></div>
  </body>
</html>
```

```css
body {
  background-color: rgb(184, 132, 46);
}

#back-wall {
  background-color: #8B4513;
  width: 100%;
  height: 60%;
  --fcc-editable-region--

  --fcc-editable-region--
}
```
