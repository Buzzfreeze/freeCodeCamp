---
id: 587d8255367417b2b2512c72
title: Use .has and .size on an ES6 Set
challengeType: 1
forumTopicId: 301717
dashedName: use--has-and--size-on-an-es6-set
---

# --description--

เรามาลองดู method .has และ .size ใน object Set ของ ES6 กัน

เริ่มด้วยการสร้าง ES6 Set

```js
var set = new Set([1,2,3]);
```

method `.has` จะตรวจสอบว่ามีค่าที่ระบุใน set หรือไม่

```js
var hasTwo = set.has(2);
```

method `.size` จะคืนค่าเป็นจำนวนข้อมูลใน set เป็นจำวนเต็ม

```js
var howBig = set.size;
```

# --instructions--

ในแบบฝึกหัดนี้ เราจะส่ง array (`arrToBeSet`) และค่า (`checkValue`) ไปยังฟังก์ชัน checkSet() ฟังก์ชันของคุณควรสร้าง Set ของ ES6 จาก argument ที่เป็น array และหาว่า set มีค่าของ `checkValue` หรือไม่ จากนั้นให้หาขนาดของ set และคืนค่าทั้งสองออกมาเป็น array

# --hints--

`checkSet([4, 5, 6], 3)` ต้องคืนค่าเป็น [ false, 3 ]

```js
assert(
  (function () {
    var test = checkSet([4, 5, 6], 3);
    return DeepEqual(test, [false, 3]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(arrToBeSet, checkValue){

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

}
```

# --solutions--

```js
function checkSet(arrToBeSet, checkValue){
var set = new Set(arrToBeSet);
var result = [
set.has(checkValue),
set.size
];
return result;
}
```
