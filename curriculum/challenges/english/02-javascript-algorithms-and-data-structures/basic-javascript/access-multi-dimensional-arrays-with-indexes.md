---
id: 56592a60ddddeae28f7aa8e1
title: Access Multi-Dimensional Arrays With Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

คุณอาจนึกถึง <dfn>multi-dimensional</dfn> array ว่าเป็น *อาร์เรย์ซ้อนอาร์เรย์* ก็ได้ เมื่อคุณใช้ brackets (วงเล็บ) เพื่อเข้าถึง array ของคุณ ิbrackets ชุดแรกจะอ้างอิงถึงรายการใน array ที่อยู่นอกสุด (ระดับแรก) และ brackets คู่ถัดมาจะอ้างอิงถึงรายการ array ในระดับถัดไป

**Example**

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

`arr[3]` คือ `[[10, 11, 12], 13, 14]`, `arr[3][0]` คือ `[10, 11, 12]` และ `arr[3][0][1]` คือ `11`.

**หมายเหตุ:** ไม่ควรมีช่องว่างระหว่างชื่อ array และ square brackets เช่น `array [0][0]` และแม้แต่ `array [0] [0]` แบบนี้ก็ไม่อนุญาต แม้ว่า JavaScript สามารถประมวลผลได้อย่างถูกต้อง แต่อาจทำให้โปรแกรมเมอร์คนอื่นอ่านโค้ดของคุณแล้วสับสน

# --instructions--

จงใช้ bracket notation ในการเลือก element จาก `myArray` เพื่อให้ `myData` มีค่าเท่ากับ `8`

# --hints--

`myData` ควรเท่ากับ `8`

```js
assert(myData === 8);
```

คุณควรใช้ bracket notation ในการอ่านค่าที่ถูกต้องจาก `myArray`

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
