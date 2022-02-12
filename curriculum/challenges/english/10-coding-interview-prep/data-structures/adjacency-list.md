---
id: 587d8256367417b2b2512c77
title: Adjacency List
challengeType: 1
forumTopicId: 301620
dashedName: adjacency-list
---

# --description--

เราสามารถเก็บข้อมูลของกราฟได้หลายวิธี แต่ตอนนี้เราจะเรียนการเก็บข้อมูลของกราฟในรูปแบบ <dfn>adjacency list</dfn> ซึ่ง adjacency list นี้ก็คือ bulleted list ที่จะมีด้านซ้ายเป็น node และด้านขวาเป็น node อื่นๆ ทั้งหมดที่เชื่อมต่อกัน 

ลองดูตัวอย่าง adjacency list ด้านล่าง:

<blockquote>Node1: Node2, Node3<br>Node2: Node1<br>Node3: Node1</blockquote>

ด้านบนเป็นกราฟที่ไม่มีทิศทางเนื่องจาก `Node1` เชื่อมต่อกับ `Node2` และ `Node3` และข้อมูลนั้นสอดคล้องกับการเชื่อมต่อของ `Node2` และ `Node3` 

adjacency list ของกราฟที่มีทิศทางจะแสดงให้เห็นทิศทางของข้อมูลเลย  
เช่น ถ้าข้อมูลตัวอย่างด้านบนมีทิศทาง แล้ว `Node2: Node1` จะแปลว่าทิศทางนั้นชี้จาก `Node2` ไปยัง `Node1` 

เราสามารถเปลี่ยน adjacency list ที่ไม่มีทิศทางให้เป็น JavaScript object ได้แบบนี้:

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"]
};
```

และก็ทำให้เรียบง่ายมากขึ้นได้โดยการทำเป็น array ที่ node แต่ละตัวเป็นตัวเลข แทนที่จะเป็นสตริง แบบด้านล่างนี้:

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0],    // Node2
  [0]     // Node3
];
```

# --instructions--

ให้สร้างกราฟแบบไม่มีทิศทางโดยมี 4 node (แต่ละ node หมายถึงหนึ่งคน) โดยมีคนชื่อ `James`, `Jill`, `Jenny` และ `Jeff` 

โดยให้มีความสัมพันธ์ระหว่างแต่ละ node ดังนี้:  
James สัมพันธ์กับ Jeff  
Jill สัมพันธ์กับ Jenny และ  
Jeff สัมพันธ์กับ Jenny

# --hints--

`undirectedAdjList` ต้องมี 4 node

```js
assert(Object.keys(undirectedAdjList).length === 4);
```

ต้องมีสัมพันธ์ระหว่าง `Jeff` กับ `James`

```js
assert(
  undirectedAdjList.James.indexOf('Jeff') !== -1 &&
    undirectedAdjList.Jeff.indexOf('James') !== -1
);
```

ต้องมีสัมพันธ์ระหว่าง `Jill` กับ `Jenny`

```js
assert(
  undirectedAdjList.Jill.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jill') !== -1
);
```

ต้องมีสัมพันธ์ระหว่าง `Jeff` กับ `Jenny`

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
