---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
forumTopicId: 301235
dashedName: refactor-global-variables-out-of-functions
---

# --description--

จากบทเรียนที่ผ่านมา เราได้เรียนรู้หลักการของ functional programming 2 ข้อ คือ

1) อย่าเปลี่ยนแปลงแก้ไข variable หรือ object - ให้สร้าง variable และ object ใหม่ และคืนค่าออกไป หากฟังก์ชันจำเป็นต้องมีการคืนค่า อย่างไรก็ตาม การใช้คำสั่งเช่น `var newArr = arrVar` โดยที่ `arrVar` เป็น array เป็นการชี้ไปยัง address ของ variable ที่มีอยู่แล้ว และไม่ใช่การคัดลอก (copy) ดังนั้น การเปลี่ยนแปลงค่าใน `newArr` จะก่อให้เกิดการเปลี่ยนแปลงค่าใน `arrVar` ด้วย

2) ประกาศ function parameters - การประมวลผลภายในฟังก์ชันให้ทำกับ argument ที่ส่งผ่านเข้ามาในฟังก์ชันเท่านั้น ไม่ต้องทำกับ global object หรือ global variable

จากแบบทดสอบที่ผ่านมา การบวก 1 อาจดูไม่น่าตื่นเต้นเท่าไหร่ แต่เราสามารถประยุกต์หลักการนี้ เมื่อต้องทำงานกับ array หรือ object อื่นๆ ที่ซับซ้อนกว่านี้

# --instructions--

จงปรับแก้โค้ดให้ global array `bookList` ไม่ถูกแก้ไขภายในฟังก์ชัน โดยฟังก์ชัน `add` ควรสามารถเพิ่ม `bookName` ได้ แล้วนำไปวางที่ตำแหน่งสุดท้ายของ array ที่ถูกส่งเข้ามาในฟังก์ชัน และให้คืนค่าเป็น array ตัวใหม่ ส่วนฟังก์ชัน `remove` ควรลบ `bookName` ที่กำหนดออกจาก array ที่ถูกส่งเข้ามาฟังก์ชัน

**หมายเหตุ:** ทั้งสองฟังก์ชันควรคืนค่าเป็น array และ parameter ใหม่ ควรระบุก่อน `bookName` parameter

# --hints--

`bookList` ไม่ควรเปลี่ยนแปลงและยังคงมีค่าเป็น `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
assert(
  JSON.stringify(bookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`newBookList` ควรมีค่าเป็น `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(newBookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

`newerBookList` ควรมีค่าเป็น `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

```js
assert(
  JSON.stringify(newerBookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`newestBookList` ควรมีค่าเป็น `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

```js
assert(
  JSON.stringify(newestBookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

# --seed--

## --seed-contents--

```js
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
```

# --solutions--

```js
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (bookList, bookName) {
  return [...bookList, bookName];
}

function remove (bookList, bookName) {
  const bookListCopy = [...bookList];
  const bookNameIndex = bookList.indexOf(bookName);
  if (bookNameIndex >= 0) {
    bookListCopy.splice(bookNameIndex, 1);
  }
  return bookListCopy;
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
```
