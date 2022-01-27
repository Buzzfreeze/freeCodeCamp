---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cPp7zuE"
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

HTML5 มี element หลายๆตัวเพิ่มเข้ามา เพื่อช่วยให้นักพัฒนามีตัวเลือกมากขึ้น โดยที่จะเพิ่ม accessibility ให้กับเว็บอีกด้วย
แท็กพวกนี้คือ `main`, `header`, `footer`, `nav`, `article`, `section` ฯลฯ

ซึ่งโดยปกติแล้ว แท็กพวกนี้จะมีการทำงานเหมือน `div`
แต่ถ้าคุณใช้แท็กพวกนี้ได้ถูก โค้ด HTML ของคุณก็จะเข้าใจได้ง่ายขึ้น
เพราะว่าแค่ชื่อของแท็ก ก็จะสื่อแล้วว่าแท็กนั้นใช้ทำอะไร
โดย Assistive technology (เช่น screen reader) ก็จะช่วยใช้ผู้ใช้ ใช้งานหน้าเว็บของเราได้ง่ายขึ้นอีกด้วย

element `main` จะใช้เพื่อเก็บเนื้อหาหลัก และโดยควรมีแค่ 1 อันใน 1 หน้า
โดยเราจะใช้แท็กนี้ครอบเนื้อหาหลักของหน้า ซึ่งเนื้อหาหลักนี้ไม่ควรจะเป็นส่วนที่มีซ้ำกับหน้าอื่น เช่น แถบเมนู หรือ แบนเนอร์

และแท็ก `main` ก็จะมีฟีเจอร์ที่ assistive technology สามารถนำมาใช้ได้ เพื่อพาผู้ใช้ไปยังเนื้อหาหลัก
ถ้าคุณเคยเห็นปุ่ม "ไปที่เนื้อหาหลัก" ในหน้าเว็บ การใช้แท็ก `main` ก็เหมือนกับการเพิ่มปุ่มนี้ให้กับ assistive device โดยอัตโนมัติ

# --instructions--

ตอนนี้นาย Camper Cat มีไอเดียสุดบรรเจิดสำหรับหน้า "อาวุธของนินจา" ของเขา
ให้เพิ่มแท็กเปิดและแท็กปิดของ `main` ไว้ระหว่าง `header` และ `footer` (เราจะสอนแท็กนี้ทีหลัง)
ตอนนี้ให้ปล่อยแท็ก `main` ให้ว่างอย่างนี้ไปก่อน

# --hints--

โค้ดของคุณต้องมีแท็ก `main` 1 อัน

```js
assert($("main").length == 1);
```

แท็ก `main` ต้องจะอยู่ระหว่างแท็กปิดของ `header` และแท็กเปิดของ `footer`

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>

<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main></main>
<footer></footer>
```
