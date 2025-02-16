---
id: 587d825d367417b2b2512c96
title: Depth-First Search
challengeType: 1
forumTopicId: 301640
dashedName: depth-first-search
---

# --description--

ทีนี้เราจะมาเรียนเกี่ยวกับ graph traversal algorithm อีกอย่างที่เรียกว่า <dfn>depth-first search</dfn> กัน ซึ่งก็จะคล้ายกันกับ <dfn>breadth-first search</dfn>

ในขณะที่ breadth-first search จะค้นหาตามระยะห่างของความสัมพันธ์ของ node ถึง node เริ่มต้น แต่ <dfn>depth-first search</dfn> จะเริ่มจากการค้นหาตามความสัมพันธ์ที่ไกลที่สุดก่อน

เมื่อถึงจุดสิ้นสุดของเส้นทาง การค้นหาจะย้อนรอยกลับไปยัง node สุดท้ายที่มีเส้นทางของความสัมพันธ์ที่ยังไม่ได้ไปค้นหา และทำการค้นหาต่อไป

ภาพเคลื่อนไหวด้านล่างแสดงวิธีการทำงานของอัลกอริทึมนี้  
โดยจะเริ่มจาก node บนสุดและไล่อ่านค่า node อื่นๆไปเรื่อยๆ

<img class='img-responsive' src='https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966'>

จะเห็นว่าทุกครั้งที่มีการอ่านค่าของ node อัลกอริธึมนี้จะไม่ไปค้นหา node ข้างๆก่อน ซึ่งแตกต่างจาก breadth-first search ที่จะไปอ่านค่าของ node ข้างๆ
แต่อัลกอริธึมนี้จะไปไปอ่านค่าของ node ใกล้เคียงที่สุดก่อน และค้นหาต่อไปตามเส้นทางนั้นจนกว่าจะไม่มี node อื่นในเส้นทางของความสัมพันธ์นั้นอีก

ในการใช้อัลกอริทึมนี้คุณจะต้องใช้ stack ซึ่งคือ array ที่ element สุดท้ายที่เพิ่มเข้ามาเป็น element แรกที่จะถูกลบออกก่อน ซึ่งเรียกอีกอย่างว่าเป็นโครงสร้างข้อมูลแบบ <dfn>Last-In-First-Out</dfn> (ข้อมูลที่เข้าไปทีหลังจะถูกดึงออกก่อน)

stack มีประโยชน์ในอัลกอริธึมแบบ depth-first search เพราะเมื่อเราเพิ่ม node ใหม่ลงใน stack เราต้องอ่านค่าของ node ที่ถูกเพิ่มเข้ามาตัวล่าสุดก่อน แล้วค่อยลบออกจาก stack

เอาต์พุตแบบง่ายๆของอัลกอริธึมนี้คือลิสต์ของ node ที่สามารถเข้าถึงได้จาก node ที่กำหนด ทำให้คุณต้องเก็บค่าว่าอ่านค่าของ node ไหนไปแล้วบ้างตามลำดับ

# --instructions--

ให้เขียนฟังก์ชัน `dfs()` ที่รับ adjacency matrix ที่ไม่มีทิศทาง เป็นพารามิเตอร์ชื่อ `graph` และรับ node เป็นพารามิเตอร์ชื่อ `root`  
ซึ่ง node `root` นี้จะเป็นตัวเลขระหว่าง `0` ถึง `n – 1` โดยที่ `n` คือจำนวน node ทั้งหมดในกราฟ

ฟังก์ชันของคุณต้องคืนค่าเป็น array ของ node ทั้งหมดที่เข้าถึงได้จาก `root`

# --hints--

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `1` จะต้องคืนค่าเป็น array ที่มีค่าเป็น `0`, `1`, `2`, และ `3`

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

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `1` จะต้องคืนค่าเป็น array ที่มี 4 element

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

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `3` จะต้องคืนค่าเป็น array ที่มีค่าเป็น `3`

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

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `3` จะต้องคืนค่าเป็น array ที่มี 1 element

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

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `3` จะต้องคืนค่าเป็น array ที่มีค่าเป็น `2` และ `3`

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

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `3` จะต้องคืนค่าเป็น array ที่มี 2 element

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

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `0` จะต้องคืนค่าเป็น array ที่มีค่าเป็น `0` และ `1`

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

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `1` จะต้องคืนค่าเป็น array ที่มี 2 element

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
