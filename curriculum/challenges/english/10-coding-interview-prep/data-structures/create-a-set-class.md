---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
challengeType: 1
forumTopicId: 301632
dashedName: create-a-set-class
---

# --description--

ในแบบฝึกหัดนี้ เราจะสร้างคลาสที่ชื่อว่า `Set` เพื่อจำลอง abstract data structure ที่เรียกว่า "set" Set เป็นเหมือน array แต่ไม่สามารถมีค่าที่ซ้ำกันได้ การใช้งานทั่วไปสำหรับชุดคือการตรวจสอบว่ามีรายการนั้นอยู่หรือไม่ เราสามารถดูว่า `Set` object ของ ES6 ทำงานอย่างไรในตัวอย่างด้านล่าง:

```js
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false
```

ขั้นแรก เราจะสร้าง add method ที่เพิ่มค่าให้กับคอลเลกชัน set ของเรา ตราบใดที่ยังไม่มีค่านั้นอยู่ใน set นี้อยู่แล้ว จากนั้นเราจะสร้าง remove method ที่ลบค่าออกจากคอลเลกชัน set หากมีอยู่แล้ว และสุดท้าย เราจะสร้าง size method ที่ return จำนวน element ภายในคอลเลกชัน set

# --instructions--

สร้าง `add` method ที่เพิ่มค่าที่ไม่ซ้ำกันให้กับคอลเล็กชัน set และ return `true` หากเพิ่มค่าสำเร็จและ `false` หากไม่เป็นเช่นนั้น

สร้าง `remove` method ที่ยอมรับค่าและตรวจสอบว่ามีอยู่ใน set หรือไม่ หากเป็นเช่นนั้น method นี้ควรลบออกจากคอลเล็กชัน set และ return เป็น `true` มิฉะนั้นควร return ค่าเป็น `false` สร้าง `size` method ที่ส่งคืนขนาดของคอลเล็กชัน set

# --hints--

`Set` class ของคุณควรมี `add` method

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.add === 'function';
  })()
);
```

`add` method ของคุณไม่ควรเพิ่มค่าที่มีอยู่แล้วเข้าไป

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.add('a');
    var vals = test.values();
    return vals[0] === 'a' && vals[1] === 'b' && vals.length === 2;
  })()
);
```

`add` method ของคุณควร return `true` เมื่อค่าถูกเพิ่มเข้าไปได้สำเร็จ

```js
assert(
  (function () {
    var test = new Set();
    var result = test.add('a');
    return result != undefined && result === true;
  })()
);
```

`add` method ควร return `false` เมื่อมีการเพิ่มค่าที่ซ้ำกัน

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    var result = test.add('a');
    return result != undefined && result === false;
  })()
);
```

`Set` class ของคุณควรมี `remove` method

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.remove === 'function';
  })()
);
```

`remove` method ของคุณควรจะลบแค่ค่าที่มีอยู่ set อยู่แล้วเท่านั้น

```js
assert.deepEqual(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('c');
    return test.values();
  })(),
  ['a', 'b']
);
```

`remove` method ของคุณควรลบรายการที่กำหนดออกจาก set

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    var vals = test.values();
    return vals[0] === 'b' && vals.length === 1;
  })()
);
```

`Set` class ของคุณควรมี `size` method

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.size === 'function';
  })()
);
```

`size` method ควร return จำนวนของ element ในคอลเลกชันนั้น

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    return test.size() === 1;
  })()
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  
  // Only change code above this line
}
```

# --solutions--

```js
class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
}
```
