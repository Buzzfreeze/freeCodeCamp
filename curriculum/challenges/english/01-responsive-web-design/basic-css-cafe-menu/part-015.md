---
id: 5f3477aefa51bfc29327200b
title: Part 15
challengeType: 0
dashedName: part-15
---

# --description--

คุณได้ตกแต่ง 3 element โดยการเขียน CSS ข้างใน `style` tags
มันทำงานได้ แต่เนื่องจากมันจะมีอีกหลาย style มันจะดีที่สุดถ้าเราเขียนมันไว้ในอีกไฟล์แล้วค่อยลิงค์มันมาที่ไฟล์นี้

พวกเราได้สร้างไฟล์ `styles.css` แยกไว้ให้คุณและได้เปลี่ยน editor view ไปที่ไฟล์นั้น
คุณสามารถเปลี่ยนไฟล์ได้ด้วยแท็บที่ด้านบนของ editor

จงเริ่มต้นด้วยการเขียน style ที่คุณได้เขียนไปแล้วใหม่อีกครั้งใน `styles.css` 
จงเช็คให้มั่นใจว่าคุณได้เอาแท็กเปิดและปิดของ `style`ออกไปแล้ว

# --hints--

`styles.css` ควรมี `h1, h2, p` type selector.

```js
const css = code.split('<!DOCTYPE html>')[0];
assert(__helpers.removeWhiteSpace(css).match(/(h1|h2|p),(h1|h2|p),(h1|h2|p){/))
```

Your selector should set the `text-align` property to `center`.

```js
const css = code.split('<!DOCTYPE html>')[0];
assert(css.match(/text-align:\s*center;?/));
```

You should only have one selector.

```js
const css = code.split('<!DOCTYPE html>')[0];
assert(css.match(/text-align:\s*center;?/).length === 1);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
    <style>
      h1, h2, p {
        text-align: center;
      }
    </style>
  </head>
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
--fcc-editable-region--

--fcc-editable-region--

```
