---
id: 5900f4d91000cf542c50ffea
title: 'Problem 364: Comfortable distance'
challengeType: 5
forumTopicId: 302025
dashedName: problem-364-comfortable-distance
---

# --description--

มีที่นั่ง $N$ ในหนึ่งแถว  
คน $N$ มาตามกันเพื่อนั่งตามกฎต่อไปนี้:

1. หากมีที่นั่งใดที่ไม่มีคนนั่งข้างๆ ให้เลือกที่นั่งนั้น
2. หากไม่มีที่นั่งดังกล่าวและมีที่นั่งใดๆ ที่มีคนนั่งข้างๆแค่คนเดียว ให้เลือกที่นั่งนั้น
3. ไม่อย่างนั้น ให้นั้นที่นั้นที่เหลืออยู่

ให้ $T(N)$ เป็นจำนวนความเป็นไปได้ที่ $N$ ที่นั่งจะถูกนั่งโดย $N$ ตามกฎที่กำหนด รูปต่อไปนี้แสดง $T(4) = 8$

<img class="img-responsive center-block" alt="eight ways for N seats to be occupied by N people" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance.gif" style="background-color: white; padding: 10px;">

ให้ $T(10) = 61\\,632$ และ $T(1\\,000)\bmod 100\\,000\\,007 = 47\\,255\\,094$

ให้หา $T(1\\,000\\,000)\bmod 100\\,000\\,007$

# --hints--

`comfortableDistance()` ต้องคืนค่าเป็น `44855254`

```js
assert.strictEqual(comfortableDistance(), 44855254);
```

# --seed--

## --seed-contents--

```js
function comfortableDistance() {

  return true;
}

comfortableDistance();
```

# --solutions--

```js
// solution required
```
