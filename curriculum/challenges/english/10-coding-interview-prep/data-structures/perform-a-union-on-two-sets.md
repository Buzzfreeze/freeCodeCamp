---
id: 587d8253367417b2b2512c6c
title: Perform a Union on Two Sets
challengeType: 1
forumTopicId: 301708
dashedName: perform-a-union-on-two-sets
---

# --description--

ในแบบฝึกหัดนี้ เราจะทำการ union ข้อมูลสอง set เข้าด้วยกัน เราจะสร้าง method ในโครงสร้างข้อมูล `Set` ที่เรียกว่า `union` โดยที่ method นี้ควรใช้ `Set` อื่นเป็น argument และ return `union` ของทั้งสอง set  ยกเว้นค่าที่ซ้ำกัน

ยกตัวอย่างเช่น ถ้าหากมี `setA = ['a','b','c']` และ `setB = ['a','b','d','e']` แล้ว union ของ setA และ setB คือ `setA.union(setB) = ['a', 'b', 'c', 'd', 'e']`

# --hints--

`Set` คลาสของคุณควรมี `union` method

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.union === 'function';
  })()
);
```

Union ของ Set ควรประกอบด้วยค่า ["a", "b", "c"] และ Set ที่ประกอบด้วย ["c", "d"] ซึ่งควรจะได้ผลลัพธ์ของ return Set ใหม่ที่มีค่าเป็น ["a", "b", "c", "d"]

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
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
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
