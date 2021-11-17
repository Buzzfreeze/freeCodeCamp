---
id: 587d8256367417b2b2512c77
title: Adjacency List
challengeType: 1
forumTopicId: 301620
dashedName: adjacency-list
---

# --description--

กราฟสามารถถูกแสดงได้หลายวิธี ในที่นี้เราจะอธิบายวิธีหนึ่งซึ่งเรียกว่า <dfn>adjacency list</dfn> หรือ รายการที่อยู่ติดกันเป็นรายการหัวข้อย่อย (bulleted list ) โดยพื้นฐานแล้ว โดยด้านซ้ายคือ node และด้านขวาแสดงรายการ node อื่นๆ ทั้งหมดที่เชื่อมต่ออยู่ ด้านล่างนี้คือการแสดงรายการที่อยู่ติดกัน

Graphs can be represented in different ways. Here we describe one way, which is called an <dfn>adjacency list</dfn>. An adjacency list is essentially a bulleted list where the left side is the node and the right side lists all the other nodes it's connected to. Below is a representation of an adjacency list.

<blockquote>Node1: Node2, Node3<br>Node2: Node1<br>Node3: Node1</blockquote>

ด้านบนเป็นกราฟที่ไม่มีทิศทางเนื่องจาก `Node1` เชื่อมต่อกับ `Node2` และ `Node3` และข้อมูลนั้นสอดคล้องกับการเชื่อมต่อ `Node2` และ `Node3` รายการที่อยู่ติดกันสำหรับกราฟที่มีทิศทางจะหมายถึงแต่ละแถวของรายการแสดงทิศทาง หากกำหนดทิศทางข้างต้นแล้ว `Node2: Node1` จะหมายความว่าขอบที่ชี้ทิศทางนั้นชี้จาก `Node2` ไปที่ `Node1` เราสามารถแสดงกราฟที่ไม่มีทิศทางด้านบนเป็นรายการที่อยู่ติดกันโดยใส่ไว้ใน JavaScript object

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"]
};
```

นอกจากนี้มันยังถูกแสดงได้ง่ายกว่าโดยการแสดงเป็น array ที่ node ต่างๆ นั้นมี number แทนที่จะเป็น string

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0],    // Node2
  [0]     // Node3
];
```

# --instructions--

สร้างโซเชียลเน็ตเวิร์กเป็นกราฟแบบไม่มีทิศทางโดยมี 4 โหนด/คนชื่อ `James`, `Jill`, `Jenny` และ `Jeff` มีขอบ/ความสัมพันธ์ระหว่าง James กับ Jeff, Jill และ Jenny และ Jeff และ Jenny

# --hints--

`undirectedAdjList` ควรประกอบไปด้วย 4 node

```js
assert(Object.keys(undirectedAdjList).length === 4);
```

ควรจะมีขอบ (edge) ระหว่าง `Jeff` และ `James`

```js
assert(
  undirectedAdjList.James.indexOf('Jeff') !== -1 &&
    undirectedAdjList.Jeff.indexOf('James') !== -1
);
```

ควรจะมีขอบ (edge) ระหว่าง `Jill` และ `Jenny`

```js
assert(
  undirectedAdjList.Jill.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jill') !== -1
);
```

ควรจะมีขอบ (edge) ระหว่าง `Jeff` และ `Jenny`

```js
assert(
  undirectedAdjList.Jeff.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jeff') !== -1
);
```

# --seed--

## --seed-contents--

```js
var undirectedAdjList = {};
```

# --solutions--

```js
var undirectedAdjList = {
  James: ['Jeff'],
  Jill: ['Jenny'],
  Jenny: ['Jill', 'Jeff'],
  Jeff: ['James', 'Jenny']
};
```
