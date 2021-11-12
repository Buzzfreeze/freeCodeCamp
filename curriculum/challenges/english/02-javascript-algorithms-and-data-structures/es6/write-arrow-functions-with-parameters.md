---
id: 587d7b88367417b2b2512b44
title: Write Arrow Functions with Parameters
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

เช่นเดียวกับฟังก์ชันปกติ คุณสามารถส่งผ่าน arguments ไปยัง arrow function ได้

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` จะคืนค่า `8`

ถ้า arrow function มี parameter เดียว วงเล็บรอบ parameter อาจไม่ต้องมีก็ได้

```js
const doubler = item => item * 2;
```

เป็นไปได้ที่จะส่งผ่าน argument มากกว่าหนึ่งค่าเข้าไปยัง arrow function

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` จะคืนค่า `8`

# --instructions--

จงปรับแก้ฟังก์ชัน `myConcat` ซึ่งนำ `arr2` มาต่อท้าย `arr1` โดยใช้ arrow function

# --hints--

คุณควรแทนที่ keyword `var`

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`myConcat` ควรเป็นตัวแปรคงที่ (โดยใช้ `const` )

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+myConcat/g));
```

`myConcat` ควรเป็น arrow function ที่มีสอง parameter

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` ควรได้ผลลัพธ์ `[1, 2, 3, 4, 5]`

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

ไม่ควรใช้ keyword `function` 

```js
(getUserInput) => assert(!getUserInput('index').match(/function/g));
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
