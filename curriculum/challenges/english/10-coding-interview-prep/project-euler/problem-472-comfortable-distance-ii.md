---
id: 5900f5451000cf542c510057
title: 'Problem 472: Comfortable Distance II'
challengeType: 5
forumTopicId: 302149
dashedName: problem-472-comfortable-distance-ii
---

# --description--

มีที่นั่ง $N$ ต่อแถว คน $N$ มาทีละคนเพื่อเติมที่นั่งตามกฎต่อไปนี้:

1. ไม่มีใครนั่งข้างกัน
1. คนแรกเลือกที่นั่งใดก็ได้
1. บุคคลต่อมาแต่ละคนเลือกที่นั่งที่ไกลที่สุดจากคนอื่นที่นั่งอยู่แล้ว ตราบใดที่ไม่ละเมิดกฎข้อที่ 1 หากมีทางเลือกมากกว่าหนึ่งตัวเลือกที่ตรงตามเงื่อนไขนี้ บุคคลนั้นจะเลือกตัวเลือกซ้ายสุด

Note that เนื่องจากกฎข้อ 1 ที่นั่งบางที่นั่งจะว่างแน่นอน และจำนวนคนสูงสุดที่สามารถนั่งได้นั้นน้อยกว่า $N$ (สำหรับ $N > 1$)

นี่คือการจัดที่นั่งที่เป็นไปได้สำหรับ $N = 15$

<img class="img-responsive center-block" alt="seating arrangements for N = 15" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance-ii.png" style="background-color: white; padding: 10px;">

เราจะเห็นว่าถ้าคนแรกเลือกถูก 15 ที่นั่งก็นั่งได้ถึง 7 คน นอกจากนี้เรายังสามารถเห็นได้ว่าคนแรกมี 9 ตัวเลือกเพื่อเพิ่มจำนวนคนที่อาจจะนั่งได้มากที่สุด

ให้ $f(N)$ เป็นจำนวนตัวเลือกที่บุคคลแรกต้องเพิ่มจำนวนผู้โดยสารสูงสุดสำหรับที่นั่ง $N$ ติดต่อกัน ดังนั้น $f(1) = 1$, $f(15) = 9$, $f(20) = 6$ และ $f(500) = 16$

นอกจากนี้ $\sum f(N) = 83$ สำหรับ $1 ≤ N ≤ 20$ และ $\sum f(N) = 13\\,343$ สำหรับ $1 ≤ N ≤ 500$

หา $\sum f(N)$ for $1 ≤ N ≤ {10}^{12}$ ให้คำตอยมี 8 หลัก

# --hints--

`comfortableDistanceTwo()` ควร return `73811586`.

```js
assert.strictEqual(comfortableDistanceTwo(), 73811586);
```

# --seed--

## --seed-contents--

```js
function comfortableDistanceTwo() {

  return true;
}

comfortableDistanceTwo();
```

# --solutions--

```js
// solution required
```
