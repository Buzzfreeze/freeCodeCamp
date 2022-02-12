---
id: 596e414344c3b2872167f0fe
title: Comma quibbling
challengeType: 5
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

Comma quibbling เป็นโจทย์ที่ Eric Lippert เขียนไว้ใน [บล็อกบองเข้า](https://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx).

# --instructions--

ให้เขียนฟังก์ชันี่คืนค่าเป็นสตริง โดยเชื่อมคำที่ระบุเข้าไปตามหลักเกณฑ์นี้

<ol>
  <li>ถ้าไม่ระบุคำ ให้คืนค่าเป็น (<code>"{}"</code>)</li>
  <li>ถ้าระบุหนึ่งคำ เช่น <code>["ABC"]</code> จะคืนค่าเป็น <code>"{ABC}"</code></li>
  <li>ถ้าระบุสองคำ เช่น <code>["ABC", "DEF"]</code> จะคืนค่าเป็นคำที่คั่นด้วย <code>" and "</code> เช่น <code>"{ABC and DEF}"</code></li>
  <li>ถ้าระบุมากกว่าสองคำ เช่น <code>["ABC", "DEF", "G", "H"]</code> จะคืนค่าเป็นคำที่คั่นด้วย <code>", "</code> แต่จะคั่นคำสุดท้ายด้วย <code>" and "</code> และครอบข้อความทั้งหมดไว้ในปีกกา <code>"{ABC, DEF, G and H}"</code></li>
</ol>

ให้ลองทดสอบฟังก์ชันด้วยชุดข้อมูลนี้:

<ul>
  <li>[] # (No input words).</li>
  <li>["ABC"]</li>
  <li>["ABC", "DEF"]</li>
  <li>["ABC", "DEF", "G", "H"]</li>
</ul>

**Note:** ในการทำสอบจะถือว่า string ทุกตัวมีข้อความอยู่ด้านใน และตัวอักษรทั้งหมดจะเป็นตัวพิมพ์ใหญ่

# --hints--

`quibble` ต้องเป็นฟังก์ชัน

```js
assert(typeof quibble === 'function');
```

`quibble(["ABC"])` ต้องคืนค่าเป็นสตริง

```js
assert(typeof quibble(['ABC']) === 'string');
```

`quibble([])` ต้องคืนค่าเป็น "{}"

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["ABC"])` ต้องคืนค่าเป็น "{ABC}"

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["ABC", "DEF"])` ต้องคืนค่าเป็น "{ABC and DEF}"

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["ABC", "DEF", "G", "H"])` ต้องคืนค่าเป็น "{ABC,DEF,G and H}"

```js
assert.equal(quibble(testCases[3]), results[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC,DEF,G and H}"];
```

## --seed-contents--

```js
function quibble(words) {

  return true;
}
```

# --solutions--

```js
function quibble(words) {
  return "{" +
    words.slice(0, words.length - 1).join(",") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}
```
