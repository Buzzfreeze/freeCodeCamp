---
id: 567af2437cbaa8c51670a16c
title: Testing Objects for Properties
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

บางครั้งเราอาจต้องการตรวจสอบว่า property มีอยู่ใน object หรือไม่ ซึ่งการตรวจสอบดังกล่าวสามารถใช้ method `.hasOwnProperty(propname)` ของ object ได้ โดย `.hasOwnProperty()` จะคืนค่า `true` เมื่อ object มี property และคืนค่า `false` หากไม่มี property

**Example**

```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

`hasOwnProperty` คำสั่งแรกคืนค่า `true` ขณะที่คำสั่งที่สองคืนค่า `false`

# --instructions--

จงแก้ไขฟังก์ชัน `checkObj` เพื่อตรวจสอบว่า object ส่งผ่านไปยังฟังก์ชัน (`obj`) มี property (`checkProp`) หรือไม่ หากพบ property ให้คืนค่าเป็น value ของ property นั้น แต่ถ้าไม่พบ ให้คืนค่า `"Not Found"`

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` ควรคืนค่า string `pony`

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` ควรคืนค่า string `kitten`

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` ควรคืนค่า string `Not Found`

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` ควรคืนค่า string `Seattle`

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` ควรคืนค่า string `Not Found`

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` ควรคืนค่า string `Not Found`

```js
assert(checkObj({ pet: 'kitten', bed: 'sleigh' }, 'gift') === 'Not Found');
```

# --seed--

## --seed-contents--

```js
function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
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
