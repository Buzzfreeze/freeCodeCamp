---
id: 60b69a66b6ddb80858c5157a
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

FontAwesome เป็น library หนึ่งของ SVG-powered icons, มีหลายตัวที่สามารถใช้ได้ฟรี
คุณกำลังจะได้ใช้บาง icon ในโปรเจคนี้ ดังนั้นคุณต้องทำงานลิงค์ external stylesheet เข้ากับ HTML ของคุณ

จงเพิ่ม `link` element ที่มี `rel` เป็น `stylesheet` และเพิ่ม `href` ที่มี `https://use.fontawesome.com/releases/v5.8.2/css/all.css`

# --hints--

คุณควรเพิ่ม `link` element อีกอันหนึ่ง

```js
// We set this to 1 because the CSS link is stripped from the code by our parser.
assert(document.querySelectorAll('link').length === 2);
```

Your `link` element should have a `rel` of `stylesheet`.

```js
assert(document.querySelector('link')?.getAttribute('rel') === 'stylesheet');
```

Your `link` element should have an `href` of 
`https://use.fontawesome.com/releases/v5.8.2/css/all.css`.

```js
assert(document.querySelectorAll('link')?.[1]?.getAttribute('href') === 'https://use.fontawesome.com/releases/v5.8.2/css/all.css')
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
    --fcc-editable-region--

    --fcc-editable-region--
  </head>
  <body>
  </body>
</html>
```  

```css

```
