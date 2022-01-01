---
id: 587d7b88367417b2b2512b44
title: Write Arrow Functions with Parameters
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

คุณสามารถทำให้ arrow function รับ argument เหมือนฟังก์ชันปกติได้

```js
const doubler = (item) => item * 2;
doubler(4);
```

จากตัวอย่าง `doubler(4)` จะคืนค่ามาเป็น `8`

ถ้า arrow function มี parameter เดียว จะไม่ใส่วงเล็บรอบ parameter ก็ได้

```js
const doubler = item => item * 2;
```

เราจะส่ง argument มากกว่าหนึ่งตัวเข้าไปยัง arrow function ก็ได้

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

จากตัวอย่าง `multiplier(4, 2)` จะคืนค่ามาเป็น `8`

# --instructions--

จงเปลี่ยนให้ฟังก์ชัน `myConcat` ซึ่งจะนำ `arr2` มาต่อท้าย `arr1` ให้กลายเป็น arrow function

# --hints--

ต้องไม่ใช้ keyword `var`

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`myConcat` ต้องเป็นตัวแปรคงที่ (ประกาศโดยใช้ `const` )

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+myConcat/g));
```

`myConcat` ต้องเป็น arrow function ที่รับ parameter สองตัว

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

การเรียกใช้ฟังก์ชัน `myConcat()` ต้องคืนค่าออกมาเป็น `[1, 2, 3, 4, 5]`

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

ต้องไม่ใช้ keyword `function` 

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
