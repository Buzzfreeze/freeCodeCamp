---
id: 5900f3e91000cf542c50fefc
title: 'Problem 125: Palindromic sums'
challengeType: 5
forumTopicId: 301752
dashedName: problem-125-palindromic-sums
---

# --description--

เลข palindrome 595 นั้นน่าสนใจ เพราะสามารถเขียนเป็นผลรวมของกำลังสองที่ต่อเนื่องกันได้: $6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2$

มี palindrome สิบเอ็ดตัวที่ต่ำกว่าหนึ่งพัน ซึ่งสามารถเขียนเป็นผลรวมกำลังสองติดต่อกัน และผลรวมของ palindrome เหล่านี้คือ 4164 จะเห็นว่าเราไม่ได้รวม $1 = 0^2 + 1^2$ เข้าไป เพราะว่าเราสนใจแค่จำนวนเต็มบวกกำลังสอง

ให้หาผลรวมของตัวเลขทั้งหมดที่น้อยกว่า $10^8$ ที่เป็นทั้ง palindrome  และสามารถเขียนเป็นผลรวมของกำลังสองที่ต่อเนื่องกันได้

# --hints--

`palindromicSums()` ต้องคนค่าเป็น `2906969179`

```js
assert.strictEqual(palindromicSums(), 2906969179);
```

# --seed--

## --seed-contents--

```js
function palindromicSums() {

  return true;
}

palindromicSums();
```

# --solutions--

```js
// solution required
```
