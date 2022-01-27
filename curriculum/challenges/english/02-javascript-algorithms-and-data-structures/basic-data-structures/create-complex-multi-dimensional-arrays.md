---
id: 587d7b7b367417b2b2512b16
title: Create complex multi-dimensional arrays
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

คุณได้เรียนเรื่อง array ไปเยอะมากเลย! เยี่ยมไปเลยใช่มั้ย! 

ที่เรียนไปนี้เป็นแค่ภาพรวมกว้างๆ แต่ก็ยังมีเรื่องที่เกี่ยวกับ array ที่ต้องเรียนรู้อีกมาก ซึ่งคุณจะเรียนในส่วนต่อๆ ไป แต่ก่อนที่จะไปเรียนเรื่อง <dfn>Object</dfn> เรามาดูกันต่อว่า array ที่ซับซ้อนกว่าที่เราเคยเรียนมาจะมีหน้าตาแบบไหน

สิ่งที่ทำให้ array เป็นโครงสร้างข้อมูลที่มีพลังมากๆอีกอย่างหนึ่งคือการที่ array สามารถมี array ซ้อนกันได้ เราได้เห็น array ซ้อน array ในตัวอย่างที่เราเรียนมาแล้ว แต่เท่าที่ผ่านมาเราเห็นแค่การซ้อนแบบง่ายๆเท่านั้น แต่จริงๆแล้ว array จะมี array ซ้อนอยู่ข้างในลึกลงไปกี่ชั้นก็ได้ แลh;แต่ละ array ย่อยก็ยังซ้อน array ได้ลึกไม่จำกัดอีกด้วย ดังนั้น array จะกลายเป็นโครงสร้างข้อมูลที่ซับซ้อนได้ ที่เราเรียกว่า array <dfn>หลายมิติ</dfn> หรือ nested array
ลองดูตัวอย่าง

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

array `deep` อยู่ลึกลงไป 2 ชั้น ส่วน  `deeper` อยู่ลึกลงไป 3 ชั้น และ `deepest` อยู่ลึกลงไป 4 ชั้น สุดท้าย `deepest-est?` อยู่ลึกลงไป 5 ชั้น

ถึงตัวอย่างนี้อาจดูซับซ้อน แต่ความซับซ้อนระดับนี้ก็ไม่ได้ถือว่าผิดปกติ ถ้าเราต้องจัดการกับข้อมูลขนาดใหญ่ 

เราสามารถเข้าถึงชั้นที่ลึกที่สุดของ array ที่ซับซ้อนนี้ได้ง่ายๆด้วย bracket notation

```js
console.log(nestedArray[2][1][0][0][0]);
```

ตัวอย่างด้านบน จะแสดง string `deepest-est?` บน console พอตอนนี้เรารู้แล้วว่าข้อมูลส่วนนั้นอยู่ที่ไหน เราก็สามารถเปลี่ยนค่าได้ถ้าต้องการ

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

ตอนนี้บน console จะแสดง `deeper still` แทน

# --instructions--

เราได้ประกาศตัวแปร `myNestedArray` ซึ่งเป็น array ไว้แล้ว

ให้แก้ `myNestedArray` ตามเงื่อนไขนี้

1. ใน array ต้องใช้แค่ข้อมูลประเภท <dfn>string</dfn>, <dfn>number</dfn> และ <dfn>boolean</dfn>  เท่านั้น
2. ทำให้ array นี้ลึก 5 ชั้น (array ด้านนอกสุดคือชั้น 1) 
3. ในชั้นที่สามต้องมี string `deep` 
4. ในชั้นที่สี่ต้องมี string `deeper` 
5. ในชั้นที่ห้าต้องมี string `deepest`

# --hints--

`myNestedArray` ต้องใช้แค่ข้อมูลประเภท number, boolean, และ string เท่านั้น

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

`myNestedArray` ต้องมีความลึก 5 ชั้น

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

ใน `myNestedArray` ชั้นที่ 3 ต้องมี string `deep` อย่างน้อย 1 คำ

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

ใน `myNestedArray` ชั้นที่ 4 ต้องมี string `deeper` อย่างน้อย 1 คำ


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

ใน `myNestedArray` ชั้นที่ 5 ต้องมี string `deepest` อย่างน้อย 1 คำ

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
