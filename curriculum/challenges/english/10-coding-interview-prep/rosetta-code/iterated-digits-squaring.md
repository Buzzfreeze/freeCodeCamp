---
id: 5a23c84252665b21eecc7ec1
title: Iterated digits squaring
challengeType: 5
forumTopicId: 302291
dashedName: iterated-digits-squaring
---

# --description--

หากคุณบวกกำลังสองของNatural number (จำนวนเต็มที่มากกว่าศูนย์) คุณจะลงท้ายด้วย 1 หรือ 89 เสมอ:

<pre>15 -> 26 -> 40 -> 16 -> 37 -> 58 -> 89
7 -> 49 -> 97 -> 130 -> 10 -> 1
</pre>

# --instructions--

เขียนฟังก์ชันที่ใช้ตัวเลขเป็นพารามิเตอร์และส่งกลับ 1 หรือ 89 หลังจากดำเนินการตามกระบวนการดังกล่าว

# --hints--

`iteratedSquare` ควรเป็น function.

```js
assert(typeof iteratedSquare == 'function');
```

`iteratedSquare(4)` ควร return number.

```js
assert(typeof iteratedSquare(4) == 'number');
```

`iteratedSquare(4)` ควร return `89`.

```js
assert.equal(iteratedSquare(4), 89);
```

`iteratedSquare(7)` ควร return `1`.

```js
assert.equal(iteratedSquare(7), 1);
```

`iteratedSquare(15)` ควร return `89`.

```js
assert.equal(iteratedSquare(15), 89);
```

`iteratedSquare(20)` ควร return `89`.

```js
assert.equal(iteratedSquare(20), 89);
```

`iteratedSquare(70)` ควร return `1`.

```js
assert.equal(iteratedSquare(70), 1);
```

`iteratedSquare(100)` ควร return `1`.

```js
assert.equal(iteratedSquare(100), 1);
```

# --seed--

## --seed-contents--

```js
function iteratedSquare(n) {

}
```

# --solutions--

```js
function iteratedSquare(n) {
    var total;
    while (n != 89 && n != 1) {
        total = 0;
        while (n > 0) {
            total += Math.pow(n % 10, 2);
            n = Math.floor(n/10);
        }
        n = total;
    }
    return n;
}
```
