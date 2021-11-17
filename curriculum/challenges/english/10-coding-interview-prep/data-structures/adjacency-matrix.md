---
id: 587d8256367417b2b2512c78
title: Adjacency Matrix
challengeType: 1
forumTopicId: 301621
dashedName: adjacency-matrix
---

# --description--

อีกวิธีในการแสดงกราฟคือการใส่ลงใน <dfn>adjacency matrix</dfn> ซึ่ง <dfn>เมทริกซ์ที่อยู่ติดกัน</dfn> คือ array สองมิติ (2D) โดยที่แต่ละ array ที่ซ้อนกันมีจำนวนองค์ประกอบเท่ากันกับ array ภายนอก กล่าวอีกนัยหนึ่ง มันคือเมทริกซ์หรือตารางของตัวเลข โดยที่ตัวเลขเป็นตัวแทนของขอบ

**หมายเหตุ**: ตัวเลขด้านบนและด้านซ้ายของเมทริกซ์เป็นเพียงป้ายกำกับสำหรับ node ภายในเมทริกซ์ ones หมายถึงมีขอบระหว่างจุดยอด (node) แทนแถวและคอลัมน์ สุดท้าย zeros หมายความว่าไม่มีขอบหรือความสัมพันธ์

<pre>
    1 2 3
  \------
1 | 0 1 1
2 | 1 0 0
3 | 1 0 0
</pre>

ด้านบนเป็นกราฟธรรมดาๆ ที่ไม่มีทิศทาง ซึ่งมีสาม node โดยที่ node แรกเชื่อมต่อกับ node ที่สองและสาม ด้านล่างนี้เป็นการนำ JavaScript ไปใช้ในสิ่งเดียวกัน

```js
var adjMat = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
];
```

ซึ่งไม่เหมือนกับ adjacency list  "แถว" แต่ละแถวของเมทริกซ์ต้องมี element จำนวนเท่ากันกับ node ในกราฟ ที่นี่เรามีเมทริกซ์ขนาด 3 คูณ 3 ซึ่งหมายความว่าเรามีสาม node ในกราฟของเรา กราฟที่มีทิศทางจะมีลักษณะคล้ายกัน ด้านล่างเป็นกราฟทื่ node แรกมีขอบที่ชี้ไปยัง node ที่สอง จากนั้น node ที่สองมีขอบที่ชี้ไปที่ node ที่สาม

```js
var adjMatDirected = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];
```

กราฟสามารถมี <dfn>weights</dfn>ที่ขอบได้ ตอนนี้เรามีขอบ <dfn>unweighted</dfn> โดยมีเพียงการมีอยู่และไม่มีขอบเป็นเลขฐานสอง (`0` หรือ `1`) คุณสามารถมี weight ที่แตกต่างกันขึ้นอยู่กับการใช้งานของคุณ

# --instructions--

สร้าง adjacency matrix ของกราฟแบบไม่มีทิศทางที่มีห้า node เมทริกซ์นี้ควรอยู่ใน array หลายมิติ node ทั้งห้านี้มีความสัมพันธ์ระหว่าง node ที่หนึ่งและสี่ node ที่หนึ่งและสาม node ที่สามและห้า และ node ที่สี่และห้า weight ของขอบทั้งหมดเป็นหนึ่งเดียว

# --hints--

`undirectedAdjList` ควรประกอบด้วย node เพียง 5 node

```js
assert(
  adjMatUndirected.length === 5 &&
    adjMatUndirected
      .map(function (x) {
        return x.length === 5;
      })
      .reduce(function (a, b) {
        return a && b;
      })
);
```

ควรจะมีขอบระหว่าง node แรกและสี่

```js
assert(adjMatUndirected[0][3] === 1 && adjMatUndirected[3][0] === 1);
```

ควรจะมีขอบระหว่าง node แรกและสาม

```js
assert(adjMatUndirected[0][2] === 1 && adjMatUndirected[2][0] === 1);
```

ควรจะมีขอบระหว่าง node สามและห้า

```js
assert(adjMatUndirected[2][4] === 1 && adjMatUndirected[4][2] === 1);
```

ควรจะมีขอบระหว่าง node สี่และห้า

```js
assert(adjMatUndirected[3][4] === 1 && adjMatUndirected[4][3] === 1);
```

# --seed--

## --seed-contents--

```js
var adjMatUndirected = [];
```

# --solutions--

```js
var adjMatUndirected = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0]
];
```
