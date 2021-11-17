---
id: 587d8255367417b2b2512c72
title: Use .has and .size on an ES6 Set
challengeType: 1
forumTopicId: 301717
dashedName: use--has-and--size-on-an-es6-set
---

# --description--

เรามาลองดู .has และ .size method ที่มีให้บน ES6 Set object กัน

เริ่มด้วยการสร้าง ES6 Set

```js
var set = new Set([1,2,3]);
```

.has method จะตรวจสอบว่ามีค่าใดบรรจุอยู่ใน set หรือไม่

```js
var hasTwo = set.has(2);
```

.size method จะ return จำนวนเต็มที่แสดงถึงขนาดของ set

```js
var howBig = set.size;
```

# --instructions--

ในแบบฝึกหัดนี้ เราจะส่ง array และค่าไปยังฟังก์ชัน checkSet() ฟังก์ชันของคุณควรสร้าง ES6 set จาก array argument ค้นหาว่า set มี argument ค่าหรือไม่ หาขนาดของ set และ return ค่าทั้งสองค่าใน array

# --hints--

`checkSet([4, 5, 6], 3)` ควร return [ false, 3 ]

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

   // Only change code below this line

   // Only change code above this line

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
