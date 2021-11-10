---
id: 60a3e3396c7b40068ad6996d
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

content นั้นถูกล้อมไปด้วยพื้นที่ว่างที่เรียกว่า padding, เช่นเดียวกับการบับเบิ้ลได้ห่อสิ่งของและกั้นอยู่ระหว่างมันกับกล่อง

จงคิดว่าขอบก็เหมือนกับลังกระดาษที่เก็บของของคุณ

จงเปลี่ยน`src` attribute ให้เป็น `https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-3.png`

# --hints--

`img` element ควรมี `src` ทีมีค่าเป็น `https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-3.png`

```js
assert(document.querySelector('img').getAttribute('src') === 'https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-3.png');
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
    <img src="https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-2.png">
--fcc-editable-region--
  </body>
</html>
```
