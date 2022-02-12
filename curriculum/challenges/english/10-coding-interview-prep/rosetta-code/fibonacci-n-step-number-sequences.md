---
id: 598eef80ba501f1268170e1e
title: Fibonacci n-step number sequences
challengeType: 5
forumTopicId: 302267
dashedName: fibonacci-n-step-number-sequences
---

# --description--

อนุกรมตัวเลขเหล่านี้เป็นการใช้ [Fibonacci sequence](<https://rosettacode.org/wiki/Fibonacci sequence> "Fibonacci sequence") ที่:

<ol>
  <li>ถ้า $n = 2$ เราจะมี Fibonacci sequence ที่มีค่าเริ่มต้นเป็น $[1, 1]$ และ $F_k^2 = F_{k-1}^2 + F_{k-2}^2$</li>
  <li>ถ้า $n = 3$ เราจะมี tribonacci sequence ที่มีค่าเริ่มต้นเป็น $[1, 1, 2]$ และ $F_k^3 = F_{k-1}^3 + F_{k-2}^3 + F_{k-3}^3$</li>
  <li>ถ้า $n = 4$ เราจะมี tetranacci sequence ที่มีค่าเริ่มต้นเป็น $[1, 1, 2, 4]$ และ $F_k^4 = F_{k-1}^4 + F_{k-2}^4 + F_{k-3}^4 + F_{k-4}^4$...</li>
  <li>ถ้า $n>2$ เราจะมี Fibonacci $n$-step sequence - $F_k^n$ ที่มีค่าเริ่มต้นของ $n$ ค่าแรกของค่าที่ $(n-1)$ ของ Fibonacci $n$-step sequence เป็น $F_k^{n-1}$; และค่าที่ $k$ ของค่าที่ $n$ ของ sequence เป็น $F_k^n = \sum_{i=1}^{(n)} {F_{k-i}^{(n)}}$</li>
</ol>

Fibonacci $n$-step sequence:

| $n$ | Series name | Values                                                 |
| --- | ----------- | ------------------------------------------------------ |
| 2   | fibonacci   | 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ...         |
| 3   | tribonacci  | 1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ...    |
| 4   | tetranacci  | 1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ...  |
| 5   | pentanacci  | 1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ...  |
| 6   | hexanacci   | 1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ...  |
| 7   | heptanacci  | 1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ... |
| 8   | octonacci   | 1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ... |
| 9   | nonanacci   | 1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ... |
| 10  | decanacci   | 1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ... |

ซึ่งเราจะสร้าง sequence แบบอื่นได้ถ้าเปลี่ยนค่าเริ่มต้น โดย [Lucas series](<https://en.wikipedia.org/wiki/Lucas number> "wp: Lucas number") จะบวกสองค่าแรกเหมือนกับ fibonacci series โดยใช้ $n=2$ แต่จะใช้ $\[2, 1]$ เป็นค่าเริ่มต้นแทน

# --instructions--
ให้เขียนฟังก์ชันเพื่อสร้างลำดับเลข Fibonacci จำนวน $n$ ตัว และสร้างลำดับ Lucas ด้วย โดยรับพารามิเตอร์แรกเป็น $n$ พารามิเตอร์ที่สองเป็นจำนวนของ element ที่จะคืนค่าออกมา พารามิเตอร์ที่สามจะระบุว่าจะคืนค่าเป็นลำดับ Fibonacci หรือลำดับ Lucas ถ้าเป็น `"f"` ให้คืนค่าเป็นลำดับ Fibonacci และหากเป็น `"l"` ให้คืนค่าเป็นลำดับ Lucas โดยลำดับจะต้องคืนค่าเป็นเป็น array

# --hints--

`fib_luc` ต้องเป็นฟังก์ชัน

```js
assert(typeof fib_luc === 'function');
```

`fib_luc(2,10,"f")` ต้องคืนค่าเป็น `[1,1,2,3,5,8,13,21,34,55]`

```js
assert.deepEqual(fib_luc(2, 10, 'f'), ans[0]);
```

`fib_luc(3,15,"f")` ต้องคืนค่าเป็น `[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]`

```js
assert.deepEqual(fib_luc(3, 15, 'f'), ans[1]);
```

`fib_luc(4,15,"f")` ต้องคืนค่าเป็น `[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]`

```js
assert.deepEqual(fib_luc(4, 15, 'f'), ans[2]);
```

`fib_luc(2,10,"l")` ต้องคืนค่าเป็น `[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76]`

```js
assert.deepEqual(fib_luc(2, 10, 'l'), ans[3]);
```

`fib_luc(3,15,"l")` ต้องคืนค่าเป็น `[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ]`

```js
assert.deepEqual(fib_luc(3, 15, 'l'), ans[4]);
```

`fib_luc(4,15,"l")` ต้องคืนค่าเป็น `[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ]`

```js
assert.deepEqual(fib_luc(4, 15, 'l'), ans[5]);
```

`fib_luc(5,15,"l")` ต้องคืนค่าเป็น `[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]`

```js
assert.deepEqual(fib_luc(5, 15, 'l'), ans[6]);
```

# --seed--

## --after-user-code--

```js
const ans = [[1,1,2,3,5,8,13,21,34,55],
[1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136],
[1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536],
[ 2, 1, 3, 4, 7, 11, 18, 29, 47, 76],
[ 2, 1, 3, 6, 10, 19, 35, 64, 118, 217, 399, 734, 1350, 2483, 4567 ],
[ 2, 1, 3, 6, 12, 22, 43, 83, 160, 308, 594, 1145, 2207, 4254, 8200 ],
[ 2, 1, 3, 6, 12, 24, 46, 91, 179, 352, 692, 1360, 2674, 5257, 10335 ]];
```

## --seed-contents--

```js
function fib_luc(n, len, w) {

}
```

# --solutions--

```js
function fib_luc(n, len, w) {
    function nacci(a, n, len) {
        while (a.length < len) {
            let sum = 0;
            for (let i = Math.max(0, a.length - n); i < a.length; i++)
                sum += a[i];
            a.push(sum);
        }
        return a;
    }
    if(w=="f"){
        return nacci(nacci([1,1], n, n), n, len);
    }else{
        return nacci(nacci([2,1], n, n), n, len);
    }
}
```
