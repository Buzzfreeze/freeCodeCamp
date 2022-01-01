---
id: bad87fee1348bd9aedf08726
title: Use Hex Code for Specific Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

คุณรู้หรือเปล่าว่ายังมีวิธีอื่นเพื่อที่จะแสดงค่าสีใน CSS?
หนึ่งในนั้นเรียกว่า hexadecimal code, หรือ hex code

เรามักจะใช้ <dfn>decimals</dfn>, หรือเลขฐาน 10, ซึ่งจะประกอบด้วยสัญลักษณ์ที่เป็นเลข 0 - 9
<dfn>Hexadecimals</dfn> (or <dfn>hex</dfn>) เป็นเลขฐาน 16 ซึ่งแปลว่ามันจะใช้สัญลักษณ์ที่แตกต่างกัน 16 ตัว
เช่นเดียวกับเลขฐาน 10 สัญลักษณ์ 0-9 จะใช้แสดงค่าตั้งแต่ศูนย์ถึงเก้า ส่วน A,B,C,D,E,F จะแสดงค่าตั้งแต่สิบถึงสิบห้า
เมื่อเอามารวมกัน 0 ถึง F จะสามารถใช้เพื่อแสดงค่าแต่ละหลักของ hexadecimal ได้โดยการกำหนดค่าที่เป็นไปได้ 16 ตัวแก่เรา
คุณสามารถอ่านรายละเอียดเพิ่มเติมเกี่ยวกับ [เลขฐาน 16 ที่นี่](https://www.freecodecamp.org/news/hexadecimal-number-system/).

ใน CSS, เราสามารถใช้เลขฐาน 16 มีเลข 6 ตัวเพื่อแสดงค่าของสี
ทุกสองตัวจะแทนด้วยองค์ประกอบของสีแดง (R), สีเขียว (G), และสีฟ้า (B)
ยกตัวอย่างเช่น `#000000` จะเป้นสีดำและมันยังเป็นค่าที่ต่ำที่สุดที่เป็นไปได้
คุณสามารถอ่านรายละเอียดเกี่ยวกับ [RGB color system ที่นี่](https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel).

```css
body {
  color: #000000;
}
```

# --instructions--

จงแทนที่คำว่า `black` ในสีพื้นหลังของ `body` element ด้วย hex code, `#000000`.

# --hints--

`body` element ควรมีสีพื้นหลังเป็นสีดำ

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

`hex code` สำหรับสีดำควรถูกใช้แทนคำว่า `black`

```js
assert(code.match(/body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi));
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
