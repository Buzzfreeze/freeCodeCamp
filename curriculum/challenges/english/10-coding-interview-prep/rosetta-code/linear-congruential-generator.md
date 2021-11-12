---
id: 5e4ce2f5ac708cc68c1df261
title: Linear congruential generator
challengeType: 5
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

[linear congruential generator](<https://en.wikipedia.org/wiki/linear congruential generator>) 
เป็นตัวอย่างง่ายๆ ของ [random number generator](<http://rosettacode.org/wiki/random number generator>). linear congruential generators ใช้สูตร:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

Where:

<ul>
<li>$ r_0 $ is a seed.</li>
<li>$r_1$, $r_2$, $r_3$, ..., are the random numbers.</li>
<li>$a$, $c$, $m$ are constants.</li>
</ul>

หากเลือกค่าของ $a$, $c$ และ $m$ 
generators จะสร้างการกระจายตัวของจำนวนเต็มจาก $0$ to $m - 1$.

LCG numbers มีประสิทธิภาพต่ำ. $r_n$ and $r\_{n + 1}$ 
ไม่เป็นอิสระ เหมือนกับตัวเลขสุ่มที่แท้จริง ใครๆ ก็รู้จัก $r_n$ สามารถทำนาย $r\_{n + 1}$, 
ดังนั้น LCG จึงไม่ปลอดภัยในการเข้ารหัส LCG ยังดีพอสำหรับงานง่ายๆ เช่น [Miller-Rabin primality test](<http://rosettacode.org/wiki/Miller-Rabin primality test>) หรือ [FreeCell deals](<http://rosettacode.org/wiki/deal cards for FreeCell>). ในบรรดาประโยชน์ของ LCG นั้น เราสามารถทำซ้ำลำดับของตัวเลขได้ง่ายๆ จาก $r_0$ เดียวกัน เราสามารถทำซ้ำลำดับดังกล่าวด้วยภาษาการเขียนโปรแกรมอื่นได้ เนื่องจากสูตรนั้นง่ายมาก

# --instructions--

เขียนฟังก์ชันที่รับ $r_0,a,c,m,n$ เป็นพารามิเตอร์และreturn $r_n$

# --hints--

`linearCongGenerator` ควรเป็น function.

```js
assert(typeof linearCongGenerator == 'function');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` ควร return number.

```js
assert(typeof linearCongGenerator(324, 1145, 177, 2148, 3) == 'number');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` ควร return `855`.

```js
assert.equal(linearCongGenerator(324, 1145, 177, 2148, 3), 855);
```

`linearCongGenerator(234, 11245, 145, 83648, 4)` ควร return `1110`.

```js
assert.equal(linearCongGenerator(234, 11245, 145, 83648, 4), 1110);
```

`linearCongGenerator(85, 11, 1234, 214748, 5)` ควร return `62217`.

```js
assert.equal(linearCongGenerator(85, 11, 1234, 214748, 5), 62217);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)` ควร return `12345`.

```js
assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1), 12345);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)` ควร return `1406932606`.

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
