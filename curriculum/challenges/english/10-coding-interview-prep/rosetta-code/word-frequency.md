---
id: 5e94a54cc7b022105bf0fd2c
title: Word frequency
challengeType: 5
forumTopicId: 393913
dashedName: word-frequency
---

# --description--

กำหนดstringข้อความและจำนวนเต็ม n ให้คืนค่า n คำที่พบบ่อยที่สุดในไฟล์ (และจำนวนที่เกิดขึ้น) ด้วยความถี่ที่ลดลง

# --instructions--

เขียนฟังก์ชันเพื่อนับการเกิดขึ้นของแต่ละคำและส่งคืน n คำที่พบบ่อยที่สุดพร้อมกับจำนวนครั้งที่เกิดขึ้นในความถี่ที่ลดลง

ฟังก์ชันควรส่งคืนอาร์เรย์ 2D โดยแต่ละองค์ประกอบในรูปแบบต่อไปนี้: `[word, freq]` `word` ควรเป็นตัวพิมพ์เล็กของคำ และ `freq` ตัวเลขที่แสดงถึงการนับ

ฟังก์ชันควรส่งคืนอาร์เรย์ว่าง หากไม่มีสตริงให้

ฟังก์ชันควรคำนึงถึงขนาดตัวพิมพ์ เช่น สตริง "Hello" และ "hello" ควรได้รับการปฏิบัติเหมือนกัน

คุณสามารถปฏิบัติต่อคำที่มีอักขระพิเศษ เช่น ขีดล่าง ขีดกลาง อะพอสทรอฟี จุลภาค ฯลฯ เป็นคำที่แยกจากกัน

ตัวอย่างเช่น กำหนดสตริง "Hello hello goodbye" ฟังก์ชันของคุณควรส่งคืน`[['hello', 2], ['goodbye', 1]]`.

# --hints--

`wordFrequency` ควรเป็น function.

```js
assert(typeof wordFrequency == 'function');
```

`wordFrequency` ควร return array.

```js
assert(Array.isArray(wordFrequency('test')));
```

`wordFrequency("Hello hello world", 2)` ควร return `[['hello', 2], ['world', 1]]`

```js
assert.deepEqual(wordFrequency(example_1, 2), example_1_solution);
```

`wordFrequency("The quick brown fox jumped over the lazy dog", 1)` ควร return `[['the', 2]]`

```js
assert.deepEqual(wordFrequency(example_2, 1), example_2_solution);
```

`wordFrequency("Opensource opensource open-source open source", 1)` ควร return `[['opensource', 2]]`

```js
assert.deepEqual(wordFrequency(example_3, 1), example_3_solution);
```

`wordFrequency("Apple App apply aPP aPPlE", 3)` ควร return `[['app', 2], ['apple', 2], ['apply', 1]]` or `[['apple', 2], ['app', 2], ['apply', 1]]`

```js
const arr = JSON.stringify(wordFrequency(example_4, 3));
assert(arr === example_4_solution_a || arr === example_4_solution_b);
```

`wordFrequency("c d a d c a b d d c", 4)` ควร return `[['d', 4], ['c', 3], ['a', 2], ['b', 1]]`

```js
assert.deepEqual(wordFrequency(example_5, 4), example_5_solution);
```

`wordFrequency("", 5)` ควร return `[]`

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
