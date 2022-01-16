---
id: a2f1d72d9b908d0bd72bb9f6
title: Make a Person
challengeType: 5
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

ให้เพิ่ม method ต่อไปนี้ใน object constructor:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

ลองรันเพื่อดูผลลัพธ์ของแต่ละ method โดย method ที่รับ argument 0tต้องรับ argument แค่ตัวเดียวและต้องเป็น string เท่านั้น นอกจากนี้ การแก้ไขค่าใน object ต้องทำผ่าน method เหล่านี้เท่านั้น

# --hints--

ห้ามเพิ่ม property อื่นๆเข้าไป และ `Object.keys(bob).length` ต้องมีค่าเป็น 6 เสมอ

```js
assert.strictEqual(
  Object.keys((function () {
    let bob = new Person('Bob Ross');
    bob.setFirstName('Haskell');
    bob.setLastName('Curry');
    bob.setFullName('John Smith');
    return bob;
  })()).length,
  6
 );
```

`bob instanceof Person` ต้องคืนค่าเป็น `true`

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName` ต้องคืนค่าเป็น `undefined`

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName` ต้องคืนค่าเป็น `undefined`

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()` ต้องคืนค่าเป็น string `Bob`

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()` ต้องคืนค่าเป็น string `Ross`

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()` ต้องคืนค่าเป็น string `Bob Ross`

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` ต้องคืนค่าเป็น string `Haskell Ross` หลังจากเรียกใช้ `bob.setFirstName("Haskell")`

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` ต้องคืนค่าเป็น the string `Haskell Curry` หลังจากเรียกใช้ `bob.setLastName("Curry")`

```js
assert.strictEqual(
  (function () {
    var _bob = new Person('Haskell Ross');
    _bob.setLastName('Curry');
    return _bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFullName()` ต้องคืนค่าเป็น the string `Haskell Curry` หลังจากเรียกใช้ `bob.setFullName("Haskell Curry")`

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` ต้องคืนค่าเป็น the string `Haskell` หลังจากเรียกใช้ `bob.setFullName("Haskell Curry")`

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` ต้องคืนค่าเป็น the string `Curry` หลังจากเรียกใช้ `bob.setFullName("Haskell Curry")`

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getLastName();
  })(),
  'Curry'
);
```

# --seed--

## --after-user-code--

```js
if(bob){
  bob = new Person("Bob Ross");
}
```

## --seed-contents--

```js
var Person = function(firstAndLast) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  // เขียน method ด้านล่างนี้ให้เสร็จ แล้วค่อยเขียน method อื่นที่มีให้ในโจทย์ตาม method ที่มีให้นี้
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

# --solutions--

```js
var Person = function(firstAndLast) {

  var firstName, lastName;

  function updateName(str) {
    firstName = str.split(" ")[0];
    lastName = str.split(" ")[1];
  }

  updateName(firstAndLast);

  this.getFirstName = function(){
    return firstName;
  };

  this.getLastName = function(){
    return lastName;
  };

  this.getFullName = function(){
    return firstName + " " + lastName;
  };

  this.setFirstName = function(str){
    firstName = str;
  };


  this.setLastName = function(str){
    lastName = str;
  };

  this.setFullName = function(str){
    updateName(str);
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
```
