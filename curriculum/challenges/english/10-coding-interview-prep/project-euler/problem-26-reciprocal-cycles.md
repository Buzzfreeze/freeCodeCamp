---
id: 5900f3861000cf542c50fe99
title: 'Problem 26: Reciprocal cycles'
challengeType: 5
forumTopicId: 301908
dashedName: problem-26-reciprocal-cycles
---

# --description--

unit fraction มี 1 ใน numerator(เศษ) ทศนิยมบ่งบอก unit fractions ที่มี denominators(ตัวหาร)เป็น 2 ถึง 10 ดังข้างล่าง:

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div><sup>1</sup>/<sub>2</sub> = 0.5</div><div><sup>1</sup>/<sub>3</sub> = 0.(3)</div><div><sup>1</sup>/<sub>4</sub> = 0.25</div><div><sup>1</sup>/<sub>5</sub> = 0.2</div><div><sup>1</sup>/<sub>6</sub> = 0.1(6)</div><div><sup>1</sup>/<sub>7</sub> = 0.(142857)</div><div><sup>1</sup>/<sub>8</sub> = 0.125</div><div><sup>1</sup>/<sub>9</sub> = 0.(1)</div><div><sup>1</sup>/<sub>10</sub> = 0.1</div></div>

ขณะที่ 0.1(6) คือ 0.166666..., และมี 1 digit เราสามารถเห็นว่า <sup>1</sup>/<sub>7</sub> มีถึง 6-digit ที่ซ้ำกัน

หาค่าของ `d` &lt; `n` สำหรับแต่ละ <sup>1</sup>/<sub>d</sub> ที่มีทศนิยมซ้ำ (recurring cycle)กันยาวที่สุด

# --hints--

`reciprocalCycles(700)` ควร return number.

```js
assert(typeof reciprocalCycles(700) === 'number');
```

`reciprocalCycles(700)` ควร return 659.

```js
assert(reciprocalCycles(700) == 659);
```

`reciprocalCycles(800)` ควร return 743.

```js
assert(reciprocalCycles(800) == 743);
```

`reciprocalCycles(900)` ควร return 887.

```js
assert(reciprocalCycles(900) == 887);
```

`reciprocalCycles(1000)` ควร return 983.

```js
assert(reciprocalCycles(1000) == 983);
```

# --seed--

## --seed-contents--

```js
function reciprocalCycles(n) {

  return n;
}

reciprocalCycles(1000);
```

# --solutions--

```js
// solution required
```
