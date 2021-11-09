---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
challengeType: 1
forumTopicId: 18305
dashedName: split-a-string-into-an-array-using-the-split-method
---

# --description--

`split` method ทำการแตก string ให้เป็น array ของ string โดย method นี้มี argument ที่เป็น delimiter ซึ่งเป็นตัวอักษรที่ใช้ในการแตก string หรือ regular expression ตัวอย่างเช่น หาก delimiter เป็น space คุณจะได้ array ของคำ (word) และหาก delimiter เป็น empty string (string เปล่า) คุณจะได้ array ของตัวอักษรที่อยู่ใน string

ด้านล่างนี้แสดง 2 ตัวอย่าง โดยตัวอย่างแรกทำการแตก string ด้วย space ส่วนตัวอย่างที่สอง แตก string ตามตัวอักษร ด้วย regular expression

```js
var str = "Hello World";
var bySpace = str.split(" ");

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
```

`bySpace` ควรมีค่าเป็น `["Hello", "World"]` และ `byDigits` ควรมีค่าเป็น `["How", "are", "you", "today"]`.

เนื่องจาก string ไม่สามารถเปลี่ยนแปลงได้ (immutable) ดังนั้นจึงทำให้การทำงานกับ `split` method ทำได้ง่ายขึ้น

# --instructions--

จงใช้ `split` method ในฟังก์ชัน `splitify` เพื่อแตก `str` ให้เป็น array ของคำ โดยฟังก์ชันควรคืนค่าเป็น array 
หมายเหตุ คำแต่ละคำไม่จำเป็นต้องแตกด้วย space และ array ไม่ควรมีเครื่องหมายวรรคตอน (punctuation)

# --hints--

โค้ดของคุณควรใช้ `split` method

```js
assert(code.match(/\.split/g));
```

`splitify("Hello World,I-am code")` ควรคืนค่าเป็น `["Hello", "World", "I", "am", "code"]`.

```js
assert(
  JSON.stringify(splitify('Hello World,I-am code')) ===
    JSON.stringify(['Hello', 'World', 'I', 'am', 'code'])
);
```

`splitify("Earth-is-our home")` ควรคืนค่าเป็น `["Earth", "is", "our", "home"]`.

```js
assert(
  JSON.stringify(splitify('Earth-is-our home')) ===
    JSON.stringify(['Earth', 'is', 'our', 'home'])
);
```

`splitify("This.is.a-sentence")` ควรคืนค่าเป็น `["This", "is", "a", "sentence"]`.

```js
assert(
  JSON.stringify(splitify('This.is.a-sentence')) ===
    JSON.stringify(['This', 'is', 'a', 'sentence'])
);
```

# --seed--

## --seed-contents--

```js
function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}
splitify("Hello World,I-am code");
```

# --solutions--

```js
function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);
  // Only change code above this line
}
```
