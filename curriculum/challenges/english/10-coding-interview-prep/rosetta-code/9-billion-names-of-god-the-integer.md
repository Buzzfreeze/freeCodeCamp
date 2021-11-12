---
id: 5949b579404977fbaefcd736
title: 9 billion names of God the integer
challengeType: 5
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

งานนี้เป็นรูปแบบของ [short story โดย Arthur C. Clarke](<https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary> "wp: The Nine Billion Names of God#Plot_summary").

(แก้ปัญหาควรตระหนักถึงผลที่ตามมาของการทำงานนี้ให้สำเร็จ)

โดยละเอียดเพื่อระบุว่า "name" หมายถึง:

<ul>
  <li>The integer 1 has 1 name "1".</li>
  <li>The integer 2 has 2 names "1+1" and "2".</li>
  <li>The integer 3 has 3 names "1+1+1", "2+1",  and "3".</li>
  <li>The integer 4 has 5 names "1+1+1+1", "2+1+1", "2+2", "3+1", "4".</li>
  <li>The integer 5 has 7 names "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".</li>
</ul>

สามารถเห็นภาพได้ในรูปแบบต่อไปนี้:

<pre>          
          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

โดยที่แถว $n$ ตรงกับจำนวนเต็ม $n$ และแต่ละคอลัมน์ $C$ ในแถว $m$ จากซ้ายไปขวาจะสอดคล้องกับจำนวนชื่อที่ขึ้นต้นด้วย $C$

นอกจากนี้ โปรดทราบว่าผลรวมของแถวที่ $n$-th $P(n)$ เป็น partition function.

# --instructions--

ใช้ฟังก์ชันที่ return ค่าผลรวมของแถวที่ $n$-th

# --hints--

`numberOfNames` ควรเป็น function.

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` ควรเท่ากับ 7.

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` ควรเท่ากับ 77.

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` ควรเท่ากับ 385.

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` ควรเท่ากับ 1255.

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` ควรเท่ากับ 53174.

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)` ควรเท่ากับ 2552338241.

```js
assert.equal(numberOfNames(123), 2552338241);
```

# --seed--

## --seed-contents--

```js
function numberOfNames(num) {

  return true;
}
```

# --solutions--

```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
```
