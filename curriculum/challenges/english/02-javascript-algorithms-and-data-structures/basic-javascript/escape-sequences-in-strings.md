---
id: 56533eb9ac21ba0edf2244b6
title: Escape Sequences in Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

นอกจากเครื่องหมาย quote แล้ว ก็ยังมีเครื่องหมายอื่น ๆ อีกที่สามารถ <dfn>escape</dfn> ได้ใน string 
การ <dfn>escape</dfn> จะจำเป็นในสองกรณีก็คือ:

1.  เพื่อใช้ตัวอักษรที่ปกติจะพิมพ์ลงไปใน string ไม่ได้ เช่น carriage return (กลับไปที่ต้นบรรทัด)
2.  เพื่อแสดงเครื่องหมาย quote หลายตัวใน string โดยไม่ทำให้ JavaScript เข้าใจผิด

เราเรียนเรื่องนี้ไปในหัวข้อที่แล้ว

<table class='table table-striped'><thead><tr><th>โค้ด</th><th>ผลลัพธ์</th></tr></thead><tbody><tr><td><code>\'</code></td><td>single quote</td></tr><tr><td><code>\"</code></td><td>double quote</td></tr><tr><td><code>\\</code></td><td>backslash</td></tr><tr><td><code>\n</code></td><td>newline (ขึ้นบรรทัดใหม่)</td></tr><tr><td><code>\r</code></td><td>carriage return (กลับไปที่ต้นบรรทัด)</td></tr><tr><td><code>\t</code></td><td>tab</td></tr><tr><td><code>\b</code></td><td>word boundary</td></tr><tr><td><code>\f</code></td><td>form feed (ขึ้นบรรทัดใหม่โดยเริ่มต้นที่ตำแหน่งเดิม)</td></tr></tbody></table>

*อย่าลืมว่าตัว backslash เองก็จะต้องถูก escape เพื่อให้แสดงเป็น backslash ได้*

# --instructions--

จงนำข้อความสามบรรทัดนี้เก็บในตัวแปรเดียวกันคือ `myStr` โดยใช้ escape sequence

<blockquote>FirstLine<br>    \SecondLine<br>ThirdLine</blockquote>

คุณจะต้องใช้ escape sequence เพื่อแทรกตัวอักษรพิเศษให้ถูกต้อง คุณจะต้องเว้นวรรคตามตัวอย่างที่แสดงด้านบน โดยไม่มีช่องว่างระหว่าง escape sequence หรือคำต่างๆ

**หมายเหตุ:** ย่อหน้าที่อยู่หน้าคำว่า `SecondLine` ทำได้โดยใช้ tab escape character ไม่ได้ใช้การเว้นวรรค

# --hints--

ต้องไม่มี space หรือการเว้นวรรคในตัวแปร `myStr` 

```js
assert(!/ /.test(myStr));
```

ตัวแปร `myStr` ต้องมี string สามตัวดังนี้  `FirstLine`, `SecondLine` และ `ThirdLine` (ตัวพิมพ์เล็กพิมพ์ใหญ่ต้องตรงกัน)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` ต้องต่อด้วยเครื่องหมายสำหรับขึ้นบรรทัดใหม่ `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

ในตัวแปร `myStr` ต้องมีเครื่องหมายย่อหน้า `\t` แล้วตามด้วยเครื่องหมายสำหรับขึ้นบรรทัดใหม่ `\n`

```js
assert(/\n\t/.test(myStr));
```

ต้องมีเครื่องหมาย backslash `\` หน้าคำว่า `SecondLine` 

```js
assert(/\\SecondLine/.test(myStr));
```

ต้องมีเครื่องหมายสำหรับขึ้นบรรทัดใหม่ระหว่าง `SecondLine` และ `ThirdLine`

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

ตัวแปร `myStr` ต้องมีเฉพาะคำที่ระบุให้เท่านั้น

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --after-user-code--

```js
(function(){
if (myStr !== undefined){
console.log('myStr:\n' + myStr);}})();
```

## --seed-contents--

```js
var myStr; // แก้ไขโค้ดบรรทัดนี้
```

# --solutions--

```js
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
