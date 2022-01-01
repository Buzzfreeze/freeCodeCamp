---
id: 587d7b87367417b2b2512b40
title: Compare Scopes of the var and let Keywords
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

การประกาศตัวแปรด้วย `var` จะเป็นการประกาศระดับ global แต่ถ้าประกาศภายในในฟังก์ชัน ก็จะเป็นระดับ local 

`let` จะทำงานคล้ายกัน แต่มีความพิเศษคือ เมื่อประกาศตัวแปรด้วย `let` ภายใน block หรือ expression แล้ว scope จะถูกจำกัดด้วย block หรือ expression นั้นๆ

ลองดูตัวอย่าง: 

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

ในตัวอย่างนี้ console จะแสดงค่า `[0, 1, 2]` และ `3`


`var` ทำให้ตัวแปร `i` ถูกประกาศในระดับ global แล้วเมื่อ `i++` ทำงาน โค้ดจะเปลี่ยนข้อมูลของตัวแปร global นั้น โค้ดด้านบนจะเหมือนกับการเขียนโค้ดด้านล่าง:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

ในตัวอย่างนี้ console จะแสดงค่า `[0, 1, 2]` และ `3`

ถ้าโค้ดของคุณทำงานแบบนี้อาจจะทำให้เกิดปัญหาได้ในกรณีที่คุณสร้างฟังก์ชัน และนำฟังก์ชันนั้นไปใช้ใน `for` loop ที่ใช้ตัวแปร  `i` เนื่องจากฟังก์ชันนั้นจะไปอ่านค่าของตัวแปร `i` ที่อยู๋ในระดับ global เสมอ

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

ในตัวอย่างนี้ console จะแสดงค่า  `3`

ตามตัวอย่างด้านบน `printNumTwo()` คืนค่ามาเป็น 3 แทนทีจะเป็น 2 
เพราะว่าค่าของ `i` จะถูกเปลี่ยนและ `printNumTwo()` จะคืนค่าออกมาเป็นตัว global `i` แทนค่า `i` ที่เกิดขึ้นภายใน anonymous function แต่ `let` จะช่วยแก้ปัญหานี้ได้:


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

ในตัวอย่างนี้ console จะแสดงค่า `2` และ error ว่า  `i is not defined`
 
ในตัวอย่างนี้ เราไม่ได้ประกาศ `i` ใน global scope แต่ประกาศภายในคำสั่ง `for` loop ดังนั้น `printNumTwo()` จึงคืนค่าออกมาได้ถูกต้อง เพราะว่า `let` ภายใน loop สร้างตัวแปร `i` ที่มีค่า 0, 1 และ 2 ที่เป็นคนละตัวกัน 


# --instructions--

จงแก้ไขโค้ดเพื่อให้ `i` ที่ประกาศในคำสั่ง `if` เป็นคนละตัวกับ `i` ในบรรทัดแรกของฟังก์ชัน (อย่าใช้ `var` ในโค้ด)

แบบฝึกหัดนี้ออกแบบมาเพื่อให้เห็นความแตกต่างระหว่าง การที่ `var` และ `let` กำหนด scope ให้กับตัวแปร ถ้าคุณเขียนโปรแกรมที่ฟังก์ชันเหมือนแบบฝึกหัดนี้ คุณควรใช้ชื่อตัวแปรต่างกันเพื่อป้องกันความสับสน


# --hints--

ห้ามมี `var` ในโค้ด

```js
assert(!code.match(/var/g));
```

ตัวแปร `i` ที่ประกาศในคำสั่ง `if` ต้องเป็น string ที่มีค่าเป็น `block scope`

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

การเรียกใช้ฟังก์ชัน `checkScope()` ต้องคืนค่าออกมาเป็น string `function scope`

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
