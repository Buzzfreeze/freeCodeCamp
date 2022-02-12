---
id: 587d8253367417b2b2512c6a
title: Typed Arrays
challengeType: 1
forumTopicId: 301716
dashedName: typed-arrays
---

# --description--

Array คือ JavaScript object ที่สามารถมี element ข้างในได้หลายตัว

```js
var complexArr = [1, 5, "2", "Word", {"name": "James"}];
```

โดยทั่วไปสิ่งที่เกิดขึ้นหลังบ้านคือเบราว์เซอร์ของคุณจะให้พื้นที่หน่วยความจำตามขนาดของ array โดยอัตโนมัติ ซึ่งจะเปลี่ยนแปลงตามความจำเป็นถ้าคุณเพิ่มหรือลบข้อมูลออกจาก array

แต่ในการเพิ่มประสิทธิภาพ และประเภทของ element ที่ต่างกัน บางครั้งคุณจำเป็นต้องเจาะจงมากขึ้นว่าหน่วยความจำที่ให้กับ array นั้นมีจำนวนเท่าใด

<dfn>Typed array</dfn> คือคำตอบของปัญหานี้ ตอนนี้คุณสามารถบอกจำนวนหน่วยความจำที่คุณต้องการให้ array ได้ ด้านล่างนี้คือภาพรวมพื้นฐานของ array ประเภทต่างๆ ที่มีอยู่ และขนาดเป็นไบต์สำหรับแต่ละ element ใน array นั้น

<table class='table table-striped'><tbody><tr><th>Type</th><th>Each element size in bytes</th></tr><tr><td><code>Int8Array</code></td><td>1</td></tr><tr><td><code>Uint8Array</code></td><td>1</td></tr><tr><td><code>Uint8ClampedArray</code></td><td>1</td></tr><tr><td><code>Int16Array</code></td><td>2</td></tr><tr><td><code>Uint16Array</code></td><td>2</td></tr><tr><td><code>Int32Array</code></td><td>4</td></tr><tr><td><code>Uint32Array</code></td><td>4</td></tr><tr><td><code>Float32Array</code></td><td>4</td></tr><tr><td><code>Float64Array</code></td><td>8</td></tr></tbody></table>

มีสองวิธีในการสร้าง array ประเภทนี้ วิธีหนึ่งคือการสร้างโดยตรง ด้านล่างนี้คือวิธีสร้าง `Int16Array` ที่มี element 3 ตัว

```js
var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]
```

คุณยังสามารถสร้าง <dfn>buffer</dfn> เพื่อกำหนดจำนวนข้อมูล (เป็น bytes) ที่คุณต้องการให้ array ใช้ได้ด้วย

**หมายเหตุ**
ในการสร้าง typed array โดยใช้ buffer คุณต้องกำหนดจำนวน byte ให้เป็นตัวคูณของจำนวน byte ในตารางด้านบน

```js
// สร้าง array Int16Array อีกวิธีหนึ่ง
var byteSize = 6; // ต้องเป็นตัวคูณของ 2 (หาร 2 ลงตัว)
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // คืนค่าเป็น 6
i8View.byteLength; // คืนค่าเป็น 6
console.log(i8View); // คืนค่าเป็น [0, 0, 0]
```

<dfn>buffer</dfn> เป็น object เพื่อวัตถุประสงค์ทั่วไปที่มีหน้าที่เก็บข้อมูล ซึ่งคุณไม่สามารถเข้าถึง buffer ได้แบบปกติ ในการเข้าถึง buffer คุณต้องสร้าง <dfn>view</dfn> ก่อน

```js
i8View[0] = 42;
console.log(i8View); // คืนค่าเป็น [42, 0, 0]
```

**หมายเหตุ**
 Typed array ไม่มี method บางอย่างที่ array ปกติมี เช่น `.pop()` หรือ `.push()` และ Typed array ยังใช้ `Array.isArray()` เพื่อตรวจสอบว่าข้อมูลนั้นเป็น array ไม่ได้ 
 ถึงแม้ว่าจะมีฟังก์ชันน้อยกว่า แต่สิ่งนี้อาจเป็นข้อได้เปรียบสำหรับการนำไปใช้ใน JavaScript engine ที่ซับซ้อนน้อยกว่า

# --instructions--

ขั้นแรกให้สร้าง `buffer` ที่มีขนาด 64 byte จากนั้นสร้าง typed array `Int32Array` ด้วย view ที่เรียกว่า `i32View`

# --hints--

`buffer` ของคุณควรมีขนาด 64 byte

```js
assert(buffer.byteLength === 64);
```

View ที่ชื่อว่า `i32View` ของคุณควรมีขนาด 64 byte

```js
assert(i32View.byteLength === 64);
```

View ที่ชื่อว่า `i32View` ของ buffer ของคุณควรมีความยาว 16 element

```js
assert(i32View.length === 16);
```

# --seed--

## --seed-contents--

```js
var buffer;
var i32View;
```

# --solutions--

```js
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
```
