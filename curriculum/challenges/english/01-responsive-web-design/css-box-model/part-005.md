---
id: 60a3e3396c7b40068ad6996e
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

Margin เป็นพื้นที่ด้านนอกของกล่อง และสามารถใช้เพื่อกำหนดพื้นที่ว่างระหว่างกล่องใบอื่น หรือก็คือ elements นั่นเอง

นี่เป็น element ด้านล่างที่มี top margin ที่กว้างกว่ามันและผลักมันลงไปที่ด้านล่างของหน้าเว็บไซต์

ณ ตอนนี้ที่คุณเข้าใจโมเดลกล่องของ CSS, เรามาเริ่มทำ Rothko painting กันเถอะ

จงลบ `<img>` element ออก

# --hints--

คุณไม่ควรมี `img` element ในโค้ดแล้ว

```js
assert(document.querySelector('img') === null);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Rothko</title>
  </head>
  <body>
--fcc-editable-region--
    <img src="https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-3.png">
--fcc-editable-region--
  </body>
</html>
```
