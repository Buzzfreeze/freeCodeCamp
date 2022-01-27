---
id: 567af2437cbaa8c51670a16c
title: Testing Objects for Properties
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

ถ้าเราต้องการรู้ว่า object นี้มี property หรือไม่ เราจะใช้ method `.hasOwnProperty(propname)` ของ object เพื่อตรวจสอบได้ โดย `.hasOwnProperty()` จะคืนค่า `true` เมื่อ object มี property และคืนค่า `false` หากไม่มี property

**ตัวอย่าง**

```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

ในตัวอย่างด้านบน การเรียกใช้คำสั่ง `hasOwnProperty` ครั้งแรกจะได้ค่าเป็น `true` แต่การเรียกใช้คำสั่งที่สองจะได้ค่าเป็น `false`

# --instructions--

จงแก้ไขฟังก์ชัน `checkObj` ทำงานโดยการตรวจสอบว่า object ส่งเข้ามา (`obj`) มี property (`checkProp`) หรือไม่ ถ้ามี property ให้คืนค่าเป็นค่าของ property นั้น แต่ถ้าไม่พบ ให้คืนค่าเป็น string `"Not Found"`

# --hints--

การเรียกใช้ฟังก์ชัน `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` ต้องคืนค่าออกมาเป็น string `pony`

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

การเรียกใช้ฟังก์ชัน `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` ต้องคืนค่าออกมาเป็น string `kitten`

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

การเรียกใช้ฟังก์ชัน `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` ต้องคืนค่าออกมาเป็น string `Not Found`

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

การเรียกใช้ฟังก์ชัน `checkObj({city: "Seattle"}, "city")` ต้องคืนค่าออกมาเป็น string `Seattle`

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

การเรียกใช้ฟังก์ชัน `checkObj({city: "Seattle"}, "district")` ต้องคืนค่าออกมาเป็น string `Not Found`

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

การเรียกใช้ฟังก์ชัน `checkObj({pet: "kitten", bed: "sleigh"}, "gift")` ต้องคืนค่าออกมาเป็น string `Not Found`

```js
assert(checkObj({ pet: 'kitten', bed: 'sleigh' }, 'gift') === 'Not Found');
```

# --seed--

## --seed-contents--

```js
function checkObj(obj, checkProp) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return "Change Me!";
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
```
