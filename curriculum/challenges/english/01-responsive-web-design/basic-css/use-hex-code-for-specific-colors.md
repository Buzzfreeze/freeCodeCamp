---
id: bad87fee1348bd9aedf08726
title: Use Hex Code for Specific Colors
challengeType: 0
videoUrl: "https://scrimba.com/c/c8W9mHM"
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

คุณรู้หรือเปล่าว่ามีวิธีอื่นที่ใช้ระบุสีใน CSS ด้วย?
เรามีวิธีหนึ่งซึ่งเรียกว่า hexadecimal code หรือ hex code

ปกติแล้วในตัวเลขที่เราใช้อยู่ทุกๆวัน เราจะใช้ <dfn>decimal</dfn> (เลขฐาน 10) ซึ่งจะประกอบด้วยสัญลักษณ์ที่เป็นเลข 0 - 9
แต่ <dfn>Hexadecimal</dfn> (หรือ <dfn>hex</dfn>) เป็นเลขฐาน 16 ซึ่งแปลว่าจะใช้สัญลักษณ์เพื่อแสดงตัวเลขถึง 16 ตัว
โดยเริ่มต้น จะใช้เลข 0-9 เหมือนกับเลขฐาน 10 แต่พอถัดมาจะใช้ ส่วน A,B,C,D,E,F จะแสดงค่าตั้งแต่สิบถึงสิบห้า (เช่น A= 10, B= 11 ฯลฯ)
เมื่อเอามารวมกัน 0 ถึง F จะสามารถใช้เพื่อแสดงค่าแต่ละหลักของ hexadecimal ได้ โดยการกำหนดค่าที่เป็นไปได้ 16 ตัวแก่เรา

ลองอ่านอ่านรายละเอียดเพิ่มเติมเกี่ยวกับ [เลขฐาน 16 ได้ที่นี่](https://www.freecodecamp.org/news/hexadecimal-number-system/)

ใน CSS เราจะใช้เลขฐาน 16 ทั้งหมด 6 หลักเพื่อแสดงค่าของสี
โดยเลขสองตัวแรกจะเป็นค่าของสีแดง (R), สองตัวถัดมาเป็นสีเขียว (G), และสองตัวสุดท้ายเป็นสีฟ้า (B)
ยกตัวอย่างเช่น `#000000` จะเป็นค่าที่ต่ำที่สุด และจะแสดงผลเป็นสีดำ

ลองอ่านรายละเอียดเกี่ยวกับ [RGB color system ได้ที่นี่](https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel)

```css
body {
  color: #000000;
}
```

# --instructions--

ให้เปลี่ยนจากคำว่า `black` ในสี `background-color` ของ `body` element เป็น hex code (`#000000`)

# --hints--

`body` element ควรมีสีพื้นหลังเป็นสีดำ

```js
assert($("body").css("background-color") === "rgb(0, 0, 0)");
```

ต้องเปลี่ยนคำว่า `black` เป็น `hex code` ที่เป็นสีดำ

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```
