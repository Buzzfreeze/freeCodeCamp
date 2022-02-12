---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
challengeType: 1
forumTopicId: 301632
dashedName: create-a-set-class
---

# --description--

ในแบบฝึกหัดนี้ เราจะสร้างคลาสที่ชื่อว่า `Set` เพื่อจำลองโครงสร้างข้อมูลที่เรียกว่า "set" 
Set เป็นเหมือน array แต่ไม่สามารถมีค่าที่ซ้ำกันได้ การใช้งานทั่วไปสำหรับ set คือการตรวจสอบว่ามีรายการนั้นอยู่หรือไม่ ลองดูวิธีการทำงานของ object `Set` ของ ES6 ในตัวอย่าง:

```js
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false
```

ขั้นแรก เราจะสร้าง method add ที่จะเพิ่มข้อมูลลงในคอลเลกชัน set ของเรา ถ้าใน set ยังไม่มีข้อมูลนี้ 
จากนั้นเราจะสร้าง method remove ที่ลบข้อมูลออกจากคอลเลกชัน set และสุดท้าย เราจะสร้าง method size ที่คืนค่าเป็นจำนวน element ภายในคอลเลกชัน set

# --instructions--

สร้าง method `add` ที่ใช้เพิ่มข้อมูลที่ยังไม่มีลงในคอลเล็กชัน set และคืนค่าเป็น `true` หากเพิ่มข้อมูลสำเร็จและ `false` หากไม่สำเร็จ

สร้าง method `remove` ที่รับข้อมูล และตรวจสอบว่ามีข้อมูลอยู่ใน set หรือไม่ ถ้ามี ต้องลบข้อมูลนี้ออกจากคอลเล็กชัน และคืนค่าเป็น `true` แต่ถ้าไม่มีต้องคืนค่าเป็น `false` 

สร้าง method `size` ที่คืนค่าเป็นขนาดของคอลเล็กชัน set

# --hints--

class `Set` ของคุณควรมี method `add`

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.add === 'function';
  })()
);
```

method `add` ของคุณไม่ควรเพิ่มค่าที่มีอยู่แล้วเข้าไป

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

method `add` ของคุณต้องคืนค่าเป็น `true` เมื่อค่าถูกเพิ่มเข้าไปได้สำเร็จ

```js
assert(
  (function () {
    var test = new Set();
    var result = test.add('a');
    return result != undefined && result === true;
  })()
);
```

method `add` ต้องคืนค่าเป็น `false` เมื่อมีการเพิ่มค่าที่ซ้ำกัน

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

class `Set` ของคุณควรมี method `remove`

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.remove === 'function';
  })()
);
```

method `remove` ของคุณควรจะลบแค่ค่าที่มีอยู่ใน set อยู่แล้วเท่านั้น

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

method `remove` ของคุณควรลบรายการที่กำหนดออกจาก set

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

class `Set` ของคุณควรมี method `size`

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.size === 'function';
  })()
);
```

method `size` ต้องคืนค่าเป็นจำนวนของ element ในคอลเลกชันนั้น

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

  // method นี้จะอ่านว่ามีค่าอยู่ใน set แล้วหรือไม่ และคืนค่าเป็น true หรือ false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // method นี้จะคืนค่าเป็นค่าทั้งหมดที่อยู่ใน set
  values() {
    return Object.values(this.dictionary);
  }

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
