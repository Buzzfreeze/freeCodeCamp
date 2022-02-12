---
id: 594810f028c0303b75339acf
title: Ackermann function
challengeType: 5
forumTopicId: 302223
dashedName: ackermann-function
---

# --description--

ฟังก์ชัน Ackermann เป็นตัวอย่างคลาสสิกของฟังก์ชันแบบ recursivve  
ฟังชันนี้จะมีค่ามากขึ้นอย่างรวดเร็ว และก็จะมี stack การเรียกใช้เพิ่มขึ้นอย่างรวดเร็วเช่นกัน

ฟังก์ชัน Ackermann มักจะมีหน้าตาแบบนี้:

$A(m, n) = \\begin{cases} n+1 & \\mbox{if } m = 0 \\\\ A(m-1, 1) & \\mbox{if } m > 0 \\mbox{ and } n = 0 \\\\ A(m-1, A(m, n-1)) & \\mbox{if } m > 0 \\mbox{ and } n > 0. \\end{cases}$

argument ที่ระบุจะต้องไม่เป็นค่าลบ และฟังก์ชันนี้จะมีจุดจบเสมอ

# --instructions--

ให้เขียนฟังก์ชันที่คืนค่าของ $A(m, n)$

# --hints--

`ack` ต้องเป็นฟังก์ชัน

```js
assert(typeof ack === 'function');
```

`ack(0, 0)` ต้องคืนค่าเป็น 1

```js
assert(ack(0, 0) === 1);
```

`ack(1, 1)` ต้องคืนค่าเป็น 3

```js
assert(ack(1, 1) === 3);
```

`ack(2, 5)` ต้องคืนค่าเป็น 13

```js
assert(ack(2, 5) === 13);
```

`ack(3, 3)` ต้องคืนค่าเป็น 61

```js
assert(ack(3, 3) === 61);
```

# --seed--

## --seed-contents--

```js
function ack(m, n) {

}
```

# --solutions--

```js
function ack(m, n) {
  return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}
```
