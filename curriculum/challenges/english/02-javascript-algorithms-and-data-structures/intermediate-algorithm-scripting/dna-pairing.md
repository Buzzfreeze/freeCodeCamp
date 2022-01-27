---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
challengeType: 5
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

สาย DNA เส้นหนึ่งประกอบด้วย element ที่ยังไม่มีคู่มาจับ ให้จับคู่ตัวอักษร แล้วคืนค่าเป็น array 2 มิติ

[Base pairs](http://en.wikipedia.org/wiki/Base_pair) คือคู่ของ DNA ได้แก่ AT และ CG ให้เราทำการจับคู่ตัวอักษรที่หายไป กับตัวอักษรที่อยู่บนสาย DNA  
แล้วคืนค่าเป็น array โดยให้ element แรกเป็นตัวอักษรที่อยู่บนสาย DNA ส่วน element ที่สองเป็นคู่ที่เราจับให้

เช่น ตัวอักษรที่อยู่บนสาย DNA คือ `GCG` ก็จะคืนค่าเป็น `[["G", "C"], ["C","G"], ["G", "C"]]`  
ตัวอักษรบนสาย DNA และคู่ของของตัวอักษรนั้นจะเป็น array ตัวนึง ซึ่ง array ทุกคู่ก็จะถูกเก็บอยู่ใน array อีกทอดนึง

# --hints--

`pairElement("ATCGA")` ต้องคืนค่าเป็น `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` ต้องคืนค่าเป็น `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` ต้องคืนค่าเป็น `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`

```js
assert.deepEqual(pairElement('CTCTA'), [
  ['C', 'G'],
  ['T', 'A'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'T']
]);
```

# --seed--

## --seed-contents--

```js
function pairElement(str) {
  return str;
}

pairElement("GCG");
```

# --solutions--

```js
var lookup = Object.create(null);
lookup.A = 'T';
lookup.T = 'A';
lookup.C = 'G';
lookup.G = 'C';

function pairElement(str) {
 return str.split('').map(function(p) {return [p, lookup[p]];});
}
```
