---
id: 56533eb9ac21ba0edf2244bf
title: Local Scope and Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

ตัวแปรที่ถูกประกาศภายในฟังก์ชัน เช่นเดียวกับ function parameters มีขอบเขต <dfn>local</dfn> นั่นหมายความว่าจะมองเห็นได้เฉพาะในฟังก์ชันนั้นเท่านั้น

นี่คือฟังก์ชัน `myTest` ที่มีตัวแปร local ชื่อ `loc`

```js
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest();
console.log(loc);
```

การเรียกฟังก์ชัน `myTest()` ทำให้ string `foo` แสดงออกมาที่ในหน้า console แต่บรรทัด `console.log(loc)` จะแสดง error เนื่องจาก `loc` ไม่ได้ถูกประกาศข้างนอกฟังก์ชัน

# --instructions--

editor มี `console.log` สองหน้าจอ เพื่อช่วยให้คุณเห็นว่าเกิดอะไรขึ้น จงเช็คที่หน้า console ขณะที่คุณเขียนโค้ด เพื่อดูว่ามีการเปลี่ยนแปลงอย่างไร ให้ประกาศ local variable `myVar` ภายใน `myLocalScope` และรันเพื่อทดสอบ

**หมายเหตุ:** หน้า console จะยังคงแสดง `ReferenceError: myVar is not defined` แต่นี่ไม่ได้ทำให้การทดสอบล้มเหลว

# --hints--

โค้ดไม่ควรมี global variable `myVar`

```js
function declared() {
  myVar;
}
assert.throws(declared, ReferenceError);
```

คุณควรเพิ่ม local variable `myVar`

```js
assert(
  /functionmyLocalScope\(\)\{.*(var|let|const)myVar[\s\S]*}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

# --seed--

## --seed-contents--

```js
function myLocalScope() {

  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

# --solutions--

```js
function myLocalScope() {

  // Only change code below this line
  var myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
