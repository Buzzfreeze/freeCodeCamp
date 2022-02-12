---
id: 587d8253367417b2b2512c6c
title: Perform a Union on Two Sets
challengeType: 1
forumTopicId: 301708
dashedName: perform-a-union-on-two-sets
---

# --description--

ในแบบฝึกหัดนี้ เราจะทำการ union ข้อมูลสอง set เข้าด้วยกัน เราจะสร้าง method ในโครงสร้างข้อมูล `Set` ที่เรียกว่า `union` โดยที่ method นี้ควรใช้ `Set` อื่นเป็น argument และ8noค่าเป็นผลของการ `union` ของทั้งสอง set โดยลบค่าที่ซ้ำกันออก

ยกตัวอย่างเช่น ถ้าหากมี `setA = ['a','b','c']` และ `setB = ['a','b','d','e']` แล้ว union ของ setA และ setB คือ `setA.union(setB) = ['a', 'b', 'c', 'd', 'e']`

# --hints--

class `Set` ของคุณควรมี method `union`

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.union === 'function';
  })()
);
```

Union ของ Set ที่มีค่าเป็น ["a", "b", "c"] และ Set ที่มีค่าเป็น ["c", "d"] ต้องผลลัพธ์เป็น Set ที่มีค่าเป็น ["a", "b", "c", "d"]

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setA.add('b');
    setA.add('c');
    setB.add('c');
    setB.add('d');
    var unionSetAB = setA.union(setB);
    var final = unionSetAB.values();
    return (
      final.indexOf('a') !== -1 &&
      final.indexOf('b') !== -1 &&
      final.indexOf('c') !== -1 &&
      final.indexOf('d') !== -1 &&
      final.length === 4
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // This will hold the set
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
  // method นี้จะใช้เพิ่ม element ลงไปใน set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }
  // method นี้จะใช้ลบ element ออกจาก set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // method นี้จะคืนค่าเป็นจำนวนข้อมูลใน set
  size() {
    return this.length;
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

  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
}
```
