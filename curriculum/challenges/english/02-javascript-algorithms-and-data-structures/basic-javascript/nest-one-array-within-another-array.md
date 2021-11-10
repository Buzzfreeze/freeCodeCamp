---
id: cf1111c1c11feddfaeb7bdef
title: Nest one Array within Another Array
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

คุณสามารถซ้อน array ไว้ใน array อื่นๆ ได้อีก เช่น ตัวอย่างด้านล่าง:  


```js
[["Bulls", 23], ["White Sox", 45]]
```

นี่คือสิ่งที่เรียกว่า <dfn>multi-dimensional array</dfn>.

# --instructions--

จงสร้าง array ซ้อน array ชื่อ `myArray`

# --hints--

`myArray`  ควรมีอย่างน้อยหนึ่ง array ซ้อนอยู่ใน array อีกตัว 


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
// Only change code below this line
var myArray = [];
```

# --solutions--

```js
var myArray = [[1,2,3]];
```
