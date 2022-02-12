---
id: 587d8255367417b2b2512c75
title: Create a Circular Queue
challengeType: 1
forumTopicId: 301625
dashedName: create-a-circular-queue
---

# --description--

ในแบบทดสอบนี้ คุณจะต้องสร้าง Circular Queue ซึ่งก็คือ queue ที่g,เมืลงข้อมูลไปจนถึงตำแหน่งสุดท้ายแล้ว จะกลับมาลงข้อมูลทับตำแหน่งแรกต่อ และวนไปได้เรื่อยๆ โครงสร้างข้อมูลประเภทนี้มีประโยชน์ในบางสถานการณ์ ตัวอย่างเช่น สามารถใช้ circular queue สำหรับการสตรีม media และเมื่อ queue เต็มข้อมูลของ media ใหม่จะเขียนทับข้อมูลเก่า

เราจะแสดงรูปแบบของโครงสร้างข้อมูลนี้ด้วย array ที่มีจำนวนข้อมูลเป็น `5`:

```js
[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
```

ตรงนี้ทั้ง read และ write จะอยู่ที่ตำแหน่ง `0` แล้วทีนี้ queue ได้บันทึก 3 ค่าใหม่ คือ `a`, `b`, และ `c` ทำให้ queue ของเราจะหน้าตาเป็นแบบนี้:

```js
[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
```

เมื่อ read pointer ทำการอ่านข้อมูลแล้ว จะลบข้อมูลที่อ่านแล้ว หรือยังเก็บข้อมูลไว้ก็ได้ (ในโค้ดตัวอย่างจะลบข้อมูลที่อ่านแล้ว):

```js
[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
```

ทีนี้เราเขียนค่า `d`, `e`, และ `f` ไปยัง queue เมื่อเราเขียนไปที่ตำแหน่งสิ้นสุดของ array แล้ว จึงวนกลับมายังจุดเริ่มต้นใหม่

```js
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
```

วิธีนี้จะกำหนดปริมาณหน่วยความจำที่ใช้ได้ แต่จะทำให้ให้ประมวลผลไฟล์ที่มีขนาดใหญ่กว่าขนาดหน่วยความจำที่กำหนดไว้ได้

# --instructions--


ในแบบทดสอบนี้ เราจะใช้ circular queue ซึ่งต้องมี method `enqueue` และ `dequeue` ที่ใช้อ่านและเขียน queue ได้ โดย constructor ของคลาสต้องรับค่า argument เป็นจำนวนเต็มเพื่อระบุขนาดของ queue 
เราได้เขียนคลาสนี้ให้คุณใน code editor ไว้บางส่วนแล้ว

เมื่อคุณ enqueue รายการใน queue แล้ว write pointer ควรเลื่อนไปข้างหน้า และเมื่อถึงจุดสิ้นสุดของ queue ควรวนกลับมาที่จุดเริ่มต้น method `enqueue` ควรคืนค่าเป็นรายการที่คุณ enqueue หากทำสำเร็จ ถ้าไม่สำเร็จให้คืนค่าเป็น `null`

dequeue ก็จะเป็นแบบเดียวกัน โดย read pointer ควรเลื่อนไปข้างหน้าเมื่อคุณ dequeue รายการ และเมื่อคุณ dequeue รายการควรคืนค่าเป็นรายการนั้น หากคุณไม่สามารถ dequeue รายการได้ ต้องคืนค่าเป็น `null`

ห้ามให้ write pointer เขียนข้อมูลนำ read pointer (คลาสของเราจะไม่อนุญาตให้คุณเขียนทับข้อมูลที่ยังไม่ได้อ่าน) และ read pointer ไม่ควรอ่านค่าที่ยังไม่ได้เขียนลงไปได้

# --hints--

method `enqueue` ต้องเพิ่มข้อมูลไปใน circular queue

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

method `enqueue` ต้องไม่เขียนทับข้อมูลที่ยังไม่ได้อ่าน

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    test.enqueue(13);
    test.enqueue(25);
    test.enqueue(59);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

method `dequeue` ต้อง dequeue ข้อมูลจาก queue

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591
    );
  })()
);
```

หลังจากได้ dequeue ข้อมูลไปแล้ว ตำแหน่งของข้อมูลนั้นใน queue ต้องกลายเป็น `null`

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(672);
    test.dequeue();
    test.dequeue();
    var print = test.print();
    return print[0] === null && print[1] === null && print[2] === 672;
  })()
);
```

การพยายาม dequeue ที่ทำให้ write pointer แซง read pointer ต้องคืนค่าเป็น `null` และต้องไม่เขียนทับข้อมูลที่ยังไม่ได้อ่าน

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 &&
      test.dequeue() === 32 &&
      test.dequeue() === 591 &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.enqueue(100) === 100 &&
      test.dequeue() === 100
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

    // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  }

  dequeue() {
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

    // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  }
}
```

# --solutions--

```js
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
    console.log(this.write, this.max);
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) {
        this.write = 0;
      }
      return item;
    }
    return null;
    // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  }

  dequeue() {
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
    if (this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) {
        this.read = 0;
      }
      return item;
    }
    return null;
    // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  }
}
```
