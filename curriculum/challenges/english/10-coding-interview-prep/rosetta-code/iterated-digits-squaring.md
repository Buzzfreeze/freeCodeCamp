---
id: 5a23c84252665b21eecc7ec1
title: Iterated digits squaring
challengeType: 5
forumTopicId: 302291
dashedName: iterated-digits-squaring
---

# --description--

หากคุณบวกกำลังสองของ Natural number (จำนวนเต็มที่มากกว่าศูนย์) คุณจะลงท้ายด้วย 1 หรือ 89 เสมอ:

<pre>15 -> 26 -> 40 -> 16 -> 37 -> 58 -> 89
7 -> 49 -> 97 -> 130 -> 10 -> 1
</pre>

# --instructions--

ให้เขียนฟังก์ชันที่รับตัวเลขเป็นพารามิเตอร์ และคืนค่าเป็น 1 หรือ 89 หลังจากดำเนินการตามกระบวนการด้านบน

# --hints--

`iteratedSquare` ต้องเป็นฟังก์ชัน

```js
assert(typeof iteratedSquare == 'function');
```

`iteratedSquare(4)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof iteratedSquare(4) == 'number');
```

`iteratedSquare(4)` ต้องคืนค่าเป็น `89`

```js
assert.equal(iteratedSquare(4), 89);
```

`iteratedSquare(7)` ต้องคืนค่าเป็น `1`

```js
assert.equal(iteratedSquare(7), 1);
```

`iteratedSquare(15)` ต้องคืนค่าเป็น `89`

```js
assert.equal(iteratedSquare(15), 89);
```

`iteratedSquare(20)` ต้องคืนค่าเป็น `89`

```js
assert.equal(iteratedSquare(20), 89);
```

`iteratedSquare(70)` ต้องคืนค่าเป็น `1`

```js
assert.equal(iteratedSquare(70), 1);
```

`iteratedSquare(100)` ต้องคืนค่าเป็น `1`

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
