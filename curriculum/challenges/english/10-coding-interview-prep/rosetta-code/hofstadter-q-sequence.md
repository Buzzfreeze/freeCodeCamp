---
id: 59637c4d89f6786115efd814
title: Hofstadter Q sequence
challengeType: 5
forumTopicId: 302287
dashedName: hofstadter-q-sequence
---

# --description--

[Hofstadter Q sequence](https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Q_sequence "wp: Hofstadter_sequence#Hofstadter_Q_sequence") คือ:

$Q(1)=Q(2)=1, \\\\ Q(n)=Q\\big(n-Q(n-1)\\big)+Q\\big(n-Q(n-2)), \\quad n>2.$

ซึ่งจะคล้ายๆกับ [Fibonacci sequence](<https://rosettacode.org/wiki/Fibonacci sequence> "Fibonacci sequence") 

ค่าถัดไปของ Fibonacci sequence จะเกิดจากค่าสองค่าก่อนหน้าบวกกัน 

แต่ค่าถัดไปของ Q จะเกิดจากการดูค่าสองค่าก่อนหน้า แล้วค่อยประเมินว่าต้องไปบวกค่าไหนจึงจะได้ค่าถัดไป Q 


# --instructions--

ให้เปลี่ยนสมการ Hofstadter Q Sequence ให้เป็นฟังก์ชัน 

โดยให้ฟังก์ชันนี้รับค่าเป็นตัวเลข `n` คืนค่าเป็น int

# --hints--

`hofstadterQ` ต้องเป็นฟังก์ชัน

```js
assert(typeof hofstadterQ === 'function');
```

`hofstadterQ()` ต้องคืนค่าเป็น `integer`

```js
assert(Number.isInteger(hofstadterQ(1000)));
```

`hofstadterQ(1000)` ต้องคืนค่าเป็น `502`

```js
assert.equal(hofstadterQ(testCase[0]), res[0]);
```

`hofstadterQ(1500)` ต้องคืนค่าเป็น `755`

```js
assert.equal(hofstadterQ(testCase[1]), res[1]);
```

`hofstadterQ(2000)` ต้องคืนค่าเป็น `1005`

```js
assert.equal(hofstadterQ(testCase[2]), res[2]);
```

`hofstadterQ(2500)` ต้องคืนค่าเป็น `1261`

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
