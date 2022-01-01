---
id: cf1111c1c11feddfaeb7bdef
title: Nest one Array within Another Array
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

คุณสามารถซ้อน array ไว้ใน array ด้วย 
เช่น:  


```js
[["Bulls", 23], ["White Sox", 45]]
```

รูปแบบนี้เรียกว่า <dfn>multi-dimensional array</dfn> (อาเรย์หลายมิติ)

# --instructions--

จงสร้างตัวแปร array ซ้อน array ที่มีชื่อว่า `myArray`

# --hints--

ตัวแปร `myArray` ต้องเป็น array ที่มี array ซ้อนอยู่ข้างใน 


```js
assert(Array.isArray(myArray) && myArray.some(Array.isArray));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
var myArray = [];
```

# --solutions--

```js
var myArray = [[1,2,3]];
```
