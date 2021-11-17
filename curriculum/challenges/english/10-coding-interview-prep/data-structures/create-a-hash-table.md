---
id: 587d825b367417b2b2512c8e
title: Create a Hash Table
challengeType: 1
forumTopicId: 301627
dashedName: create-a-hash-table
---

# --description--

ในแบบทดสอบนี้ เราจะเรียนรู้เกี่ยวกับตารางแฮช ตารางแฮชใช้เพื่อใช้งาน array ที่เชื่อมโยง หรือการ map ของ key-value pairs เช่น object และ map ที่เราเพิ่งศึกษาไป อย่างเช่น JavaScript object สามารถนำไปใช้เป็นตารางแฮชได้ (การใช้งานจริงจะขึ้นอยู่กับสภาพแวดล้อมที่รันการทำงานอยู่) วิธีการทำงานของตารางแฮชคือใช้อินพุตคีย์และแฮชคีย์นี้ในลักษณะที่กำหนดขึ้นให้เป็นค่าตัวเลข ค่าตัวเลขนี้จะถูกใช้เป็นคีย์จริงที่เก็บค่าที่เกี่ยวข้องไว้ จากนั้นหากคุณพยายามเข้าถึงคีย์เดิมอีกครั้ง ฟังก์ชัน hashing จะประมวลผลคีย์นั้น ส่งคืนผลลัพธ์ที่เป็นตัวเลขเดียวกัน ซึ่งจะใช้เพื่อค้นหาค่าที่เกี่ยวข้อง ซึ่งให้เวลาเฉลี่ยในการค้นหา O(1) ที่มีประสิทธิภาพมาก

ตารางแฮชสามารถใช้เป็น array ที่มีฟังก์ชันแฮชซึ่งสร้างดัชนี array ภายในช่วงที่ระบุ ในวิธีนี้การเลือกขนาด array มีความสำคัญเช่นเดียวกับฟังก์ชันการแฮช ตัวอย่างเช่นจะเกิดอะไรขึ้นถ้าฟังก์ชันการแฮชสร้างค่าเดียวกันสำหรับคีย์ที่ต่างกันสองคีย์ นี้เรียกว่าการชนกัน วิธีหนึ่งในการจัดการการชนกันคือการจัดเก็บ key-value pairs ทั้งสองไว้ที่ดัชนีนั้น จากนั้นเมื่อค้นหาสิ่งใดสิ่งหนึ่ง คุณจะต้องวนซ้ำในที่เก็บข้อมูลเพื่อค้นหาคีย์ที่คุณต้องการ ฟังก์ชันแฮชที่ดีจะลดการชนกันให้เหลือน้อยที่สุดเพื่อรักษาเวลาในการค้นหาอย่างมีประสิทธิภาพ

ในที่นี้เราจะยังไม่สนใจกับรายละเอียดของการใช้ตารางแฮชหรือการแฮช เราเพียงแค่จะพยายามทำความเข้าใจโดยทั่วไปเกี่ยวกับวิธีการทำงานของตารางแฮช

# --instructions--

มาลองสร้างฟังก์ชันพื้นฐานของตารางแฮชกันเถอะ เราได้สร้างฟังก์ชันแฮชแบบพื้นฐานง่ายๆ เพื่อให้คุณใช้ คุณสามารถส่งค่าสตริงไปยังฟังก์ชัน `hash` และจะ return ค่าที่แฮชซึ่งคุณสามารถใช้เป็นคีย์สำหรับการจัดเก็บได้ จัดเก็บรายการตามค่าที่แฮชนี้ใน `this.collection` object ลองสร้างสาม method เหล่านี้: `add`, `remove` และ `lookup` อันดับแรกควรยอมรับคู่ key-value pair เพื่อเพิ่มลงในตารางแฮช อันที่สองควรลบ key-value pair เมื่อส่งคีย์ คีย์ที่สามควรยอมรับคีย์และ return ค่าที่เกี่ยวข้องหรือ `null` หากไม่มีคีย์

อย่าลืมเขียนรหัสของคุณเพื่อป้องกันการชน (collision) กัน!

**หมายเหตุ:** การทดสอบ `remove` method จะไม่ผ่านจนกว่าวิธี `add` และ `lookup` จะได้รับการติดตั้งอย่างถูกต้อง

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

HashTable ควรมี method add

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

HashTable ควรมี method lookup

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

HashTable ควรมี method remove

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


Add method ควรเพิ่ม key value pair และ lookup method ควร return ค่าที่เกี่ยวข้องกับ key ที่กำหนดให้มา

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

Remove method ควรยอมรับ key เป็นอินพุต และควรลบ key value pair ที่เกี่ยวข้อง

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

Remove method ควรแค่ลบ key value pair ที่ถูกต้องเท่านั้น

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

รายการต่างๆ ควรถูกเพิ่มโดยการใช้ hash function

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

ตารางแฮช ควรจัดการกับกานชน (collision) ได้

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
  // Only change code below this line
  
  // Only change code above this line
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
