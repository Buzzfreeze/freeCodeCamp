---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
challengeType: 1
forumTopicId: 18305
dashedName: split-a-string-into-an-array-using-the-split-method
---

# --description--

method `split` จะทำการแตก string ให้เป็น array ของ string 
method นี้มี argument ที่เป็น delimiter ซึ่งเป็นตัวอักษรที่ใช้ในการแตก string หรือ regular expression 
เช่น ถ้า delimiter เป็นเว้นวรรค แล้ว string ของคุณเป็นประโยคในภาษาอังกฤษ คุณจะได้ผลลัพธ์เป็น array ของคำ และถ้า delimiter เป็น empty string คุณจะได้ผลลัพธ์เป็น array ของตัวอักษรที่อยู่ใน string

ด้านล่างนี้แสดง 2 ตัวอย่าง โดยตัวอย่างแรกจะทำการแตก string ด้วยเว้นวรรค ส่วนตัวอย่างที่สองจะแตก string ตามตัวอักษรด้วย regular expression

```js
var str = "Hello World";
var bySpace = str.split(" ");

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
```

`bySpace` จะมีค่าเป็น `["Hello", "World"]` และ `byDigits` จะมีค่าเป็น `["How", "are", "you", "today"]`.

เนื่องจากค่าของ string ไม่สามารถเปลี่ยนแปลงได้ (immutable) จึงทำให้การใช้ method `split` ทำได้ง่ายขึ้น

# --instructions--

จงใช้ method `split` ในฟังก์ชัน `splitify` เพื่อแตก `str` ให้เป็น array ของคำ โดยฟังก์ชันต้องคืนค่าเป็น array 
หมายเหตุ ในบททดสอบนี้จะแบ่งคำด้วยการเว้นวรรคและเครื่องหมายแบ่งคำอื่นด้วย และใน array ที่เป็นผลลัพธ์ต้องไม่มีจุด full-stop ที่ใช้ลงท้ายประโยค

# --hints--

ต้องใช้ method `split` ในโค้ด

```js
assert(code.match(/\.split/g));
```

การเรียกใช้ฟังก์ชัน `splitify("Hello World,I-am code")` ต้องได้ค่าเป็น `["Hello", "World", "I", "am", "code"]`.

```js
assert(
  JSON.stringify(splitify('Hello World,I-am code')) ===
    JSON.stringify(['Hello', 'World', 'I', 'am', 'code'])
);
```

การเรียกใช้ฟังก์ชัน `splitify("Earth-is-our home")` ต้องได้ค่าเป็น `["Earth", "is", "our", "home"]`.

```js
assert(
  JSON.stringify(splitify('Earth-is-our home')) ===
    JSON.stringify(['Earth', 'is', 'our', 'home'])
);
```

การเรียกใช้ฟังก์ชัน `splitify("This.is.a-sentence")` ต้องได้ค่าเป็น `["This", "is", "a", "sentence"]`.

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
splitify("Hello World,I-am code");
```

# --solutions--

```js
function splitify(str) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return str.split(/\W/);
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```
