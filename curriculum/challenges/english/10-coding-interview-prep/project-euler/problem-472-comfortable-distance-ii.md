---
id: 5900f5451000cf542c510057
title: 'Problem 472: Comfortable Distance II'
challengeType: 5
forumTopicId: 302149
dashedName: problem-472-comfortable-distance-ii
---

# --description--

มีที่นั่ง $N$ ที่ในหนึ่งแถว คนจำนวน $N$ คน มาทีละคนเพื่อนั่งตามกฏนี้:

1. ไม่มีใครนั่งข้างกัน
1. คนแรกเลือกที่นั่งใดก็ได้
1. บุคคลต่อมาแต่ละคนเลือกที่นั่งที่ไกลที่สุด จากคนอื่นที่นั่งอยู่แล้ว ตราบใดที่ไม่ละเมิดกฎข้อที่ 1 หากมีเก้าอี้ที่เลือกได้มากกว่าหนึ่งตัวที่ตรงตามเงื่อนไขนี้ บุคคลนั้นจะเลือกเก้าอี้ตัวซ้ายสุด

จะเห็นว่า เนื่องจากกฎข้อ 1 ที่นั่งบางที่นั่งจะว่างแน่นอน และจำนวนคนสูงสุดที่สามารถนั่งได้นั้นน้อยกว่า $N$ (สำหรับ $N > 1$)

นี่คือการจัดที่นั่งที่เป็นไปได้สำหรับ $N = 15$

<img class="img-responsive center-block" alt="seating arrangements for N = 15" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance-ii.png" style="background-color: white; padding: 10px;">

เราจะเห็นว่าถ้าคนแรกเลือกถูก 15 ที่นั่งก็นั่งได้ถึง 7 คน นอกจากนี้เรายังสามารถเห็นได้ว่าคนแรกมี 9 ตัวเลือกเพื่อเพิ่มจำนวนคนที่อาจจะนั่งได้มากที่สุด

ให้ $f(N)$ เป็นจำนวนตัวเลือก ที่บุคคลแรกมี เพื่อเพิ่มจำนวนผู้นั่งสูงสุดสำหรับที่นั่ง $N$ ตัวในแถว 

ดังนั้น $f(1) = 1$, $f(15) = 9$, $f(20) = 6$ และ $f(500) = 16$

นอกจากนี้ $\sum f(N) = 83$ เมื่อ $1 ≤ N ≤ 20$ และ $\sum f(N) = 13\\,343$ เมื่อ $1 ≤ N ≤ 500$

ให้หา $\sum f(N)$ เมื่อ $1 ≤ N ≤ {10}^{12}$ โดยตอบเป็นเลขแปดหลักสุดท้าย

# --hints--

`comfortableDistanceTwo()` ต้องคืนค่าเป็น `73811586`

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
