---
id: 587d7b8f367417b2b2512b60
title: Refactor Global Variables Out of Functions
challengeType: 1
forumTopicId: 301235
dashedName: refactor-global-variables-out-of-functions
---

# --description--

จนถึงตอนนี้เราได้เรียนรู้หลักการของ functional programming ไปแล้ว 2 ข้อ คือ

1) อย่าเปลี่ยนค่าของตัวแปรหรือ object - ถ้าเราต้องคืนค่าออกจากฟังก์ชัน สร้างตัวแปรและ object ใหม่สำหรับคืนค่า แต่ถ้าเรามีตัว array `arrVar` แล้วใช้ `var newArr = arrVar` จะเป็นแค่การทำให้ `newArr` ชี้ไปยังตำแหน่งใน memory ตำแหน่งเดียวกับ `arrVar` แปลว่าถ้าเราเปลี่ยนค่าใน `newArr` ค่าของ `arrVar` ก็จะเปลี่ยนไปด้วย

2) ประกาศ function parameter - เราต้องเขียนโค้ดให้ฟังก์ชันทำงานตาม argument ที่รับเข้ามาเท่านั้น โดยไม่ต้องไปดูตัวแปรหรือ object ในระดับ global

ในแบบทดสอบที่แล้ว เราใช้หลักการนี้เพื่อบวก 1 ซึ่งอาจไม่หวือหวาเท่าไหร่ แต่เราก็เอาหลักการนี้ไปใช้กับ array หรือ object อื่นที่ซับซ้อนกว่านี้ได้

# --instructions--

จงแก้โค้ดเพื่อให้ค่าของ global array `bookList` คงที่เสมอ 
ฟังก์ชัน `add` จะใช้เพิ่ม `bookName` เข้าไปท้าย array ที่ส่งเข้ามาในฟังก์ชัน และคืนค่าออกมาเป็น array ตัวใหม่ 
ส่วนฟังก์ชัน `remove` ต้องลบ `bookName` ที่ระบุออกจาก array ที่ส่งเข้ามาฟังก์ชัน

**หมายเหตุ:** ทั้งสองฟังก์ชันต้องคืนค่าเป็น array และถ้าจะเพิ่ม parameter ใหม่ ต้องให้ parameter นั้นอยู่หน้า `bookName` เสมอ

# --hints--

`bookList` ต้องมีค่าเป็น `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]` เสมอ

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

`newBookList` ต้องมีค่าเป็น `["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

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

`newerBookList` ต้องมีค่าเป็น `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]`.

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

`newestBookList` ต้องมีค่าเป็น `["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]`.

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
// ตัวแปร global
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
