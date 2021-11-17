---
id: 587d8256367417b2b2512c79
title: Incidence Matrix
challengeType: 1
forumTopicId: 301644
dashedName: incidence-matrix
---

# --description--

อีกวิธีหนึ่งในการแสดงกราฟคือการใส่ลงใน <dfn>incidence matrix</dfn>

<dfn>incidence matrix</dfn> คือ array สองมิติ (2D) โดยทั่วไปแล้ว incidence matrix เกี่ยวข้องกับ คลาสของ object ที่แตกต่างกันระหว่างสองมิติ เมทริกซ์ประเภทนี้คล้ายกับ adjacency matrix อย่างไรก็ตามแถวและคอลัมน์มีความหมายแตกต่างออกไปที่นี่

ในกราฟ เรามี edge และ node  สิ่งเหล่านี้จะเป็น "วัตถุสองคลาสที่แตกต่างกัน" ของเรา เมทริกซ์นี้จะมีแถวเป็น node และคอลัมน์เป็น edge  ซึ่งหมายความว่าเราสามารถมีจำนวนแถวและคอลัมน์ไม่เท่ากัน
In graphs, we have edges and nodes. These will be our "two different classes of objects". This matrix will have the rows be the nodes and columns be the edges. This means that we can have an uneven number of rows and columns.

แต่ละคอลัมน์จะแสดง edge ที่ไม่ซ้ำกัน นอกจากนี้ แต่ละ edge ยังเชื่อมต่อสอง node  เพื่อแสดงว่ามี edge ระหว่างสอง node  คุณจะต้องใส่ 1 ในสองแถวของคอลัมน์ใดคอลัมน์หนึ่ง ด้านล่างเป็นกราฟ 3  node ที่มี edge เดียวระหว่าง node  1 และ node  3

<blockquote>    1<br>   ---<br>1 | 1<br>2 | 0<br>3 | 1</blockquote>

นี่คือตัวอย่างของ `incidence matrix` ที่มี 4  edge และ 4  node  โปรดจำไว้ว่าคอลัมน์คือ edge  และแถวคือตัว node 

<blockquote>    1 2 3 4<br>   --------<br>1 | 0 1 1 1<br>2 | 1 1 0 0<br>3 | 1 0 0 1<br>4 | 0 0 1 0</blockquote>

ด้านล่างนี้เป็นการนำ JavaScript ไปใช้ในสิ่งเดียวกัน

```js
var incMat = [
  [0, 1, 1, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 1, 0]
];
```

ในการสร้างกราฟกำกับ ใช้ `-1` สำหรับ edge ที่ออกจาก node ใด node หนึ่ง และ `1` สำหรับ edge ที่เข้าสู่ node 

```js
var incMatDirected = [
  [ 0, -1,  1, -1],
  [-1,  1,  0,  0],
  [ 1,  0,  0,  1],
  [ 0,  0, -1,  0]
];
```

กราฟสามารถมี<dfn>weight</dfn>ที่ edge ได้ จนถึงตอนนี้เรามี <dfn>unweighted</dfn> edge โดยที่การมีอยู่และไม่มี edge เป็นเลขฐานสอง (`0` หรือ `1`) คุณสามารถมี weight ที่แตกต่างกันขึ้นอยู่กับการใช้งานของคุณ  weight ที่แตกต่างกันจะแสดงเป็นตัวเลขที่มากกว่า 1

# --instructions--

สร้าง incidence matrix ของกราฟแบบ undirected ที่มีห้า node และสี่ edge  เมทริกซ์นี้ควรอยู่ใน array หลายมิติ

 node ทั้งห้านี้มีความสัมพันธ์ดังต่อไปนี้  edge แรกอยู่ระหว่าง node แรกและ node ที่สอง  edge ที่สองอยู่ระหว่าง node ที่สองและสาม  edge ที่สามอยู่ระหว่าง node ที่สามและห้า  edge ที่สี่อยู่ระหว่าง node ที่สี่และที่สอง  weight  ของ edge ทั้งหมดเป็นหนึ่ง และลำดับ edge มีความสำคัญ

# --hints--

`incMatUndirected` ควรมี node แค่ 5 node เท่านั้น

```js
assert(
  incMatUndirected.length === 5 &&
    incMatUndirected
      .map(function (x) {
        return x.length === 4;
      })
      .reduce(function (a, b) {
        return a && b;
      })
);
```

ควรมี edge แรกอยู่ระหว่าง node ที่หนึ่งและสอง

```js
assert(incMatUndirected[0][0] === 1 && incMatUndirected[1][0] === 1);
```

ควรมี edge ที่สองอยู่ระหว่าง node ที่สองและสาม

```js
assert(incMatUndirected[1][1] === 1 && incMatUndirected[2][1] === 1);
```

ควรมี edge ที่สามอยู่ระหว่าง node ที่สามและห้า

```js
assert(incMatUndirected[2][2] === 1 && incMatUndirected[4][2] === 1);
```

ควรมี edge ที่สี่อยู่ระหว่าง node ที่สองและสี่

```js
assert(incMatUndirected[1][3] === 1 && incMatUndirected[3][3] === 1);
```

# --seed--

## --seed-contents--

```js
var incMatUndirected = [

];
```

# --solutions--

```js
var incMatUndirected = [[1, 0, 0, 0],[1, 1, 0, 1],[0, 1, 1, 0],[0, 0, 0, 1],[0, 0, 1, 0]];
```
