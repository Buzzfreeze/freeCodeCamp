---
id: 59637c4d89f6786115efd814
title: Hofstadter Q sequence
challengeType: 5
forumTopicId: 302287
dashedName: hofstadter-q-sequence
---

# --description--

[Hofstadter Q sequence](https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Q_sequence "wp: Hofstadter_sequence#Hofstadter_Q_sequence") ถูกกำหนดเป็น:

$Q(1)=Q(2)=1, \\\\ Q(n)=Q\\big(n-Q(n-1)\\big)+Q\\big(n-Q(n-2)), \\quad n>2.$

มีการกำหนดเหมือน[Fibonacci sequence](<https://rosettacode.org/wiki/Fibonacci sequence> "Fibonacci sequence") แต่ในขณะที่เทอมถัดไปในFibonacci sequenceเป็นผลรวมของสองเทอมก่อนหน้าใน ลำดับ Q สองเทอมก่อนหน้าจะบอกคุณว่าต้องย้อนกลับไปในลำดับ Q ได้อย่างไรเพื่อค้นหาตัวเลขสองตัวที่จะรวมเพื่อสร้างเทอมถัดไปของลำดับ


# --instructions--

ใช้สมการ Hofstadter Q Sequence เป็นฟังก์ชัน ฟังก์ชันควรยอมรับตัวเลข `n` และ return integer

# --hints--

`hofstadterQ` ควรreturn function.

```js
assert(typeof hofstadterQ === 'function');
```

`hofstadterQ()` ควร return `integer`

```js
assert(Number.isInteger(hofstadterQ(1000)));
```

`hofstadterQ(1000)` ควร return `502`

```js
assert.equal(hofstadterQ(testCase[0]), res[0]);
```

`hofstadterQ(1500)` ควร return `755`

```js
assert.equal(hofstadterQ(testCase[1]), res[1]);
```

`hofstadterQ(2000)` ควร return `1005`

```js
assert.equal(hofstadterQ(testCase[2]), res[2]);
```

`hofstadterQ(2500)` ควร return `1261`

```js
assert.equal(hofstadterQ(testCase[3]), res[3]);
```

# --seed--

## --after-user-code--

```js
const testCase = [1000, 1500, 2000, 2500];
const res = [502, 755, 1005, 1261];
```

## --seed-contents--

```js
function hofstadterQ(n) {

  return n;
}
```

# --solutions--

```js
function hofstadterQ (n) {
  const memo = [1, 1, 1];
  const Q = function (i) {
    let result = memo[i];
    if (typeof result !== 'number') {
      result = Q(i - Q(i - 1)) + Q(i - Q(i - 2));
      memo[i] = result;
    }
    return result;
  };
  return Q(n);
}
```
