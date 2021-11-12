---
id: 587d7b7b367417b2b2512b16
title: Create complex multi-dimensional arrays
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

สุดยอด! คุณเพิ่งได้เรียนรู้เกี่ยวกับ array มากมายเลย! นี่เป็นภาพรวมในมุมกว้าง และยังมีเรื่องอีกมากมายให้เรียนรู้เกี่ยวกับการทำงานกับ array  ซึ่งคุณจะเห็นในส่วนต่อๆ ไป แต่ก่อนที่จะไปดูที่ <dfn>Objects</dfn> เรามาดูเพิ่มเติมว่า array จะซับซ้อนกว่าที่เราเคยเห็นในบทเรียนครั้งก่อนได้อย่างไร

ฟีเจอร์หนึ่งที่ทรงพลังที่สุด ในฐานะที่ array เป็นโครงสร้างข้อมูลหนึ่งคือ array สามารถมีหรือสร้างจาก array อื่นๆ ได้ เราได้เห็น array ซ้อน array ในแบบทดสอบก่อนหน้านี้ แต่ก็ยังค่อนข้างง่าย อย่างไรก็ตาม array สามารถซ้อน array ได้ลึกไม่จำกัด และแต่ละ sub-array ก็ยังซ้อน array ได้ลึกไม่จำกัดอีก ดังนี้แล้ว array จึงสามารถกลายเป็นโครงสร้างข้อมูลที่ซับซ้อนได้ เรียกว่า <dfn>multi-dimensional</dfn> หรือ nested array พิจารณาตัวอย่างต่อไปนี้

```js
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
```

array `deep` ถูกซ้อน 2 ชั้น arrays  `deeper` ซ้อน 3 ชั้น และ `deepest` 4 ชั้น และ `deepest-est?` 5 ชั้น

แม้ว่าตัวอย่างนี้อาจดูซับซ้อน แต่ความซับซ้อนระดับนี้ก็ไม่มีใครเคยใช้มาก่อน เรียกได้ว่าไม่ใช่เคสปกติ เมื่อจัดการกับข้อมูลขนาดใหญ่ อย่างไรก็ตาม เราสามารถเข้าถึงระดับที่ลึกที่สุดของ array ที่ซับซ้อนนี้ได้อย่างง่ายดายด้วย bracket notation

```js
console.log(nestedArray[2][1][0][0][0]);
```

ตัวอย่างด้านบน จะแสดง log เป็น string `deepest-est?` และตอนนี้เรารู้แล้วว่าข้อมูลส่วนนั้นอยู่ที่ไหน เราก็สามารถรีเซ็ตได้หากต้องการ

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

ตอนนี้แสดง log เป็น `deeper still`

# --instructions--

เราได้ประกาศตัวแปร `myNestedArray` ซึ่งกำหนดค่าให้เท่ากับ array จงปรับแก้ `myNestedArray` โดยใช้ทั้ง <dfn>strings</dfn>, <dfn>numbers</dfn> และ <dfn>booleans</dfn> เป็น data elements และกำหนดให้มีความลึกห้าระดับ ( จำไว้ว่า array ด้านนอกสุดคือระดับ 1) โดยในระดับที่สาม กำหนดให้มี string `deep` ส่วนในระดับที่สี่ กำหนดให้มี string `deeper`และในระดับที่ห้า กำหนดให้มี string `deepest`

# --hints--

`myNestedArray` ควรมี numbers, booleans, และ strings เท่านั้น เป็น data elements

```js
assert.strictEqual(
  (function (arr) {
    let flattened = (function flatten(arr) {
      const flat = [].concat(...arr);
      return flat.some(Array.isArray) ? flatten(flat) : flat;
    })(arr);
    for (let i = 0; i < flattened.length; i++) {
      if (
        typeof flattened[i] !== 'number' &&
        typeof flattened[i] !== 'string' &&
        typeof flattened[i] !== 'boolean'
      ) {
        return false;
      }
    }
    return true;
  })(myNestedArray),
  true
);
```

`myNestedArray` ควรมีความลึก 5 ระดับ

```js
assert.strictEqual(
  (function (arr) {
    let depth = 0;
    function arrayDepth(array, i, d) {
      if (Array.isArray(array[i])) {
        arrayDepth(array[i], 0, d + 1);
      } else {
        depth = d > depth ? d : depth;
      }
      if (i < array.length) {
        arrayDepth(array, i + 1, d);
      }
    }
    arrayDepth(arr, 0, 0);
    return depth;
  })(myNestedArray),
  4
);
```

`myNestedArray` ควรมีอย่างน้อยหนึ่ง string `deep` ใน  nested array ที่ความลึกชั้นที่ 3 

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deep').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deep')[0] === 2
);
```

`myNestedArray` ควรมีอย่างน้อยหนึ่ง string `deeper` ใน  nested array ที่ความลึกชั้นที่ 4


```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deeper').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deeper')[0] === 3
);
```

`myNestedArray` ควรมีอย่างน้อยหนึ่ง string `deepest` ใน  nested array ที่ความลึกชั้นที่ 5

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deepest').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deepest')[0] === 4
);
```

# --seed--

## --seed-contents--

```js
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
```

# --solutions--

```js
let myNestedArray = [
  ['unshift', ['deep', ['deeper', ['deepest']]],false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
```
