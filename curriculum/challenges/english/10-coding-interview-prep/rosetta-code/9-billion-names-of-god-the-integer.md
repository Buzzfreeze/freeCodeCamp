---
id: 5949b579404977fbaefcd736
title: 9 billion names of God the integer
challengeType: 5
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

แบบฝึกหัดนี้อ้างอิงมาจาก [เรื่องสั้นของ Arthur C. Clarke](<https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary> "wp: The Nine Billion Names of God#Plot_summary")

(แก้ปัญหาควรตระหนักถึงผลที่ตามมาของการทำงานนี้ให้สำเร็จ)

โดยในที่นี้เราจะให้ชื่อของพระเจ้าเป็นดังนี้:

<ul>
  <li>ตัวเลข 1 มี 1 ชื่อคือ "1"</li>
  <li>ตัวเลข 2 มี 2 ชื่อคือ "1+1" และ "2"</li>
  <li>ตัวเลข 3 มี 3 ชื่อคือ "1+1+1", "2+1",  และ "3"</li>
  <li>ตัวเลข 4 มี 5 ชื่อคือ "1+1+1+1", "2+1+1", "2+2", "3+1", "4"</li>
  <li>ตัวเลข 5 มี 7 ชื่อคือ "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5"</li>
</ul>

ซึ่งแปลงเป็นภาพได้แบบนี้:

<pre>          
          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

โดยแถวที่ $n$ มีตรงตามตัวเลข $n$ และแต่ละคอลัมน์ $C$ ในแถว $m$ จากซ้ายไปขวาจะสอดคล้องกับจำนวนชื่อที่ขึ้นต้นด้วย $C$

นอกจากนี้ จะเห็นว่าผลลรวมของแถวที่ $n$ หรือ $P(n)$ เป็นฟังก์ชันแบ่งส่วน

# --instructions--

ให้สร้างฟังก์ชันที่คืนค่าเป็นผลรวมของแถวที่ $n$

# --hints--

`numberOfNames` ต้องเป็นฟังก์ชัน

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` ต้องมีค่าเป็น 7

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` ต้องมีค่าเป็น 77

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` ต้องมีค่าเป็น 385

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` ต้องมีค่าเป็น 1255

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` ต้องมีค่าเป็น 53174

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)` ต้องมีค่าเป็น 2552338241

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
