---
id: 587d825d367417b2b2512c96
title: Depth-First Search
challengeType: 1
forumTopicId: 301640
dashedName: depth-first-search
---

# --description--

ทีนี้เราจะมาเรียนเกี่ยวกับ graph traversal algorithm อีกอย่างที่เรียกว่า <dfn>depth-first search</dfn> ซึ่งคล้ายกันกับ <dfn>breadth-first search</dfn>

ในขณะที่ breadth-first search จะค้นหาความยาวของ edge ที่เพิ่มขึ้นจาก node ต้นทาง แต่ <dfn>depth-first search</dfn> จะลงไปตามเส้นทางของ edge ให้ไกลที่สุดเท่าที่จะทำได้

เมื่อถึงจุดสิ้นสุดของเส้นทาง การค้นหาจะย้อนรอยไปยัง node สุดท้ายที่มีเส้นทาง edge ที่ยังไม่ได้ไปค้นหาและทำการค้นหาต่อไป

ภาพเคลื่อนไหวด้านล่างแสดงวิธีการทำงานของอัลกอริทึม อัลกอริทึมเริ่มต้นด้วย node บนสุดและไปที่ node อื่นๆ 

<img class='img-responsive' src='https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966'>

สังเกตว่าทุกครั้งที่มีการค้นหาไปยัง node   มันจะไม่ไปค้นหา node ใกล้เคียงทั้งหมด ซึ่งแตกต่างจาก breadth-first search แต่จะไปค้นหาไปยัง node ใกล้เคียงที่สุดหนึ่ง node ก่อน และค้นหาต่อไปตามเส้นทางนั้นจนกว่าจะไม่มี node อื่นให้ค้นหาบนเส้นทางนั้น

ในการใช้อัลกอริทึมนี้คุณจะต้องใช้ stack ซึ่งคือ array ที่ element สุดท้ายที่เพิ่มเข้ามาเป็น element แรกที่จะถูกลบออก ซึ่งเรียกอีกอย่างว่าโครงสร้างข้อมูล <dfn>Last-In-First-Out</dfn> stack มีประโยชน์ในอัลกอริธึม depth-first search เนื่องจากเมื่อเราเพิ่ม node ใหม่ stack เราต้องการค้นหา node ที่ถูกเพิ่มเข้ามาล่าสุดก่อนหน้านี้และลบออกจาก stack

เอาต์พุตอย่างง่ายของอัลกอริธึมนี้คือลิสต์ของ node ที่สามารถเข้าถึงได้จาก node ที่กำหนด ดังนั้นคุณจะต้องติดตาม node ที่คุณค้นหาด้วย

# --instructions--

เขียนฟังก์ชัน `dfs()` ที่รับ undirected, adjacency matrix `graph` และ label node  `root` เป็นพารามิเตอร์ ซึ่ง node label นี้จะเป็นค่าตัวเลขของ node ระหว่าง `0` และ `n – 1` โดยที่ `n` คือจำนวน node ทั้งหมดในกราฟ

ฟังก์ชันของคุณควรส่ง output เป็น array ของ node ทั้งหมดที่เข้าถึงได้จาก "รูท"

# --hints--

ให้ใส่ input graph `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` ที่มี node เริ่มต้นด้วย `1` ควร return array ที่มีค่า `0`, `1`, `2`, และ `3`

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 1);
  })(),
  [0, 1, 2, 3]
);
```

ให้ใส่ input graph `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` ที่มี node เริ่มต้นด้วย `1` ควร return array ที่มี 4 element

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 1);
  })().length === 4
);
```

ให้ใส่ input graph `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` ที่มี node เริ่มต้นด้วย `3` ควร return array ที่มี ค่า `3`

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    return dfs(graph, 3);
  })(),
  [3]
);
```

ให้ใส่ input graph `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` ที่มี node เริ่มต้นด้วย `3` ควร return array ที่มี  1 element

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    return dfs(graph, 3);
  })().length === 1
);
```

ให้ใส่ input graph `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` ที่มี node เริ่มต้นด้วย `3` ควร return array ที่มี  ค่า `2` และ `3`

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 3);
  })(),
  [2, 3]
);
```

ให้ใส่ input graph `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` ที่มี node เริ่มต้นด้วย `3` ควร return array ที่มี   2 element

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 3);
  })().length === 2
);
```

ให้ใส่ input graph `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` ที่มี node เริ่มต้นด้วย `0` ควร return array ที่มี   ค่า `0` และ `1`

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 0);
  })(),
  [0, 1]
);
```

ให้ใส่ input graph `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` ที่มี node เริ่มต้นด้วย `0` ควร return array ที่มี   2 element

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 0);
  })().length === 2
);
```

# --seed--

## --seed-contents--

```js
function dfs(graph, root) {

}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));
```

# --solutions--

```js
function dfs(graph, root) {
    var stack = [];
    var tempV;
    var visited = [];
    var tempVNeighbors = [];
    stack.push(root);
    while (stack.length > 0) {
        tempV = stack.pop();
        if (visited.indexOf(tempV) == -1) {
            visited.push(tempV);
            tempVNeighbors = graph[tempV];
            for (var i = 0; i < tempVNeighbors.length; i++) {
                if (tempVNeighbors[i] == 1) {
                    stack.push(i);
                }
            }
        }
    }
    return visited;
}
```
