---
id: 5e6dee7749a0b85a3f1fc7d5
title: Lucas-Lehmer test
challengeType: 5
forumTopicId: 385281
dashedName: lucas-lehmer-test
---

# --description--

Lucas-Lehmer Test: สำหรับ $p$ odd prime Mersenne number $2^p-1$ เป็นไพรม์ก็ต่อเมื่อ $2^p-1$ หารด้วย $S(p-1)$ เมื่อ $S(n+1)=(S(n))^2-2$, และ $S(1)=4$.

# --instructions--

เขียนฟังก์ชันที่ส่งคืนว่าตัวเลข Mersenne ที่ระบุนั้นเป็นจำนวนเฉพาะหรือไม่

# --hints--

`lucasLehmer` ควรเป็น function.

```js
assert(typeof lucasLehmer == 'function');
```

`lucasLehmer(11)` ควร return boolean.

```js
assert(typeof lucasLehmer(11) == 'boolean');
```

`lucasLehmer(11)` ควร return `false`.

```js
assert.equal(lucasLehmer(11), false);
```

`lucasLehmer(15)` ควร return `false`.

```js
assert.equal(lucasLehmer(15), false);
```

`lucasLehmer(13)` ควร return `true`.

```js
assert.equal(lucasLehmer(13), true);
```

`lucasLehmer(17)` ควร return `true`.

```js
assert.equal(lucasLehmer(17), true);
```

`lucasLehmer(19)` ควร return `true`.

```js
assert.equal(lucasLehmer(19), true);
```

`lucasLehmer(21)` ควร return `false`.

```js
assert.equal(lucasLehmer(21), false);
```

# --seed--

## --seed-contents--

```js
function lucasLehmer(p) {

}
```

# --solutions--

```js
function lucasLehmer(p) {
    function isPrime(p) {
        if (p == 2)
            return true;
        else if (p <= 1 || p % 2 == 0)
            return false;
        else {
            var to = Math.sqrt(p);
            for (var i = 3; i <= to; i += 2)
                if (p % i == 0)
                    return false;
            return true;
        }
    }

    function isMersennePrime(p) {
        if (p == 2)
            return true;
        else {
            var m_p = Math.pow(2, p) - 1
            var s = 4;
            for (var i = 3; i <= p; i++)
                s = (s * s - 2) % m_p
            return s == 0;
        }
    }

    return isPrime(p) && isMersennePrime(p)
}
```
