---
id: 587d8254367417b2b2512c6e
title: Perform a Difference on Two Sets of Data
challengeType: 1
forumTopicId: 301706
dashedName: perform-a-difference-on-two-sets-of-data
---

# --description--

ในแบบฝึกหัดนี้ เราจะหาความต่างของ set 2 ตัว โดยเราจะสร้าง method ในโครงสร้างข้อมูล `Set` ที่เรียกว่า `difference` การหาความแตกต่างของ set ต้องเปรียบเทียบค่าของสอง set นั้น และคืนค่าเป็นรายการที่มีอยู่ใน set แรกแต่ไม่อยู่ใน set ที่สอง method นี้ต้องรับ `set` เป็น argument และ คืนค่าเป็น `difference` ของทั้งสองช set

ตัวอย่างเช่น ถ้าหากกำหนดให้มี `setA = ['a','b','c']` และ `setB = ['a','b','d','e']` แล้ว ความแตกต่างของ setA และ setB คือ `setA.difference(setB) = ['c']`

# --hints--

class `Set` ของคุณควรมี method `difference`

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.difference === 'function';
  })()
);
```

method `difference` ของคุณควรคืนค่าเป็ฯ collection ที่ถูกต้อง

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
    var differenceSetAB = setA.difference(setB);
    return (
      differenceSetAB.size() === 2 &&
      DeepEqual(differenceSetAB.values(), ['a', 'b'])
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
  // method นี้ใช้ intersection 
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

  difference(set) {
    const newSet = new Set();

    this.values().forEach(value => {
      if (!set.dictionary[value]) {
        newSet.add(value);
      }
    })

    return newSet;
  }
}
```
