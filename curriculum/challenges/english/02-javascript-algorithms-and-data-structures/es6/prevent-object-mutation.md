---
id: 598f48a36c8c40764b4e52b3
title: Prevent Object Mutation
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

ตามที่เห็นในบทเรียนก่อนหน้า การประกาศ `const` เพียงอย่างเดียวไม่ได้ปกป้องข้อมูลของคุณจากการเปลี่ยนแปลงได้ เพื่อให้แน่ใจว่าข้อมูลของคุณจะไม่เปลี่ยนแปลง JavaScript จึงมีฟังก์ชัน `Object.freeze` เพื่อป้องกันการเปลี่ยนแปลงข้อมูล

การเปลี่ยนแปลง object จะถูกปฏิเสธทั้งหมด โดยขึ้น error เมื่อ script ถูกรันใน strict mode


```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

การกำหนดค่าให้กับ `obj.review` และ `obj.newProp` จะเกิด error เพราะ editor ของเรารันด้วย strict mode เป็นค่าเริ่มต้น (by default) และ console จะแสดงค่า `{ name: "FreeCodeCamp", review: "Awesome" }` 

# --instructions--

ในบทเรียนนี้คุณจะได้ใช้ `Object.freeze` เพื่อป้องกันการเปลี่ยนแปลงตัวเลขคงที่ คุณต้องคงค่า `MATH_CONSTANTS` object ไว้ เพื่อไม่ให้ใครเปลี่ยนแปลงค่าของ `PI`, เพิ่ม หรือลบ property

# --hints--

คุณไม่ควรแทนที่ keyword `const`

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` ควรเป็นตัวแปรคงที่ (โดยใช้ `const`)

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

คุณไม่ควรแก้ไขการประกาศ `MATH_CONSTANTS` เดิม

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

`PI` ควรมีค่าเป็น `3.14`

```js
assert(PI === 3.14);
```

# --seed--

## --seed-contents--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

# --solutions--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```
