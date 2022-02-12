---
id: 8d5823c8c441eddfaeb5bdef
title: Create a Map Data Structure
challengeType: 1
forumTopicId: 301629
dashedName: create-a-map-data-structure
---

# --description--

แบบทดสอบต่อไปจะครอบคลุมเรื่อง map และ hash table (ตารางแฮช)  
Map คือโครงสร้างข้อมูลที่จัดเก็บ key-value pair ซึ่งใน JavaScript ข้อมูลรูปแบบนี้ก็คือ object อย่างนึง 
Map จะใช้เพื่อดึงข้อมูลโดยใช้คีย์ได้อย่างรวดเร็ว และเป็นโครงสร้างข้อมูลที่เป็นประโยชน์ และถูกใช้บ่อยมากๆ

# --instructions--

มาฝึกสร้าง map ของตัวเองกันเถอะ 
จริงๆแล้ว JavaScript object มีโครงสร้าง map ที่มีประสิทธิภาพเกินกว่าที่เราจะเขียนได้ที่นี่ เราจึงจะให้เขียน map ในรูปแบบง่ายๆ เพื่อให้คุณเรียนรู้วิธีการทำงานได้สะดวก
การทำการดำเนินการกับ JavaScript object จะมีการดำเนินการพื้นฐานให้เราไม่มาก แต่จะทำอย่างไรถ้าเราอยากเพิ่มการดำเนินการอื่นเข้าไปใน object? 
เราจะใช้ object `Map` ครอบ `object` ของ JavaScript เพื่อสร้าง method และหรือการดำเนินการเองได้ 
ให้สร้างการดำเนินการใน Map object ตามเงื่อนไขด้านล่างนี้:

<ul>
<li><code>add</code> รับค่า <code>key, value</code> และเพิ่มเข้าไปใน map</li>
<li><code>remove</code> รับค่า key และลบ <code>key, value</code> ที่ตรงกับ key ที่ระบุออก</li>
<li><code>get</code> รับค่า <code>key</code> และคืนค่าเป็น <code>value</code> ของคีย์นั้น</li>
<li><code>has</code> รับค่า <code>key</code> และคืนค่าเป็น <dfn>true</dfn> ถ้ามี key นั้นอยู่ หรือคืนค่าเป็น <dfn>false</dfn> ถ้าไม่มี key นั้น</li>
<li><code>values</code> คืนค่าเป็น array ของ value ทั้งหมดใน map </li>
<li><code>size</code> คืนค่าเป็นจำนวนข้อมูลใน map</li>
<li><code>clear</code> ล้าง map</li>
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

method `add` ควรเพิ่มข้อมูลไปยัง map

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

method `has` ควรคืนค่าเป็น true มีข้อมูลและ false เมื่อไม่มีข้อมูลนั้นๆ

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

method `get` ควรรับ key เป็น input และคืนค่าเป็น value ของ key นั้นๆ

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

method `values` ควรคืนค่าเป็นค่าทั้งหมดที่ถูกเก็บอยู่ใน map เป็น array

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

method `clear` ควรลบข้อมูลออกจาก map และ method `size` ควรคืนค่าเป็นจำนวนของข้อมูลที่มีใน map

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
