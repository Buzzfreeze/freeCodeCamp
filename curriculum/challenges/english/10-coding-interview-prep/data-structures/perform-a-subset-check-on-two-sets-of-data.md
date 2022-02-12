---
id: 587d8254367417b2b2512c6f
title: Perform a Subset Check on Two Sets of Data
challengeType: 1
forumTopicId: 301707
dashedName: perform-a-subset-check-on-two-sets-of-data
---

# --description--

ในแบบฝึกหัดนี้ เราจะทำการทดสอบ subset กับข้อมูล 2 set โดยเราจะสร้าง method ในโครงสร้างข้อมูล `Set` ที่เรียกว่า `isSubsetOf` วิธีนี้จะเปรียบเทียบ set แรกกับ set ที่สอง และหาก set แรกมีองค์ประกอบทุกอย่างเหมือนใน set ที่สอง จะคืนค่าเป็น `true`

ยกตัวอย่างเช่น หากกำหนดให้มี `setA = ['a','b']` และ `setB = ['a','b','c','d']` แล้ว `setA` ก็คือ subset ของ `setB` ดังนั้น `setA.isSubsetOf(setB)` ควรคืนค่าเป็น `true`

# --hints--

class `Set` ของคุณควรมี method `isSubsetOf`

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.isSubsetOf === 'function';
  })()
);
```

Set() แรกควรมีอยู่ใน Set ที่สอง

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setB.add('b');
    setB.add('c');
    setB.add('a');
    setB.add('d');
    var aIsSubsetOfB = setA.isSubsetOf(setB);
    return aIsSubsetOfB === true;
  })()
);
```

`['a', 'b'].isSubsetOf(['a', 'b', 'c', 'd'])` ควรคืนค่าเป็น `true`

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setA.add('b');
    setB.add('a');
    setB.add('b');
    setB.add('c');
    setB.add('d');
    var aIsSubsetOfB = setA.isSubsetOf(setB);
    return aIsSubsetOfB === true;
  })()
);
```

`['a', 'b', 'c'].isSubsetOf(['a', 'b'])` ควรคืนค่าเป็น `false`

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setA.add('b');
    setA.add('c');
    setB.add('a');
    setB.add('b');
    var aIsSubsetOfB = setA.isSubsetOf(setB);
    return aIsSubsetOfB === false;
  })()
);
```

`[].isSubsetOf([])` ควรคืนค่าเป็น `true`

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    var aIsSubsetOfB = setA.isSubsetOf(setB);
    return aIsSubsetOfB === true;
  })()
);
```

`['a', 'b'].isSubsetOf(['c', 'd'])` ควรคืนค่าเป็น `false`

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setA.add('b');
    setB.add('c');
    setB.add('d');
    var aIsSubsetOfB = setA.isSubsetOf(setB);
    return aIsSubsetOfB === false;
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

  difference(set) {
    const newSet = new Set();

    this.values().forEach(value => {
      if (!set.dictionary[value]) {
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

  isSubsetOf(set) {
    for(const value of this.values()){
      if(!set.dictionary[value]) return false;
    }
    return true
  }
}
```
