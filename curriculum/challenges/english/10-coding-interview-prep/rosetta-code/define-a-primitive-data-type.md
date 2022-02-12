---
id: 597089c87eec450c68aa1643
title: Define a primitive data type
challengeType: 5
forumTopicId: 302248
dashedName: define-a-primitive-data-type
---

# --description--

ให้ประกาศ type ที่ทำงานเหมือนจำนวนเต็มแต่มีค่าต่ำสุดเป็น 1 และสูงสุดเป็น 10

การจัดการ Error:

<ul>
  <li>ถ้าสร้าง <code>Num</code> โดยใช้ตัวเลขนอกเหนือจาก 1 - 10 ต้อง throw <code>TypeError</code> ออกมา โดยมีข้อความว่า <code>'Out of range'</code></li>
  <li>ถ้าสร้าง <code>Num</code> โดยใช้ค่าที่ไม่ใช่ตัวเลข ต้อง throw <code>TypeError</code> ออกมา โดยมีข้อความว่า <code>'Not a Number'</code></li>
</ul>

# --hints--

`Num` ต้องเป็นฟังก์ชัน

```js
assert(typeof Num === 'function');
```

`new Num(4)` ต้องคืนค่าเป็น object

```js
assert(typeof new Num(4) === 'object');
```

`new Num('test')` ต้อง throw TypeError พร้อมข้อความ 'Not a Number'

```js
assert.throws(() => new Num('test'), TypeError);
```

`new Num(0)` ต้อง throw TypeError พร้อมข้อความ 'Out of range'

```js
assert.throws(() => new Num(0), TypeError);
```

`new Num(-5)` ต้อง throw TypeError พร้อมข้อความ 'Out of range'

```js
assert.throws(() => new Num(-5), TypeError);
```

`new Num(10)` ต้อง throw TypeError พร้อมข้อความ 'Out of range'

```js
assert.throws(() => new Num(11), TypeError);
```

`new Num(20)` ต้อง throw TypeError พร้อมข้อมความ 'Out of range'

```js
assert.throws(() => new Num(20), TypeError);
```

`new Num(3) + new Num(4)` ต้องเท่ากับ 7

```js
assert.equal(new Num(3) + new Num(4), 7);
```

`new Num(3) - new Num(4)` ต้องเท่ากับ -1

```js
assert.equal(new Num(3) - new Num(4), -1);
```

`new Num(3) * new Num(4)` ต้องเท่ากับ 12

```js
assert.equal(new Num(3) * new Num(4), 12);
```

`new Num(3) / new Num(4)` ต้องเท่ากับ 0.75

```js
assert.equal(new Num(3) / new Num(4), 0.75);
```

`new Num(3) < new Num(4)` ต้องคืนค่าเป็น true

```js
assert(new Num(3) < new Num(4));
```

`new Num(3) > new Num(4)` ต้องคืนค่าเป็น false

```js
assert(!(new Num(3) > new Num(4)));
```

`(new Num(5)).toString()` ต้องคืนค่าเป็น '5'

```js
assert.equal(new Num(5).toString(), '5');
```

# --seed--

## --seed-contents--

```js
function Num(n) {

  return n;
}
```

# --solutions--

```js
function Num(n) {
  if (isNaN(n)) {
    throw new TypeError('Not a Number');
  }
  if (n < 1 || n > 10) {
    throw new TypeError('Out of range');
  }

  this._value = +n;
}
Num.prototype.valueOf = function() { return this._value; };
Num.prototype.toString = function () { return this._value.toString(); };
```
