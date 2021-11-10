---
id: 5f3477ae8466a9a3d2cc953c
title: Part 16
challengeType: 0
dashedName: part-16
---

# --description--

ตอนนี้ คุณได้ใส่ CSS ในไฟล์ `styles.css`  
จงลบ `style` element และ content ทั้งหมดของมันออกไป
หลังจากที่คุณได้เอามันออกไปแล้ว ข้อความที่ถูกจัดให้อยู่ตรงกลางจะกลายไปชิดของซ้าย

# --hints--

คุณไม่มีอะไรใน `style` tags ของคุณ

```js
assert(!code.match(/style/i));
```

You should not have any CSS selectors in your HTML file.

```js
const html = code.split('<!DOCTYPE html>')[1];
assert(!html.includes('style'));
assert(!html.includes('text-align'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
    <style>
      h1, h2, p {
        text-align: center;
      }
    </style>
  </head>
--fcc-editable-region--
  <body>
    <header>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
    </header>
    <main>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
<html>
```

```css
h1, h2, p {
  text-align: center;
}
```

