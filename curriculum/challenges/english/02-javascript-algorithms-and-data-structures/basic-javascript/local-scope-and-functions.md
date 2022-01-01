---
id: 56533eb9ac21ba0edf2244bf
title: Local Scope and Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

ตัวแปรที่ถูกประกาศภายในฟังก์ชัน (รวมถึง function parameters ) จะมีขอบเขตในระดับ <dfn>local</dfn> หมายความว่าจะมองเห็นตัวแปรนั้นๆ ได้เฉพาะในฟังก์ชันนั้นเท่านั้น

ตัวอย่างฟังก์ชันชื่อ `myTest` ที่มีตัวแปรในระดับ local ชื่อ `loc`

```js
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest();
console.log(loc);
```

การเรียกใช้ฟังก์ชัน `myTest()` จะแสดง string คำว่า `foo` ออกมาที่บนหน้า console แต่บรรทัด `console.log(loc)` จะเกิด error ขึ้น เนื่องจากตัวแปร `loc` ไม่ได้ถูกประกาศข้างไว้นอกฟังก์ชัน

# --instructions--

ลองดูในส่วนของ editor ด้านขวามือ จะมีการเรียกใช้ `console.log` สองที่ เพื่อทำให้เห็นว่าเกิดอะไรขึ้น 
ขณะที่แก้โค้ดให้ดูที่ console ไปด้วย จะได้เห็นว่ามีการเปลี่ยนแปลงไปอย่างไร และให้ประกาศตัวแปร `myVar` ในระดับ local ในฟังก์ชัน `myLocalScope` และกด Run เพื่อดูผลลัพธ์

**หมายเหตุ:** หน้า console จะยังคงแสดง `ReferenceError: myVar is not defined` แต่คุณก็จะไปต่อยังบทเรียนถัดไปได้

# --hints--

โค้ดของคุณต้องไม่มีตัวแปร `myVar` ในระดับ global

```js
function declared() {
  myVar;
}
assert.throws(declared, ReferenceError);
```

ต้องเพิ่มตัวแปร `myVar` ในระดับ local

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

  // แก้โค้ดใต้บรรทัดนี้เท่านั้น

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// กด Run และดูที่ console
// ไม่ประกาศตัวแปร myVar นอกฟังก์ชัน myLocalScope
console.log('outside myLocalScope', myVar);
```

# --solutions--

```js
function myLocalScope() {

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  var myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
