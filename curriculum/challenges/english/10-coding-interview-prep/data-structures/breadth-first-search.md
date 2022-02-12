---
id: 587d825c367417b2b2512c90
title: Breadth-First Search
challengeType: 1
forumTopicId: 301622
dashedName: breadth-first-search
---

# --description--

จนถึงตอนนี้ เราได้เรียนรู้วิธีต่างๆในการเก็บข้อมูลของกราฟไปแล้ว แล้วยังไงต่อล่ะ?  

คำถามทั่วไปข้อหนึ่งที่ต้องมีคือ ระยะห่างระหว่าง node สอง node ในกราฟเป็นเท่าไหร่?  
ได้เวลาของ <dfn>graph traversal algorithm</dfn> แล้ว 

<dfn>Traversal algorithm</dfn> เป็นอัลกอริธึมในการสำรวจหรือหา node ในกราฟ  
โดย breadth-first search เป็น traversal algorithm แบบหนึ่ง 

อัลกอริธึมนี้เริ่มต้นที่ node เดียวและค้นหาไปยัง node ข้างๆ ทั้งหมดที่อยู่ติดกัน จากนั้นจะไปหา node ข้างๆ ของแต่ละรายไปเรื่อยๆ จนกว่าจะครบทุก node

โครงสร้างข้อมูลที่สำคัญที่จะช่วยให้นำอัลกอริธึม breadth-first search มาใช้ได้คือ queue  
queue คือ array ที่คุณสามารถเพิ่ม element เข้าไปด้านหนึ่งและลบ element อีกด้านหนึ่งได้ โครงสร้างข้อมูลแบบนี้เรียกว่าแบบ <dfn>FIFO</dfn> หรือ <dfn>First-In-First-Out</dfn> (ข้อมูลที่เข้าไปก่อนก็จะถูกดึงออกมาก่อน)

ลองมาดูให้เห็นภาพกันว่าอัลกอริธึมนี้ทำงานอย่างไร [การเคลื่อนที่ไปบน tree ของ Breadth first search algorithm](https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966)

ส่วนที่แรเงาสีเทาหมายถึง node ที่ถูกเพิ่มเข้าไปใน queue และส่วนที่แรเงาสีดำหมายถึง node ที่ถูกลบออกจาก queue คุณจะเห็นว่าทุกครั้งที่ node ถูกลบออกจาก queue (node เปลี่ยนเป็นสีดำ) แล้ว node ที่อยู่ติดกันทั้งหมดจะถูกเพิ่มเข้าไปใน queue แบบไหน ( node เปลี่ยนเป็นสีเทา)

ในการใช้อัลกอริทึมนี้ คุณจะต้องป้อนโครงสร้างกราฟและ node ที่คุณต้องการเริ่มใช้

อันดับแรก คุณจะต้องทราบระยะห่างจาก node เริ่มต้นก่อน โดยคุณจะต้องเริ่มจากตัวเลขมากๆ เช่น `Infinity` ซึ่งจะป้องกันปัญหาในกรณีที่เข้าถึง node จาก node เริ่มต้นไม่ได้   
ต่อไปคุณจะต้องเริ่มหาจาก node เริ่มต้นไปยัง node ที่ติดกัน โดย node ที่ติดกันเหล่านี้อยู่ห่างออกไปหนึ่งความสัมพันธ์ และเมื่อถึงจุดนี้ คุณควรเพิ่มระยะทางหนึ่งหน่วยให้กับระยะทางที่คุณกำลังดูอยู่

# --instructions--

ให้เขียนฟังก์ชัน `bfs()` ที่ใช้ adjacency matrix (array สองมิติ) และ node ที่เป็น root เป็นพารามิเตอร์ 
ค่าของ node จำเป็นจำนวนเต็มตั้งแต่ `0` ไปจนถึง `n – 1` โดยที่ `n` คือจำนวน node ทั้งหมดในกราฟ

ฟังก์ชันของคุณจะต้องคืนค่าเป็น JavaScript object ที่เป็น key-value pairs ที่มี key เป็น node และ value เป็นระยะห่างจาก root 

node ที่ไม่สามารถเข้าถึงได้ ต้องมีระยะห่างเป็น `Infinity`

# --hints--

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `1` จะต้องคืนค่าเป็น `{0: 1, 1: 0, 2: 1, 3: 2}`

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    var results = bfs(graph, 1);
    return isEquivalent(results, { 0: 1, 1: 0, 2: 1, 3: 2 });
  })()
);
```

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `1` จะต้องคืนค่าเป็น `{0: 1, 1: 0, 2: 1, 3: Infinity}`

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    var results = bfs(graph, 1);
    return isEquivalent(results, { 0: 1, 1: 0, 2: 1, 3: Infinity });
  })()
);
```

ถ้าใส่ค่า `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `0` จะต้องคืนค่าเป็น `{0: 0, 1: 1, 2: 2, 3: 3}`

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    var results = bfs(graph, 0);
    return isEquivalent(results, { 0: 0, 1: 1, 2: 2, 3: 3 });
  })()
);
```

ถ้าใส่ค่า `[[0, 1], [1, 0]]` เข้าไปในฟังก์ชัน โดยให้ node เริ่มต้นเป็น `0` จะต้องคืนค่าเป็น `{0: 0, 1: 1}`

```js
assert(
  (function () {
    var graph = [
      [0, 1],
      [1, 0]
    ];
    var results = bfs(graph, 0);
    return isEquivalent(results, { 0: 0, 1: 1 });
  })()
);
```

# --seed--

## --after-user-code--

```js
// Source: http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    // If we made it this far, objects
    // are considered equivalent
    return true;
}
```

## --seed-contents--

```js
function bfs(graph, root) {
  var nodesLen = {};

  return nodesLen;
};

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));
```

# --solutions--

```js
function bfs(graph, root) {
  var nodesLen = {};
  // Set all distances to infinity
  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0; // ...except root node
  var queue = [root]; // Keep track of nodes to visit
  var current; // Current node traversing
  // Keep on going until no more nodes to traverse
  while (queue.length !== 0) {
    current = queue.shift();
    // Get adjacent nodes from current node
    var curConnected = graph[current]; // Get layer of edges from current
    var neighborIdx = []; // List of nodes with edges
    var idx = curConnected.indexOf(1); // Get first edge connection
    while (idx !== -1) {
      neighborIdx.push(idx); // Add to list of neighbors
      idx = curConnected.indexOf(1, idx + 1); // Keep on searching
    }
    // Loop through neighbors and get lengths
    for (var j = 0; j < neighborIdx.length; j++) {
      // Increment distance for nodes traversed
      if (nodesLen[neighborIdx[j]] === Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]); // Add new neighbors to queue
      }
    }
  }
  return nodesLen;
}
```
