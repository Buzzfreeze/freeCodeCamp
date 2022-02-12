---
id: 587d825b367417b2b2512c8e
title: Create a Hash Table
challengeType: 1
forumTopicId: 301627
dashedName: create-a-hash-table
---

# --description--

ในแบบทดสอบนี้ เราจะเรียนเรื่องตารางแฮช (hash table) 
ตารางแฮชใช้เพื่อใช้งาน array ที่เชื่อมโยง หรือการ map ของ key-value pairs เช่น object และ map ที่เราเพิ่งศึกษาไป อย่างเช่น JavaScript object สามารถนำไปใช้เป็นตารางแฮชได้ (การใช้งานจริงจะขึ้นอยู่กับสภาพแวดล้อมที่รันการทำงานอยู่) วิธีการทำงานของตารางแฮช คือใช้จะรับค่าคีย์เข้ามา และแฮชคีย์นี้เป็นตัวเลข จากนั้นจะใช้ตัวเลขนี้เป็นคีย์จริงที่เก็บค่าไว้ จากนั้นหากคุณพยายามเข้าถึงคีย์เดิมอีกครั้ง จะแฮชคีย์ที่ระบุเข้ามาให้เป็นตัวเลข และหาค่าของคีย์ที่เป็นตัวเลขนั้น ซึ่งให้เวลาเฉลี่ยในการค้นหาเป็น O(1) ซึ่งมีประสิทธิภาพมาก

เราสามารถสร้างตารางแฮชโดยใช้ array ได้ โดยต้องมีฟังก์ชันแฮชซึ่งสร้าง index ของ array ภายในช่วงที่ระบุ ในการใช้วิธีนี้ การเลือกขนาดของ array มีความสำคัญพอๆกับฟังก์ชันแฮชเลย 
ตัวอย่างเช่น จะเกิดอะไรขึ้นถ้าเราใส่คีย์ไปสองตัว แต่พอแฮชแล้วได้ตัวเลขเดียวกัน เราเรียกเหตุการณ์นี้ว่า collision 
วิธีหนึ่งในการจัดการ collision คือการจัดเก็บ key-value pair ทั้งสองไว้ที่ index นั้น 
จากนั้นเวลาหาค่าของคีย์ คุณต้องอ่านค่าที่ index นั้น และวนหาค่าคีย์นั้นอีกที ฟังก์ชันแฮชที่ดีจะต้องทำให้มี collision น้อยที่สุดเพื่อทำให้ค้นหาได้อย่างมีประสิทธิภาพ และประหยัดเวลา

ในที่นี้เราจะยังไม่สนใจกับรายละเอียดของการใช้ตารางแฮชหรือการแฮช เราเพียงแค่จะพยายามทำความเข้าใจวิธีการทำงานของตารางแฮชในภาพรวมก่อน

# --instructions--

มาลองสร้างฟังก์ชันพื้นฐานของตารางแฮชกันเถอะ เราได้สร้างฟังก์ชันแฮชแบบพื้นฐานง่ายๆ ให้คุณแล้ว
คุณสามารถส่งสตริงไปยังฟังก์ชัน `hash` ได้ และจะได้ค่ากลับมาเป็นตัวเลขที่จะใช้เป็นคีย์สำหรับการจัดเก็บ
ให้เก็บข้อมูลลงใน object `this.collection` ตาม index ที่แฮชได้ 
และให้สร้าง method 3 ตัวตามเงื่อนไขนี้ 
`add` จะรับค่า key-value pair เพื่อเพิ่มลงในตารางแฮช
`remove` จะรับค่าคีย์ เพื่อลบข้อมูลของ key-value pair นั้น 
`lookup` จะรับค่าคีย์ และคืนค่าเป็น value ของคีย์นั้น และถ้าไม่เจอคีย์ ให้คืนค่าเป็น `null`

ต้องเขียนโค้ดเพื่อป้องกัน collision ด้วย!

**หมายเหตุ:** การทดสอบ method `remove` จะไม่ผ่านจนกว่าจะเขียน method `add` และ `lookup` ได้อย่างถูกต้อง

# --hints--

ควรมีโครงสร้างข้อมูล HashTable

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test === 'object';
  })()
);
```

ต้องมี method add ใน HashTable

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.add === 'function';
  })()
);
```

ต้องมี method lookup ใน HashTable

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.lookup === 'function';
  })()
);
```

ต้องมี method remove ใน HashTable

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.remove === 'function';
  })()
);
```


method add ต้องเพิ่ม key value pair และ method lookup ต้องคืนค่าเป็น value ของคีย์ที่ส่งเข้าไป

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    return test.lookup('key') === 'value';
  })()
);
```

method remove ต้องรีบค่าคีย์ และจะต้องลบ key value pair ของคีย์นั้น

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');

    test.remove('key');
    return !test.collection.hasOwnProperty(hashValue);
  })()
);
```

method remove ต้องลบแค่ key value pair ที่ระบุเท่านั้น

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    test.add('yek', 'value');
    test.add('altKey', 'value');

    test.remove('yek');
    if (test.lookup('yek') || !test.lookup('key') || !test.lookup('altKey')) {
      return false;
    }

    test.remove('key');

    return !test.collection.hasOwnProperty(hashValue) && test.lookup('altKey');
  })()
);
```

การเพิ่มข้อมูล ต้องเพิ่มโดยใช้ hash function เท่านั้น

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('key2', 'value2');
    test.add('key3', 'value3');
    return called >= 3 && called % 3 === 0;
  })()
);
```

ตารางแฮช ต้องจัดการกับ collision ได้

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('1key', 'value2');
    test.add('ke1y', 'value3');
    return (
      test.lookup('key1') === 'value1' &&
      test.lookup('1key') == 'value2' &&
      test.lookup('ke1y') == 'value3'
    );
  })()
);
```

# --seed--

## --before-user-code--

```js
var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
```

## --seed-contents--

```js
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
};
```

# --solutions--

```js
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  this.add = function(key, val) {
    var theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
      this.collection[theHash] = {};
    }
    this.collection[theHash][key] = val;
  }

  this.remove = function(key) {
    var theHash = hash(key);
    var hashedObj = this.collection[theHash];
    if (hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key];
    }
    if (!Object.keys(hashedObj).length) {
      delete this.collection[theHash];
    }
  }

  this.lookup = function(key) {
    var theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null
  }
  // Only change code above this line
};
```
