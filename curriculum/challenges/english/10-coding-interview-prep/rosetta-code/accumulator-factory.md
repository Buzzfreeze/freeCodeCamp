---
id: 594810f028c0303b75339ace
title: Accumulator factory
challengeType: 5
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

โจทย์นี้มาจาก [Paul Graham](https://en.wikipedia.org/wiki/Paul_Graham_(programmer)) 

# --instructions--

ให้สร้างฟังก์ชันที่รับตัวเลขหนึ่งตัว และจะคืนค่าเป็นฟังก์ชันที่รับตัวเลขอีกหนึ่งตัว และเมื่อเรียกใช้ฟังก์ชันที่ได้รับกลับมาโดยระบุตัวเลขไป จะรวมตัวเลขนั้นเข้าเป็นผลรวม และจะเรียกใช้ฟังก์ชันที่ได้รับกลับมาเพื่อเพิ่มผลรวมได้เรื่อยๆ 

เช่น

``` js
let acc = accumulator(1)
acc(2)
acc(3)
console.log(acc(4))
```

จะแสดงค่า 10 บนคอนโซล

**กฏ:**

ห้ามใช้ global variables


# --hints--

`accumulator` ต้องเป็นฟังก์ชัน

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` ต้องคืนค่าเป็นฟังก์ชัน

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof accumulator(0)(2) === 'number');
```

การส่งค่าเข้าไปเป็น 3, -4, 1.5, และ 5 ต้องคืนค่าเป็น 5.5

```js
assert(testFn(5) === 5.5);
```

# --seed--

## --after-user-code--

```js
const testFn = typeof accumulator(3) === 'function' && accumulator(3);
if (testFn) {
  testFn(-4);
  testFn(1.5);
}
```

## --seed-contents--

```js
function accumulator(sum) {

}
```

# --solutions--

```js
function accumulator(sum) {
  return function(n) {
    return sum += n;
  };
}
```
