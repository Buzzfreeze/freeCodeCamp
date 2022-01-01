---
id: 56592a60ddddeae28f7aa8e1
title: Access Multi-Dimensional Arrays With Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

ให้มองว่า <dfn>multi-dimensional</dfn> array นั้นเป็น *array ซ้อน array* เมื่อคุณใช้ bracket (`[]`) เพื่อเข้าถึง array ของคุณ ิbracket คู่แรกจะดึงข้อมูลของ array ชั้นนอกสุด (ชั้นแรก) และ bracket คู่ถัดมาจะดึง array ในชั้นถัดไป 

**ตัวอย่าง**

```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];
```

`arr[3]` มีค่าเป็น `[[10, 11, 12], 13, 14]`
`arr[3][0]` มีค่าเป็น `[10, 11, 12]` 
และ
`arr[3][0][1]` มีค่าเป็น `11`

**หมายเหตุ:** ไม่ควรมีช่องว่างระหว่างชื่อ array และ square bracket เช่น `array [0][0]` หรือ `array [0] [0]` แบบนี้ก็ไม่ให้ทำ ถึง JavaScript จะเข้าใจว่าคุณต้องการจะทำอะไร แต่ก็อาจทำให้โปรแกรมเมอร์คนอื่นที่มาอ่านโค้ดของคุณสับสนได้

# --instructions--

จงใช้ bracket notation ในการเลือก element จากตัวแปร `myArray` เพื่อให้ตัวแปร `myData` มีค่าเท่ากับ `8`

# --hints--

ตัวแปร `myData` ต้องเท่ากับ `8`

```js
assert(myData === 8);
```

คุณต้องใช้ bracket notation เพื่อดึงค่าจาก `myArray` และต้องดึงค่าให้ถูกตำแหน่งด้วย

```js
assert(/myData=myArray\[2\]\[1\]/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

## --seed-contents--

```js
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[0][0];
```

# --solutions--

```js
var myArray = [[1,2,3],[4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
```
