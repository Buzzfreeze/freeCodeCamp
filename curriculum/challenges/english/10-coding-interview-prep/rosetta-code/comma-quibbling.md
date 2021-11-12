---
id: 596e414344c3b2872167f0fe
title: Comma quibbling
challengeType: 5
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

Comma quibbling เป็นงานที่ Eric Lippert กำหนดไว้ใน [blog](https://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx).

# --instructions--

เขียนฟังก์ชันเพื่อสร้างoutput string ซึ่งเป็นการรวมคำ input จาก list/sequence โดยที่:

<ol>
  <li>An input of no words produces the output string of just the two brace characters (<code>"{}"</code>)</li>
  <li>An input of just one word, e.g. <code>["ABC"]</code>, produces the output string of the word inside the two braces, e.g. <code>"{ABC}"</code></li>
  <li>An input of two words, e.g. <code>["ABC", "DEF"]</code>, produces the output string of the two words inside the two braces with the words separated by the string <code>" and "</code>, e.g. <code>"{ABC and DEF}"</code></li>
  <li>An input of three or more words, e.g. <code>["ABC", "DEF", "G", "H"]</code>, produces the output string of all but the last word separated by <code>", "</code> with the last word separated by <code>" and "</code> and all within braces; e.g. <code>"{ABC, DEF, G and H}"</code></li>
</ol>

Test function ด้วยชุดข้อมูลต่อไปนี้ที่แสดงผลลัพธ์ของคุณที่นี่ในหน้านี้:

<ul>
  <li>[] # (No input words).</li>
  <li>["ABC"]</li>
  <li>["ABC", "DEF"]</li>
  <li>["ABC", "DEF", "G", "H"]</li>
</ul>

**Note:** สมมติว่าคำเป็น non-empty strings ตัวพิมพ์ใหญ่

# --hints--

`quibble` ควรเป็น function.

```js
assert(typeof quibble === 'function');
```

`quibble(["ABC"])` ควร return string.

```js
assert(typeof quibble(['ABC']) === 'string');
```

`quibble([])` ควร return "{}".

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["ABC"])` ควร return "{ABC}".

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["ABC", "DEF"])` ควร return "{ABC and DEF}".

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["ABC", "DEF", "G", "H"])` ควร return "{ABC,DEF,G and H}".

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
