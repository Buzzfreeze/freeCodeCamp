---
id: 5e94a54cc7b022105bf0fd2c
title: Word frequency
challengeType: 5
forumTopicId: 393913
dashedName: word-frequency
---

# --description--

กำหนดให้มีสตริง `txt` และจำนวนเต็ม `n` ให้คืนค่าเป็น array ของคำที่พบบ่อยที่สุดในสตริง `n` คำแรก โดยเรียกจากมากไปน้อย

# --instructions--

ให้เขียนฟังก์ชันที่รับสตริง `txt` และจำนวนเต็ม `n` โดยให้คืนค่าเป็น array ของคำที่พบบ่อยที่สุดในสตริง `n` คำแรก โดยเรียกจากมากไปน้อย

ต้องคืนค่าเป็น array โดยแต่ละ element ของ array ต้องเป็น array ย่อยที่มีลักษณะดังนี้ `[word, freq]` โดย `word` ควรเป็นตัวพิมพ์เล็กของคำ และ `freq` เป็นจำนวนครั้งที่มีคำนั้นในสตริง

ถ้าไม่ส่งสตริงเข้าไป ต้องคืนค่าเป็น array ว่าง

ให้มองสตริงเป็นแบบ case-insensitive เช่น สตริง "Hello" และ "hello" จะถือว่าเป็นตัวเดียวกัน

เช่น ถ้าส่งสตริง "Hello hello goodbye" เข้าไปในฟังก์ชัน จะต้องคืนค่าเป็น `[['hello', 2], ['goodbye', 1]]`

# --hints--

`wordFrequency` ต้องเป็นฟังก์ชั

```js
assert(typeof wordFrequency == 'function');
```

`wordFrequency` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(wordFrequency('test')));
```

`wordFrequency("Hello hello world", 2)` ต้องคืนค่าเป็น `[['hello', 2], ['world', 1]]`

```js
assert.deepEqual(wordFrequency(example_1, 2), example_1_solution);
```

`wordFrequency("The quick brown fox jumped over the lazy dog", 1)` ต้องคืนค่าเป็น `[['the', 2]]`

```js
assert.deepEqual(wordFrequency(example_2, 1), example_2_solution);
```

`wordFrequency("Opensource opensource open-source open source", 1)` ต้องคืนค่าเป็น `[['opensource', 2]]`

```js
assert.deepEqual(wordFrequency(example_3, 1), example_3_solution);
```

`wordFrequency("Apple App apply aPP aPPlE", 3)` ต้องคืนค่าเป็น `[['app', 2], ['apple', 2], ['apply', 1]]` หรือ `[['apple', 2], ['app', 2], ['apply', 1]]`

```js
const arr = JSON.stringify(wordFrequency(example_4, 3));
assert(arr === example_4_solution_a || arr === example_4_solution_b);
```

`wordFrequency("c d a d c a b d d c", 4)` ต้องคืนค่าเป็น `[['d', 4], ['c', 3], ['a', 2], ['b', 1]]`

```js
assert.deepEqual(wordFrequency(example_5, 4), example_5_solution);
```

`wordFrequency("", 5)` ต้องคืนค่าเป็น `[]`

```js
assert.deepEqual(wordFrequency(example_6, 5), example_6_solution);
```

# --seed--

## --before-user-code--

```js
var example_1 = 'Hello hello world';
var example_1_solution = [['hello', 2], ['world', 1]];
var example_2 = 'The quick brown fox jumped over the lazy dog';
var example_2_solution = [['the', 2]];
var example_3 = 'Opensource opensource open-source open source';
var example_3_solution = [['opensource', 2]];
var example_4 = 'Apple App apply aPP aPPlE';
var example_4_solution_a = "[[\"app\",2],[\"apple\",2],[\"apply\",1]]";
var example_4_solution_b = "[[\"apple\",2],[\"app\",2],[\"apply\",1]]";
var example_5 = 'c d a d c a b d d c';
var example_5_solution = [['d', 4], ['c', 3], ['a', 2], ['b', 1]];
var example_6 = '';
var example_6_solution = [];
```

## --seed-contents--

```js
function wordFrequency(txt, n) {

}
```

# --solutions--

```js
function wordFrequency(txt, n) {
  var words = txt.split(/\s+/);
  var wordCount = {};
  words.forEach(word => {
    if (word == '') {
      return;
    }
    const lowerWord = word.toLowerCase();
    wordCount[lowerWord] =
      lowerWord in wordCount ? wordCount[lowerWord] + 1 : 1;
  });

  var wordsArray = [];
  for (let [word, count] of Object.entries(wordCount)) {
    wordsArray.push([word, count]);
  }

  wordsArray.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else if (a[0] !== b[0]) {
      return a[0] < b[0] ? -1 : 1;
    }
    return 0;
  });
  return wordsArray.slice(0, n);
}
```
