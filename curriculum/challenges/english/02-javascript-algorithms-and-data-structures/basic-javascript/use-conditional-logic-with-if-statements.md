---
id: cf1111c1c12feddfaeb3bdef
title: Use Conditional Logic with If Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

เราจะใช้คำสั่ง `if` เพื่อทำการเลือกว่าจะให้โค้ดส่วนไหนทำงาน การใช้คีย์เวิร์ด `if` เป็นการบอกให้ JavaScript รันโค้ดในปีกกา (`{}`) ภายใต้เงื่อนไขที่กำหนดไว้ในวงเล็บ (`()`) เงื่อนไขเหล่านี้เป็น `Boolean` และจะเป็นได้แค่ `true` หรือ `false` เท่านั้น

ถ้าเงื่อนไขมีค่าเป็น `true` โปรแกรมจะรันคำสั่งภายในปีกกา เมื่อเงื่อนไขมีค่าเป็น `false` คำสั่งภายในปีกกาจะไม่ทำงาน

**Pseudocode**

<blockquote>if (<i>เงื่อนไขเป็นจริง</i>) {<br>  <i>โค้ดในนี้จะทำงาน</i><br>}</blockquote>

**ตัวอย่าง**

```js
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);
test(false);
```

การเรียกใช้ฟังก์ชัน `test(true)` จะคืนค่า string `It was true` และการเรียกใช้ฟังก์ชัน `test(false)` จะคืนค่า string `It was false`

เมื่อเรียกใช้ฟังก์ชัน `test` ด้วยค่า `true` ตัวคำสั่ง `if` จะประเมินว่า `myCondition` เป็น `true` หรือไม่ เนื่องจากเราระบุให้มีค่าเป็น `true` ดังนั้นฟังก์ชันจึงคืนค่าออกมาเป็น `It was true` 
และเมื่อเราเรียกใช้ฟังก์ชัน `test` ด้วยค่า `false` แล้วตัว `myCondition` จะไม่เป็น `true` และคำสั่งในปีกกาจะไม่ทำงาน และฟังก์ชันจะคืนค่า `It was false` ออกมาแทน


# --instructions--

จงสร้างคำสั่ง `if` ภายในฟังก์์ชัน โดยให้คืนค่า `Yes, that was true` ถ้า parameter `wasThatTrue` มีค่าเป็น `true` และคืนค่า `No, that was false` ถ้า `wasThatTrue` มีค่าเป็น `false`

# --hints--

`trueOrFalse` ต้องเป็น function

```js
assert(typeof trueOrFalse === 'function');
```

การเรียกใช้ฟังก์ชัน `trueOrFalse(true)` ต้องคืนค่าออกมาเป็น string

```js
assert(typeof trueOrFalse(true) === 'string');
```

การเรียกใช้ฟังก์ชัน `trueOrFalse(false)` ต้องคืนค่าออกมาเป็น string

```js
assert(typeof trueOrFalse(false) === 'string');
```

การเรียกใช้ฟังก์ชัน `trueOrFalse(true)` ต้องคืนค่าออกมาเป็น string `Yes, that was true`

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

การเรียกใช้ฟังก์ชัน `trueOrFalse(false)` ต้องคืนค่าออกมาเป็น string `No, that was false`

```js
assert(trueOrFalse(false) === 'No, that was false');
```

# --seed--

## --seed-contents--

```js
function trueOrFalse(wasThatTrue) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น



  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

}
```

# --solutions--

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```
