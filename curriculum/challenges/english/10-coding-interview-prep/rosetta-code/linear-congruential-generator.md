---
id: 5e4ce2f5ac708cc68c1df261
title: Linear congruential generator
challengeType: 5
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

[linear congruential generator](<https://en.wikipedia.org/wiki/linear congruential generator>) 
เป็นตัวอย่างของ [random number generator](<http://rosettacode.org/wiki/random number generator>) 

โดย linear congruential generators จะใช้สมการ:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

ที่:

<ul>
<li>$ r_0 $ เป็น seed.</li>
<li>$r_1$, $r_2$, $r_3$, ..., เป็นเลขที่สุ่มได้</li>
<li>$a$, $c$, $m$ เป็นค่าคงที่</li>
</ul>

ถ้ากำหนดค่าของ $a$, $c$ และ $m$ ได้ดี จะสร้างการกระจายตัวของจำนวนเต็มจาก $0$ ถึง $m - 1$ เป็นไปอย่างคงที่

LCG numbers มีประสิทธิภาพต่ำ เพราะว่า $r_n$ and $r\_{n + 1}$ 
ไม่เป็นอิสระ เหมือนกับตัวเลขสุ่มที่แท้จริง ทำให้ใครที่รู้ค่าของ $r_n$ ก็สามารถคำนวณหา $r\_{n + 1}$ ได้


ดังนั้น LCG จึงไม่ปลอดภัยในการเข้ารหัส แต่ LCG ก็ดีพอสำหรับงานง่ายๆเช่น [Miller-Rabin primality test](<http://rosettacode.org/wiki/Miller-Rabin primality test>) หรือ [FreeCell deals](<http://rosettacode.org/wiki/deal cards for FreeCell>)

ประโยชน์อีกอย่างของ LCG คือทำให้เราสามารถสุ่มเลขชุดเดิมได้ จาก $r_0$ ตัวเดียวกัน 

# --instructions--

ให้เขียนฟังก์ชันที่รับค่า $r_0,a,c,m,n$ เป็นพารามิเตอร์ และคืนค่าเป็น $r_n$

# --hints--

`linearCongGenerator` ต้องเป็นฟังก์ชัน

```js
assert(typeof linearCongGenerator == 'function');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof linearCongGenerator(324, 1145, 177, 2148, 3) == 'number');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` ต้องคืนค่าเป็น `855`

```js
assert.equal(linearCongGenerator(324, 1145, 177, 2148, 3), 855);
```

`linearCongGenerator(234, 11245, 145, 83648, 4)` ต้องคืนค่าเป็น `1110`

```js
assert.equal(linearCongGenerator(234, 11245, 145, 83648, 4), 1110);
```

`linearCongGenerator(85, 11, 1234, 214748, 5)` ต้องคืนค่าเป็น `62217`

```js
assert.equal(linearCongGenerator(85, 11, 1234, 214748, 5), 62217);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)` ต้องคืนค่าเป็น `12345`

```js
assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1), 12345);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)` ต้องคืนค่าเป็น `1406932606`

```js
assert.equal(
  linearCongGenerator(0, 1103515245, 12345, 2147483648, 2),
  1406932606
);
```

# --seed--

## --seed-contents--

```js
function linearCongGenerator(r0, a, c, m, n) {

}
```

# --solutions--

```js
function linearCongGenerator(r0, a, c, m, n) {
    for (let i = 0; i < n; i++) {
        r0 = (a * r0 + c) % m;
    }
    return r0;
}
```
