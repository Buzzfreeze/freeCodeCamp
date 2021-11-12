---
id: 587d7b87367417b2b2512b40
title: Compare Scopes of the var and let Keywords
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

ถ้าคุณประกาศตัวแปรด้วย keyword `var` จะเป็นการประกาศระดับ global หรือถ้าประกาศภายใน function ก็จะเป็นระดับ local 

keyword `let` ทำงานคล้ายคลึงกัน แต่มีฟีเจอร์พิเศษบางอย่าง คือเมื่อประกาศตัวแปรด้วย keyword `let` ภายใน block statement หรือ expression แล้ว scope จะถูกจำกัดด้วย block statement หรือ expression 


ตัวอย่าง: 

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

console จะแสดงค่า `[0, 1, 2]` และ `3`


ด้วย keyword `var` ทำให้ตัวแปร `i` ถูกประกาศระกับ global ดังนั้น เมื่อ `i++` รัน มันจะอัปเดตตัวแปร global โค้ดด้านบนจะมีความคล้ายกับการเขียนโค้ดด้านล่างนี้

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

console จะแสดงค่า `[0, 1, 2]` และ `3`

ลักษณะการทำงานเช่นนี้จะทำให้เกิดปัญหา หากคุณต้องสร้างฟังก์ชัน และเก็บไว้เพื่อใช้ในภายหลังใน `for` loop ที่ใช้ตัวแปร  `i` เนื่องจากฟังก์ชันที่เก็บไว้จะอ้างอิงถึงค่าของตัวแปร global `i` ที่มีการอัปเดตเสมอ

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

console จะแสดงค่า  `3`

อย่างที่คุณเห็น `printNumTwo()` พิมพ์ 3 ไม่ใช่ 2 เนื่องจากค่าที่กำหนดให้กับ `i` ได้รับการอัปเดตและ `printNumTwo()` จะคืน global `i` และไม่ใช่ค่า `i` ที่เกิดขึ้นภายในฟังก์ชั่น anonymous อย่างไรก็ตาม `let` ไม่ทำให้เกิดผลเช่นนี้:



```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

console จะแสดงค่า `2` และ error ว่า  `i is not defined`
 
`i` ไม่ได้ประกาศใน global scope แต่ประกาศภายในคำสั่ง `for` loop ดังนั้น `printNumTwo()` จึงคืนค่าที่ถูกต้อง เนื่องจากตัวแปร `i` ที่มีค่าต่างกัน (0, 1 และ 2) ถูกสร้างขึ้นโดย keyword `let` ภายใน loop statement


# --instructions--

จงแก้ไขโค้ดเพื่อให้ `i` ที่ประกาศใน `if` statement เป็นตัวแปรที่แตกต่างจาก `i` ที่ประกาศไว้ในบรรทัดแรกของฟังก์ชัน อย่าใช้ keyword `var` ในโค้ดของคุณ

แบบฝึกหัดนี้ออกแบบมาเพื่อแสดงให้เห็นความแตกต่างระหว่าง keyword `var` และ `let` ที่กำหนด scope ให้กับตัวแปรที่ประกาศ เมื่อเขียนโปรแกรมฟังก์ชันที่คล้ายกับที่ใช้ในแบบฝึกหัดนี้ ควรใช้ชื่อตัวแปรต่างกันเพื่อหลีกเลี่ยงความสับสน


# --hints--

ไม่ควรมี `var` ในโค้ด

```js
assert(!code.match(/var/g));
```

ตัวแปร `i` ประกาศใน `if` statement ควรมีค่าเท่ากับ string `block scope`

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

`checkScope()` ควรคืนค่า string `function scope`

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
 
  console.log('Function scope i is: ', i);
  return i;
}
```
