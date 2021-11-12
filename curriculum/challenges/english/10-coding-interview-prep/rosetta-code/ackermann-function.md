---
id: 594810f028c0303b75339acf
title: Ackermann function
challengeType: 5
forumTopicId: 302223
dashedName: ackermann-function
---

# --description--

ฟังก์ชัน Ackermann เป็นตัวอย่างคลาสสิกของฟังก์ชันแบบเรียกซ้ำ โดยเฉพาะอย่างยิ่งเนื่องจากไม่ใช่ฟังก์ชันแบบเรียกซ้ำดั้งเดิม มันเติบโตอย่างรวดเร็วในมูลค่า เช่นเดียวกับขนาดของโครงสร้างการโทร

ฟังก์ชัน Ackermann มักจะถูกกำหนดดังนี้:

$A(m, n) = \\begin{cases} n+1 & \\mbox{if } m = 0 \\\\ A(m-1, 1) & \\mbox{if } m > 0 \\mbox{ and } n = 0 \\\\ A(m-1, A(m, n-1)) & \\mbox{if } m > 0 \\mbox{ and } n > 0. \\end{cases}$

ข้อโต้แย้งไม่เคยเป็นลบและจะยุติลงเสมอ

# --instructions--

เขียนฟังก์ชันที่คืนค่า $A(m, n)$ ควรใช้ความแม่นยำตามอำเภอใจ (เนื่องจากฟังก์ชันเติบโตอย่างรวดเร็ว) แต่ไม่จำเป็น

# --hints--

`ack` ควรเป็น function.

```js
assert(typeof ack === 'function');
```

`ack(0, 0)` ควร return 1.

```js
assert(ack(0, 0) === 1);
```

`ack(1, 1)` ควร return 3.

```js
assert(ack(1, 1) === 3);
```

`ack(2, 5)` ควร return 13.

```js
assert(ack(2, 5) === 13);
```

`ack(3, 3)` ควร return 61.

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
