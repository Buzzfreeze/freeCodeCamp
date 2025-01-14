---
id: 5900f3761000cf542c50fe88
title: 'Problem 9: Special Pythagorean triplet'
challengeType: 5
forumTopicId: 302205
dashedName: problem-9-special-pythagorean-triplet
---

# --description--

Pythagorean triplet คือค่าที่ได้จากเซ็ตของตัวเลขสามตัว, `a` &lt; `b` &lt; `c` แต่ละตัวจะเป็น

<div style='text-align: center;'><var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup></div>

เช่น 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>

 Pythagorean triplet จะมีค่าเพียงค่าเดียว เช่น `a` + `b` + `c` = 1000 หาผลคูณของ `abc` ที่โดยเป็น `a` + `b` + `c` = `n`

# --hints--

`specialPythagoreanTriplet(24)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof specialPythagoreanTriplet(24) === 'number');
```

`specialPythagoreanTriplet(24)` ต้องคืนค่าเป็น 480

```js
assert.strictEqual(specialPythagoreanTriplet(24), 480);
```

`specialPythagoreanTriplet(120)` ต้องคืนค่าเป็น 49920, 55080 หรือ 60000

```js
assert([49920, 55080, 60000].includes(specialPythagoreanTriplet(120)));
```

`specialPythagoreanTriplet(1000)` ต้องคืนค่าเป็น 31875000

```js
assert.strictEqual(specialPythagoreanTriplet(1000), 31875000);
```

# --seed--

## --seed-contents--

```js
function specialPythagoreanTriplet(n) {
 let sumOfabc = n;

 return true;
}

specialPythagoreanTriplet(1000);
```

# --solutions--

```js
const specialPythagoreanTriplet = (n)=>{
 let sumOfabc = n;
 let a,b,c;
 for(a = 1; a<=sumOfabc/3; a++){
 for(b = a+1; b<=sumOfabc/2; b++){
 c = Math.sqrt(a*a+b*b);
 if((a+b+c) == sumOfabc){
 return a*b*c;
 }
 }
 }
}
```
