---
id: 60a3e3396c7b40068ad6996c
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

ภายใน CSS box model, HTML element ทุกตัวจะถูกนับเป็นกล่อง 1 กล่องที่มีพื้นที่ 4 พื้นที่

ลองจินตนาการว่าคุณได้รับกล่องกล่องหนึ่งจากร้านค้าออนไลน์ที่คุณชอบที่สุด -- content คือสิ่งที่อยู่ในกล่องใบนั้นหรือในกรณีของเราก็คือ header, paragraph, หรือ image element.

จงเปลี่ยน `src` attribute ใน `<img>` จาก `https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-1.png` ให้เป็น `https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-2.png`.

# --hints--

`img` element ควรมี `src` ที่มีค่า `https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-2.png`

```js
assert(document.querySelector('img').getAttribute('src') === 'https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-2.png');
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
    <img src="https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-1.png">
--fcc-editable-region--
  </body>
</html>
```

