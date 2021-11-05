---
id: 5900f3941000cf542c50fea7
title: 'Problem 40: Champernowne''s constant'
challengeType: 5
forumTopicId: 302066
dashedName: problem-40-champernownes-constant
---

# --description--

irrational decimal fraction หาจากการต่อกันของจำนวนที่มีค่าบวก:

0.12345678910**1**112131415161718192021...

เห็นว่า 12<sup>th</sup> digit ของเศษส่วนคือ 1.

ถ้า *d<sub>n</sub>* แสดงถึง *n*<sup>th</sup> digit ของเศษส่วน ให้หาค่าของ

d<sub>1</sub> × d<sub>10</sub> × d<sub>100</sub> × d<sub>1000</sub> × d<sub>10000</sub> × d<sub>100000</sub> × d<sub>1000000</sub>

# --hints--

`champernownesConstant(100)` ควร return number.

```js
assert(typeof champernownesConstant(100) === 'number');
```

`champernownesConstant(100)` ควร return 5.

```js
assert.strictEqual(champernownesConstant(100), 5);
```

`champernownesConstant(1000)` ควร return 15.

```js
assert.strictEqual(champernownesConstant(1000), 15);
```

`champernownesConstant(1000000)` ควร return 210.

```js
assert.strictEqual(champernownesConstant(1000000), 210);
```

# --seed--

## --seed-contents--

```js
function champernownesConstant(n) {

  return true;
}

champernownesConstant(100);
```

# --solutions--

```js
function champernownesConstant(n) {
  let fractionalPart = '';
  for (let i = 0; fractionalPart.length <= n; i++) {
    fractionalPart += i.toString();
  }

  let product = 1;
  for (let i = 0; i < n.toString().length; i++) {
    const index = 10 ** i;
    product *= parseInt(fractionalPart[index], 10);
  }

  return product;
}
```
