---
id: 594db4d0dedb4c06a2a4cefd
title: Babbage problem
challengeType: 5
forumTopicId: 302229
dashedName: babbage-problem
---

# --description--

[Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage "wp: Charles_Babbage"), 
มองไปข้างหน้าถึงปัญหาต่างๆ ที่เครื่องมือวิเคราะห์ของเขาจะสามารถแก้ไขได้ โดยยกตัวอย่างดังนี้:

<blockquote>
  What is the smallest positive integer whose square ends in the digits 269,696?
  <footer style='margin-left: 2em;'>Babbage, letter to Lord Bowden, 1837; see Hollingdale and Tootill, <i>Electronic Computers</i>, second edition, 1970, p. 125.</footer>
</blockquote>

เขาคิดว่าคำตอบอาจเป็น 99,736 ซึ่งกำลังสองคือ 9,947,269,696 แต่เขาไม่แน่ใจ

ภารกิจคือค้นหาว่า Babbage มีคำตอบที่ถูกต้องหรือไม่

# --instructions--

ใช้ฟังก์ชันเพื่อคืนค่าจำนวนเต็มที่ต่ำที่สุดที่ตรงกับปัญหาแบบ Babbage ถ้าแบบเบจพูดถูก คำตอบต้อง return ในรูปของ Babbage 

# --hints--

`babbage` ควรเป็น function.

```js
assert(typeof babbage === 'function');
```

`babbage(99736, 269696)` ไม่ควร return 99736 (มีคำตอบที่น้อยกว่า)

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
