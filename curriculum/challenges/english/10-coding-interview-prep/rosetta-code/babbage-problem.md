---
id: 594db4d0dedb4c06a2a4cefd
title: Babbage problem
challengeType: 5
forumTopicId: 302229
dashedName: babbage-problem
---

# --description--

[Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage "wp: Charles_Babbage"), 
ได้เจอปัญหานี้

<blockquote>
  จำนวนเต็มบวกที่น้อยที่สุด ที่มีผลลัพธ์ของค่ายกกำลังสองลงท้ายด้วย 269,696 คือเลขอะไร?
  <footer style='margin-left: 2em;'>Babbage, letter to Lord Bowden, 1837; see Hollingdale and Tootill, <i>Electronic Computers</i>, second edition, 1970, p. 125.</footer>
</blockquote>

เขาคิดว่าคำตอบอาจเป็น 99,736 ซึ่งกำลังสองคือ 9,947,269,696 แต่เขาไม่แน่ใจในคำตอบของตัวเอง

ภารกิจคือค้นหาว่า Babbage มีคำตอบที่ถูกต้องหรือไม่

# --instructions--

ให้เขียนฟังก์ชันเพื่อหาว่าเลขที่ Babbage ต้องการคือเลขอะไร

# --hints--

`babbage` ต้องเป็นฟังก์ชัน

```js
assert(typeof babbage === 'function');
```

ผลลัพธ์ของ `babbage(99736, 269696)` ต้องไม่ใช้ 99736 (ต้องได้น้อยกว่านี้)

```js
assert.equal(babbage(babbageAns, endDigits), answer);
```

# --seed--

## --after-user-code--

```js
const babbageAns = 99736;
const endDigits = 269696;
const answer = 25264;
```

## --seed-contents--

```js
function babbage(babbageNum, endDigits) {

  return true;
}
```

# --solutions--

```js
function babbage(babbageAns, endDigits) {
  const babbageNum = Math.pow(babbageAns, 2);
  const babbageStartDigits = parseInt(babbageNum.toString().replace('269696', ''));
  let answer = 99736;

  // count down from this answer and save any sqrt int result. return lowest one
  for (let i = babbageStartDigits; i >= 0; i--) {
    const num = parseInt(i.toString().concat('269696'));
    const result = Math.sqrt(num);
    if (result === Math.floor(Math.sqrt(num))) {
      answer = result;
    }
  }

  return answer;
}
```
