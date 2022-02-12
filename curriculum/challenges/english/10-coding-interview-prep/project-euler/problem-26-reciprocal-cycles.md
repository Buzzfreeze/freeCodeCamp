---
id: 5900f3861000cf542c50fe99
title: 'Problem 26: Reciprocal cycles'
challengeType: 5
forumTopicId: 301908
dashedName: problem-26-reciprocal-cycles
---

# --description--

unit fraction มี 1 เป็นตัวเศษ 

ลองดูการแสดงเศษส่วนเป็นทศนิยม ที่มีค่าของตัวส่วนเป็น 2 ถึง 10:

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div><sup>1</sup>/<sub>2</sub> = 0.5</div><div><sup>1</sup>/<sub>3</sub> = 0.(3)</div><div><sup>1</sup>/<sub>4</sub> = 0.25</div><div><sup>1</sup>/<sub>5</sub> = 0.2</div><div><sup>1</sup>/<sub>6</sub> = 0.1(6)</div><div><sup>1</sup>/<sub>7</sub> = 0.(142857)</div><div><sup>1</sup>/<sub>8</sub> = 0.125</div><div><sup>1</sup>/<sub>9</sub> = 0.(1)</div><div><sup>1</sup>/<sub>10</sub> = 0.1</div></div>

โดยที่ 0.1(6) หมายถึง 0.166666... โดยมีเลขซ้ำหนึ่งหลัก เราจะเห็นว่า <sup>1</sup>/<sub>7</sub> มีเลขซ้ำถึงหกหลัก

หาค่าของ `d` &lt; `n` โดยที่ <sup>1</sup>/<sub>d</sub> มีทศนิยมซ้ำยาวที่สุด

# --hints--

`reciprocalCycles(700)` ต้องคืนค่าเป็น number

```js
assert(typeof reciprocalCycles(700) === 'number');
```

`reciprocalCycles(700)` ต้องคืนค่าเป็น 659

```js
assert(reciprocalCycles(700) == 659);
```

`reciprocalCycles(800)` ต้องคืนค่าเป็น 743

```js
assert(reciprocalCycles(800) == 743);
```

`reciprocalCycles(900)` ต้องคืนค่าเป็น 887

```js
assert(reciprocalCycles(900) == 887);
```

`reciprocalCycles(1000)` ต้องคืนค่าเป็น 983

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
