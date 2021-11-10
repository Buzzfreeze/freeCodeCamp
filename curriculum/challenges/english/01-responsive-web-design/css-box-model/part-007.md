---
id: 60a3e3396c7b40068ad69970
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

ก่อนที่คุณจะสามารถเริ่มการตกแต่ง `div` ที่คุณได้สร้างไว้, คุรต้องลิงค์ CSS เข้ากับ HTML ของคุณ

จงเพิ่ม `link` element เพิ่มลิงค์ไฟล์ `styles.css` 
จงกำหนดให้ `href` เท่ากับ `./styles.css` และจงอย่าลืมที่จะกำหนดให้ `rel` attribute เป็น `stylesheet`

# --hints--

คุณควรมี 1 `link` element.

```js
assert(/<link/.test(code))
```

Your `href` attribute should have the value `./styles.css`.

```js
assert(/href\s*=\s*('|")(\.\/)?styles\.css\1/.test(code));
```

Your `rel` attribute should have the value `stylesheet`.

```js
assert(/rel\s*=\s*('|")\s*stylesheet\s*\1/.test(code));
```

Your `link` element should have `href="./styles.css"` and `rel="stylesheet"` attributes

```js
assert(/<\s*link(\s+href\s*=\s*("|')(\.\/)?styles\.css\2\s*rel=('|")\s*stylesheet\s*\4|\s+rel\s*=\s*('|")\s*stylesheet\s*\5\s*href\s*=\s*("|')(\.\/)?styles\.css\6)\s*\/?>/.test(code));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Rothko</title>
--fcc-editable-region--

--fcc-editable-region--
  </head>
  <body>
    <div class="canvas">
    </div>
  </body>
</html>
```
