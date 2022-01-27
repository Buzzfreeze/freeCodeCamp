---
id: a3bfc1673c0526e06d3ac698
title: Sum All Primes
challengeType: 5
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

<dfn>จำนวนเฉพาะ</dfn> (prime number) คือ จำนวนเต็มบวกที่มีค่ามากกว่า 1 และมีตัวหารอยู่ 2 ตัว คือ 1 และตัวเอง (1 ไม่ใช่จำนวนเฉพาะ)  
เช่น 2 เป็นจำนวนเฉพาะ เพราะมีเพียง 1 และ 2 ที่หาร 2 ลงตัว แต่ 4 ไม่ใช่จำนวนเฉพาะ เพราะมี 1, 2 และ 4 ที่หาร 4 ลงตัว

จงเขียนฟังก์ชัน `sumPrimes` เพื่อให้คืนค่าเป็นผลรวมของจำนวนเฉพาะทั้งหมดที่น้อยกว่าหรือเท่ากับ `num`

# --hints--

`sumPrimes(10)` ต้องคืนค่าเป็น  number

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` ต้องคืนค่าเป็น 17

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` ต้องคืนค่าเป็น 73156

```js
assert.deepEqual(sumPrimes(977), 73156);
```

# --seed--

## --seed-contents--

```js
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
```

# --solutions--

```js
function eratosthenesArray(n) {
    var primes = [];
    if (n > 2) {
        var half = n>>1;
        var sieve = Array(half);
        for (var i = 1, limit = Math.sqrt(n)>>1; i <= limit; i++) {
            if (!sieve[i]) {
                for (var step = 2*i+1, j = (step*step)>>1; j < half; j+=step) {
                    sieve[j] = true;
                }
            }
        }
        primes.push(2);
        for (var p = 1; p < half; p++) {
            if (!sieve[p]) primes.push(2*p+1);
        }
    }
    return primes;
}

function sumPrimes(num) {
  return eratosthenesArray(num+1).reduce(function(a,b) {return a+b;}, 0);
}

sumPrimes(10);
```
