---
id: 5992e222d397f00d21122931
title: Fibonacci word
challengeType: 5
forumTopicId: 302269
dashedName: fibonacci-word
---

# --description--

Fibonacci Word จะคล้ายกับ Fibonacci Sequence [ลองอ่านที่นี่](https://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf):

<pre>ประกาศ  F_Word<sub>1</sub>  เป็น  <strong>1</strong>
ประกาศ  F_Word<sub>2</sub>  เป็น  <strong>0</strong>
สร้าง   F_Word<sub>3</sub>  โดยนำ  F_Word<sub>2</sub>   มาเชื่อมกับ  F_Word<sub>1</sub>   เช่น:  <strong>01</strong>
สร้าง   F_Word<sub>n</sub>  โดยนำ  F_Word<sub>n-1</sub>  มาเชื่อมกับ  F_word<sub>n-2</sub>
</pre>

# --instructions--

ให้เขียนฟังก์ชันเพื่อคืนค่า Fibonacci Word ไปจนถึงจำนวนที่ `n` โดยที่ฟังก์ชันนี้จะต้องรับพารามิเตอร์ `n` และฟังก์ชันต้องคืนค่าเป็น array ของ object โดย object ต้องมีรูปแบบเป็น `{ N: 1, Length: 1, Entropy: 0, Word: '1' }`.

# --hints--

`fibWord` ต้องคืนค่าเป็น

```js
assert(typeof fibWord === 'function');
```

`fibWord(5)` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(fibWord(5)));
```

`fibWord(5)` ต้องคืนค่าเป็น `[{ N:1, Length:1, Entropy:0, Word:"1" },{ N:2, Length:1, Entropy:0, Word:"0" },{ N:3, Length:2, Entropy:1, Word:"01" },{ N:4, Length:3, Entropy:0.9182958340544896, Word:"010" },{ N:5, Length:5, Entropy:0.9709505944546688, Word:"01001" }]`

```js
assert.deepEqual(fibWord(5), ans);
```

# --seed--

## --after-user-code--

```js
let ans=[ { N: 1, Length: 1, Entropy: 0, Word: '1' },

  { N: 2, Length: 1, Entropy: 0, Word: '0' },

  { N: 3, Length: 2, Entropy: 1, Word: '01' },

  { N: 4, Length: 3, Entropy: 0.9182958340544896, Word: '010' },

  { N: 5, Length: 5, Entropy: 0.9709505944546688, Word: '01001' }];
```

## --seed-contents--

```js
function fibWord(n) {

}
```

# --solutions--

```js
function fibWord(n) {
    function entropy(s) {
         //create an object containing each individual char
      //and the amount of iterations per char
        function prob(s) {
            var h = Object.create(null);
            s.split('').forEach(function(c) {
               h[c] && h[c]++ || (h[c] = 1);
            });
            return h;
        }

        s = s.toString(); //just in case
        var e = 0, l = s.length, h = prob(s);

        for (var i in h ) {
            var p = h[i]/l;
            e -= p * Math.log(p) / Math.log(2);
        }
        return e;
    }
    var wOne = "1", wTwo = "0", wNth = [wOne, wTwo], w = "", o = [];

    for (var i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            w = wNth[i];
        } else {
            w = wNth[i - 1] + wNth[i - 2];
            wNth.push(w);
        }
        var l = w.length;
        var e = entropy(w);

        if (l <= 21) {
            o.push({
                N: i + 1,
                Length: l,
                Entropy: e,
                Word: w
            });
        } else {
            o.push({
                N: i + 1,
                Length: l,
                Entropy: e,
                Word: "..."
            });
        }
    }
  return o;
}
```
