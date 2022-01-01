---
id: 598f48a36c8c40764b4e52b3
title: Prevent Object Mutation
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

จากบทเรียนที่แล้ว เราได้รู้แล้วว่าการประกาศ `const` ไม่ได้ป้องกันการเปลี่ยนค่าของตัวแปรของเรา
JavaScript จึงมีฟังก์ชัน `Object.freeze` เพื่อป้องกันการเปลี่ยนแปลงข้อมูล

การใช้ `Object.freeze` จะทำให้เราไม่สามารถเปลี่ยนแปลง object ได้ และถ้า JavaScript ของเราทำงานโดยเปิด strict mode จะเกิด error ขึ้นด้วย


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

editor ของเราเปิด strict mode อยู่ ทำให้การกำหนดค่าให้กับ `obj.review` และ `obj.newProp` จะเกิด error ขึ้น และหน้า console จะแสดงค่า `{ name: "FreeCodeCamp", review: "Awesome" }` ทำให้เห็นได้ว่าค่าของ `obj` ไม่ได้ถูกเปลี่ยนแปลงไป

# --instructions--

ในบทเรียนนี้คุณจะได้ใช้ `Object.freeze` เพื่อป้องกันไม่ให้ข้อมูลใน `MATH_CONSTANTS` เปลี่ยนแปลง คุณต้อง `freeze` object `MATH_CONSTANTS` ไว้ เพื่อไม่ให้ใครมาเปลี่ยนค่าของ `PI` หรือเพิ่มและลบ property ได้

# --hints--

ต้องประกาศตัวแปรด้วย `const`

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

ต้องให้ `MATH_CONSTANTS` เป็นค่าคงที่ (ประกาศโดยใช้ `const`)

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

คุณไม่ควรแก้ไขการประกาศตัวแปร `MATH_CONSTANTS`

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
