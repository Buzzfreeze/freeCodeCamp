---
id: 587d774d367417b2b2512a9e
title: Use Headings to Show Hierarchical Relationships of Content
challengeType: 0
videoUrl: "https://scrimba.com/c/cqVEktm"
forumTopicId: 301026
dashedName: use-headings-to-show-hierarchical-relationships-of-content
---

# --description--

Heading (ตั้งแต่ `h1` ถึง `h6`) เป็นส่วนสำคัญที่ช่วยกำหนดโครงสร้าง และใส่ข้อความให้กับเนื้อหาของคุณ
โดยคนที่ใช้ screen reader สามารถตั้งค่าให้อ่านเฉพาะ heading ของหน้านั้นๆได้ เพื่อที่จะให้ screen reader อ่านแค่เฉพาะภาพรวมของหน้า
แปลว่าการเลือกใช้แท็ก heading ของคุณจะต้องสัมพันธ์กับเนื้อหา ไม่ใช่แค่เลือกมาเพราะขนาด

ถ้าคุณเขียนรายงานที่มีบทนำ เนื้อหา และบทสรุป
แล้วคุณจะเอาบทสรุปไปใส่ไว้ในเนื้อหาก็คงแปลกๆใช่มั้ยล่ะ?
การใช้แท็ก heading ก็เหมือนกัน โดยคุณจะต้องแบ่งลำดับและเลือกใช้ heading ตามกลุ่มของเนื้อหานั้นให้ถูกต้อง

การใช้ heading ที่มีลำดับเท่ากัน (หรือสูงกว่า) จะเป็นการเริ่ม section ใหม่
ส่วน heading ที่มีลำดับต่ำกว่าจะสร้าง section ย่อย ไว้ใน heading ตัวก่อนหน้า

เช่น ถ้าหน้าเว็บของเรามี `h2` ตามด้วย `h4` หลายๆตัว อาจทำให้ คนที่มาอ่านหน้าเว็บโดยใช้ screen reader งงได้
การที่เรามี heading ถึง 6 แบบ อาจจะทำให้เราอยากใช้แท็กตามขนาดที่ดูแล้วสวย แต่การปรับขนาดของ heading ก็สามารถใช้ CSS ก็ได้

อีกเรื่องที่สำคัญคือ ในแต่ละหน้าควรมี `h1` element แค่ 1 อันเสมอ เพราะว่า `h1` คือส่วนที่บอกว่าเนื้อหาหลักของหน้าเว็บของคุณคืออะไร
และ search engine จะอ่านค่าของ heading เพื่อที่จะได้รู้ว่าหน้าของเรามีเนื้อหาเป็นอะไร

# --instructions--

นาย Camper Cat อยากให้หน้านี้บนเว็บของเขา พูดถึงวิธีการเป็นนินจา

ให้แก้ heading ของเว็บเขา เพื่อให้หน้าเว็บนี้ใช้ heading ได้อย่างถูกต้อง และเชื่อมโยงความเป็นเนื้อหาหลัก และเนื้อหาย่อยของเว็บของเขาได้ถูกต้อง

ให้เปลี่ยนแท็ก `h5` ทั้งหมดเป็น `h3` เพื่อเป็นการสื่อว่า เนื้อหานี้เป็นส่วน section ย่อยของแท็ก `h2`

# --hints--

โค้ดของคุณต้องมีแท็ก `h3` ทั้งหมด 6 อัน

```js
assert($("h3").length === 6);
```

โค้ดของคุณต้องมีแท็กปิดของ `h3` ทั้งหมด 6 อัน

```js
assert((code.match(/\/h3/g) || []).length === 6);
```

โค้ดของคุณต้องไม่มีแท็ก `h5` แล้ว

```js
assert($("h5").length === 0);
```

โค้ดของคุณต้องไม่มีแท็กปิดของ `h5` แล้ว

```js
assert(/\/h5/.test(code) === false);
```

# --seed--

## --seed-contents--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

# --solutions--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h3>How to Hide in Plain Sight</h3>
  <h3>How to Climb a Wall</h3>

  <h2>Learn the Art of Battle</h2>
  <h3>How to Strengthen your Body</h3>
  <h3>How to Fight like a Ninja</h3>

  <h2>Learn the Art of Living with Honor</h2>
  <h3>How to Breathe Properly</h3>
  <h3>How to Simplify your Life</h3>
</main>
```
