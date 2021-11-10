---
id: 56533eb9ac21ba0edf2244b6
title: Escape Sequences in Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Quotes (เครื่องหมายคำพูด) ไม่ใช่อักขระตัวเดียวที่สามารถ <dfn>escaped</dfn> ได้ใน string มีเหตุผลสองประการในการใช้ escaping characters:

1.  เพื่อให้คุณสามารถใช้อักขระที่คุณอาจไม่สามารถพิมพ์ได้ เช่น carriage return (การขึ้นบรรทัดใหม่)

2.  เพื่อให้คุณสามารถแสดง quotes หลายตัวใน string โดยที่ JavaScript ไม่ได้ตีความหมายในสิ่งที่คุณต้องการผิด

เราเรียนสิ่งนี้จากหัวข้อที่แล้ว

<table class='table table-striped'><thead><tr><th>Code</th><th>Output</th></tr></thead><tbody><tr><td><code>\'</code></td><td>single quote</td></tr><tr><td><code>\"</code></td><td>double quote</td></tr><tr><td><code>\\</code></td><td>backslash</td></tr><tr><td><code>\n</code></td><td>newline</td></tr><tr><td><code>\r</code></td><td>carriage return</td></tr><tr><td><code>\t</code></td><td>tab</td></tr><tr><td><code>\b</code></td><td>word boundary</td></tr><tr><td><code>\f</code></td><td>form feed</td></tr></tbody></table>

*โปรดทราบว่าตัว backslash เองจะต้องถูก escaped เพื่อให้แสดงเป็น backslash ได้*

# --instructions--

จงนำข้อความสามบรรทัดนี้เก็บในตัวแปรเดียวกันคือ `myStr` โดยใช้ escape Sequence

<blockquote>FirstLine<br>    \SecondLine<br>ThirdLine</blockquote>

คุณจะต้องใช้ Escape Sequence เพื่อแทรกอักขระพิเศษให้ถูกต้อง คุณจะต้องเว้นวรรคดังที่แสดงด้านบน โดยไม่มีช่องว่างระหว่าง escape sequences หรือคำต่างๆ

**หมายเหตุ:** การเยื้องสำหรับ `SecondLine` ทำได้โดยใช้ tab escape character ไม่ใช่การเว้นวรรค

# --hints--

`myStr` ไม่ควรมี space (เว้นวรรค)

```js
assert(!/ /.test(myStr));
```

`myStr` ควรประกอบด้วย string  `FirstLine`, `SecondLine` และ `ThirdLine` (เป็น case sensitivity)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` ควรตามด้วย newline character `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` ควรประกอบด้วย tab character `\t` ซึ่งตามด้วย newline character

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` ควรนำหน้าด้วย backslash character `\`

```js
assert(/\\SecondLine/.test(myStr));
```

ควรมี newline character ระหว่าง `SecondLine` และ `ThirdLine`

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` ควรมีเฉพาะอักขระที่แสดงใน instructions เท่านั้น

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
var myStr; // Change this line
```

# --solutions--

```js
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
