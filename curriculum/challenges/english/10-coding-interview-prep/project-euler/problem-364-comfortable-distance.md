---
id: 5900f4d91000cf542c50ffea
title: 'Problem 364: Comfortable distance'
challengeType: 5
forumTopicId: 302025
dashedName: problem-364-comfortable-distance
---

# --description--

มีที่นั่ง $N$ ต่อแถว คน $N$ มาตามกันเพื่อเติมที่นั่งตามกฎต่อไปนี้:

1. หากมีที่นั่งใดที่ไม่มีที่นั่งติดกัน ให้เลือกที่นั่งนั้น
2. หากไม่มีที่นั่งดังกล่าวและมีที่นั่งใดๆ ที่มีที่นั่งติดกันเพียงที่นั่งเดียว ให้เลือกที่นั่งดังกล่าว
3. มิฉะนั้น ให้ใช้หนึ่งในที่นั่งที่เหลืออยู่

ให้ $T(N)$ เป็นจำนวนความเป็นไปได้ที่ $N$ ที่นั่งจะถูกครอบครองโดย $N$ ตามกฎที่กำหนด รูปต่อไปนี้แสดง $T(4) = 8$

<img class="img-responsive center-block" alt="eight ways for N seats to be occupied by N people" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance.gif" style="background-color: white; padding: 10px;">

เราสามารถยืนยันได้ว่า $T(10) = 61\\,632$ และ $T(1\\,000)\bmod 100\\,000\\,007 = 47\\,255\\,094$

หา $T(1\\,000\\,000)\bmod 100\\,000\\,007$

# --hints--

`comfortableDistance()` ควร return `44855254`.

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
