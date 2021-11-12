---
id: 594810f028c0303b75339ace
title: Accumulator factory
challengeType: 5
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

ปัญหาจาก [Paul Graham](https://en.wikipedia.org/wiki/Paul_Graham_(programmer)) คือการสร้างฟังก์ชันที่รับargument (ตัวเลข) เดียวและส่งคืนฟังก์ชันอื่นที่เป็นตัวสะสม ในทางกลับกัน ฟังก์ชันตัวสะสมที่ส่งคืนก็รับargumentตัวเลขเพียงตัวเดียว และส่งกลับผลรวมของค่าตัวเลขทั้งหมดที่ส่งผ่านไปยังตัวสะสมนั้นจนถึงตอนนี้ (รวมถึงค่าเริ่มต้นที่ส่งผ่านเมื่อสร้างตัวสะสม)

# --instructions--

สร้างฟังก์ชันที่ใช้ตัวเลข $n$ และสร้างฟังก์ชันตัวสะสมที่ส่งคืนผลรวมของทุกหมายเลขที่เคยส่งไปให้

**Rules:**

อย่าใช้ global variables.

**Hint:**

Closures save outer state.

# --hints--

`accumulator` ควรเป็น function.

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` ควร return function.

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` ควร return number.

```js
assert(typeof accumulator(0)(2) === 'number');
```

Passing in the values 3, -4, 1.5, and 5 ควร return 5.5.

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
