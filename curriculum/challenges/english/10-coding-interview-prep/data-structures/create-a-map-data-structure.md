---
id: 8d5823c8c441eddfaeb5bdef
title: Create a Map Data Structure
challengeType: 1
forumTopicId: 301629
dashedName: create-a-map-data-structure
---

# --description--

แบบทดสอบต่อไปจะพูดครอบคลุมถึง map และ hash table (ตารางแฮช)  Map คือโครงสร้างข้อมูลที่จัดเก็บ key-value pairs  ใน JavaScript สิ่งเหล่านี้ก็คือ object อย่างนึง Map ให้การค้นหารายการที่เก็บไว้อย่างรวดเร็วตามค่าคีย์และเป็นโครงสร้างข้อมูลทั่วไปที่เป็นประโยชน์

# --instructions--

มาฝึกสร้าง map ของตัวเองกันเถอะ เนื่องจาก JavaScript object มีโครงสร้าง map ที่มีประสิทธิภาพมากกว่าสิ่งที่เราจะสามารถเขียนได้ที่นี่จึงนำมาเป็นตัวอย่างเพื่อเป็นแบบฝึกหัดการเรียนรู้ อย่างไรก็ตามเราสามารถสร้าง operation  บางอย่างบน JavaScript object อย่างจำกัด จะเป็นอย่างไรถ้าเราต้องการสร้าง operation ที่กำหนดเอง ใช้ `Map` object ที่ให้ไว้ที่นี่เป็น wrapper รอบ `object` ของ JavaScript สร้าง method และ operation ต่อไปนี้บน Map object:

<ul>
<li><code>add</code> accepts a <code>key, value</code> pair to add to the map.</li>
<li><code>remove</code> accepts a key and removes the associated <code>key, value</code> pair</li>
<li><code>get</code> accepts a <code>key</code> and returns the stored <code>value</code></li>
<li><code>has</code> accepts a <code>key</code> and returns <dfn>true</dfn> if the key exists or <dfn>false</dfn> if it doesn't.</li>
<li><code>values</code> returns an array of all the values in the map</li>
<li><code>size</code> returns the number of items in the map</li>
<li><code>clear</code> empties the map</li>
</ul>

# --hints--

ควรมีโครงสร้างข้อมูล Map

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return typeof test == 'object';
  })()
);
```

Map object ควรมี method ดังต่อไปนี้: add, remove, get, has, values, clear และ size

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return (
      typeof test.add == 'function' &&
      typeof test.remove == 'function' &&
      typeof test.get == 'function' &&
      typeof test.has == 'function' &&
      typeof test.values == 'function' &&
      typeof test.clear == 'function' &&
      typeof test.size == 'function'
    );
  })()
);
```

Add method ควรเพิ่มรายการไปยัง map

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add(5, 6);
    test.add(2, 3);
    test.add(2, 5);
    return test.size() == 2;
  })()
);
```

Has method ควร return true เมื่อเพิ่มรายการและ false เมื่อไม่มีรายการนั้นๆ

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('test', 'value');
    return test.has('test') && !test.has('false');
  })()
);
```

Get method ควรรับ key เป็น input และ return ค่าที่เกี่ยวข้องนั้นๆ

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('abc', 'def');
    return test.get('abc') == 'def';
  })()
);
```

Values method ควร return ค่าทั้งหมดที่ถูกเก็บอยู่ใน map ในรูปแบบ string ใน array

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('a', 'b');
    test.add('c', 'd');
    test.add('e', 'f');
    var vals = test.values();
    return (
      vals.indexOf('b') != -1 &&
      vals.indexOf('d') != -1 &&
      vals.indexOf('f') != -1
    );
  })()
);
```

Clear method ควรลบข้อมูลทั้งหมดให้ map ว่างเปล่าและ size method ควร return จำนวนของรายการที่มีใน map

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('b', 'b');
    test.add('c', 'd');
    test.remove('asdfas');
    var init = test.size();
    test.clear();
    return init == 2 && test.size() == 0;
  })()
);
```

# --seed--

## --seed-contents--

```js
var Map = function() {
  this.collection = {};
  // Only change code below this line
  
  // Only change code above this line
};
```

# --solutions--

```js
var Map = function() {
    this.collection = {};
    // Only change code below this line

    this.add = function(key,value) {
      this.collection[key] = value;
    }

    this.remove = function(key) {
      delete this.collection[key];
    }

    this.get = function(key) {
      return this.collection[key];
    }

    this.has = function(key) {
      return this.collection.hasOwnProperty(key)
    }

    this.values = function() {
      return Object.values(this.collection);
    }

    this.size = function() {
      return Object.keys(this.collection).length;
    }

    this.clear = function() {
      for(let item of Object.keys(this.collection)) {
        delete this.collection[item];
      }
    }
    // Only change code above this line
};
```
