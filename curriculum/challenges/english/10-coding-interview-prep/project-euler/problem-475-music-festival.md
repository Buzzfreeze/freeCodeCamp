---
id: 5900f5481000cf542c51005a
title: 'Problem 475: Music festival'
challengeType: 5
forumTopicId: 302152
dashedName: problem-475-music-festival
---

# --description--

นักดนตรี $12n$ คนเข้าร่วมงานเทศกาลดนตรี  
ในวันแรก พวกเขาสร้าง $3n$ quartet (วงสี่คน) และฝึกฝนทั้งวัน

ในตอนท้ายของวัน นักดนตรีทุกคนตัดสินใจว่า พวกเขาจะไม่เล่นกับสมาชิกในวงของพวกเขาอีก

ในวันที่สอง พวกเขาสร้าง $4n$ trio (วงสามคน) นักดนตรีแต่ละคนหลีกเลี่ยงคู่หูสี่คนก่อนหน้านี้

ให้ $f(12n)$ เป็นจำนวนวิธีในการจัดวง trio ในหมู่นักดนตรี $12n$

กำหนดให้ $f(12) = 576$ และ $f(24)\bmod 1\\,000\\,000\\,007 = 509\\,089\\,824$

ให้หา $f(600)\bmod 1\\,000\\,000\\,007$

# --hints--

`musicFestival()` ต้องคืนค่าเป็น `75780067`

```js
assert.strictEqual(musicFestival(), 75780067);
```

# --seed--

## --seed-contents--

```js
function musicFestival() {

  return true;
}

musicFestival();
```

# --solutions--

```js
// solution required
```
