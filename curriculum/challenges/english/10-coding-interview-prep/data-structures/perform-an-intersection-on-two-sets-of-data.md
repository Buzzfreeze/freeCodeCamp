---
id: 587d8253367417b2b2512c6d
title: Perform an Intersection on Two Sets of Data
challengeType: 1
forumTopicId: 301709
dashedName: perform-an-intersection-on-two-sets-of-data
---

# --description--

ในแบบฝึกหัดนี้ เราจะทำการ intersect ข้อมูล 2 set เราจะสร้าง method ในโครงสร้างข้อมูล `Set` ที่เรียกว่า `Intersection` โดยที่ intersection ของ set แสดงถึงค่าทั้งหมดที่มีในทุก set โดย method รับ `Set` เป็น argument และคืนค่าเป็น `intersection` ของทั้งสอง set นั้น

ยกตัวอย่างเช่น หากมี `setA = ['a','b','c']` และ `setB = ['a','b','d','e']` แล้ว intersection ของ setA และ setB คือ `setA.intersection(setB) = ['a', 'b']`

# --hints--

class `Set` ของคุณควรมี method `intersection`

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.intersection === 'function';
  })()
);
```

collection ที่คืนค่าออกมาต้องถูกต้อง

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
    var intersectionSetAB = setA.intersection(setB);
    return (
      intersectionSetAB.size() === 1 && intersectionSetAB.values()[0] === 'c'
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
    return Object.keys(this.dictionary);
  }
  // method นี้จะใช้เพิ่ม element ลงไปใน set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
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
  // method นี้ใช้ union 
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
    return Object.keys(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
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

  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
}
```
