---
id: 587d8253367417b2b2512c6a
title: Typed Arrays
challengeType: 1
forumTopicId: 301716
dashedName: typed-arrays
---

# --description--

Array คือ JavaScript object ที่สามารถมี element ที่หลากหลายในนั้น

```js
var complexArr = [1, 5, "2", "Word", {"name": "James"}];
```

โดยทั่วไปสิ่งที่เกิดขึ้นในหลังบ้านคือเบราว์เซอร์ของคุณจะให้พื้นที่หน่วยความจำในปริมาณที่เหมาะสมสำหรับ array นั้นโดยอัตโนมัติ นอกจากนี้ยังจะเปลี่ยนแปลงตามความจำเป็นหากคุณเพิ่มหรือลบข้อมูลใดๆ

อย่างไรก็ตาม ในด้านของประสิทธิภาพสูงและ element ประเภทต่างๆ บางครั้งคุณจำเป็นต้องเจาะจงมากขึ้นว่าหน่วยความจำที่ให้กับ array นั้นมีจำนวนเท่าใด

<dfn>Typed arrays</dfn> คือคำตอบของปัญหานี้ ตอนนี้คุณสามารถบอกจำนวนหน่วยความจำที่คุณต้องการให้ array ได้ ด้านล่างนี้คือภาพรวมพื้นฐานของ array ประเภทต่างๆ ที่มีอยู่ และขนาดเป็นไบต์สำหรับแต่ละ element ใน array นั้น

<table class='table table-striped'><tbody><tr><th>Type</th><th>Each element size in bytes</th></tr><tr><td><code>Int8Array</code></td><td>1</td></tr><tr><td><code>Uint8Array</code></td><td>1</td></tr><tr><td><code>Uint8ClampedArray</code></td><td>1</td></tr><tr><td><code>Int16Array</code></td><td>2</td></tr><tr><td><code>Uint16Array</code></td><td>2</td></tr><tr><td><code>Int32Array</code></td><td>4</td></tr><tr><td><code>Uint32Array</code></td><td>4</td></tr><tr><td><code>Float32Array</code></td><td>4</td></tr><tr><td><code>Float64Array</code></td><td>8</td></tr></tbody></table>

มีสองวิธีในการสร้าง array ประเภทนี้ วิธีหนึ่งคือการสร้างโดยตรง ด้านล่างนี้คือวิธีสร้าง `Int16Array` 3 ความยาว

```js
var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]
```

คุณยังสามารถสร้าง <dfn>buffer</dfn> เพื่อกำหนดจำนวนข้อมูล (เป็น bytes) ที่คุณต้องการให้ array ใช้

**หมายเหตุ**
ในการสร้าง typed array โดยใช้บัฟเฟอร์ คุณต้องกำหนดจำนวน bytes ให้มีหลาย bytes ตามลิสต์ด้านบน

```js
// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]
```

<dfn>buffer</dfn> เป็น object เพื่อวัตถุประสงค์ทั่วไปเพื่อนำข้อมูลไปใช้ คุณไม่สามารถเข้าถึงได้ตามปกติ ในการเข้าถึง คุณต้องสร้าง <dfn>view</dfn> ก่อน
<dfn>Buffers</dfn> are general purpose objects that just carry data. You cannot access them normally. To access them, you need to first create a <dfn>view</dfn>.

```js
i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
```

**หมายเหตุ**
 Typed array ไม่มี method บางอย่างที่ array ดั้งเดิมมี เช่น `.pop()` หรือ `.push()`  Typed array ยังใช้ `Array.isArray()` เพื่อตรวจสอบว่ามีหรือไม่มีบางสิ่งเป็น array ไม่ได้ แต่สิ่งนี้อาจเป็นข้อได้เปรียบสำหรับ JavaScript engine ที่มีความซับซ้อนน้อยกว่าในการใช้งาน

# --instructions--

ขั้นแรกให้สร้าง `buffer` ที่มีขนาด 64 bytes จากนั้นสร้าง typed array `Int32Array` ด้วย view ที่เรียกว่า `i32View`

# --hints--

`buffer` ของคุณควรมีขนาด 64 bytes

```js
assert(buffer.byteLength === 64);
```

View ที่ชื่อว่า `i32View` ของคุณควรมีขนาด 64 bytes

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
