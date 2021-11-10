---
id: bd7993c9c69feddfaeb8bdef
title: Store Multiple Values in one Variable using JavaScript Arrays
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

ตัวแปร `array` ในภาษา JavaScript ทำให้เราสามารถเก็บข้อมูลหลายตัวไว้ในที่เดียวกันได้

คุณเริ่มจากการประกาศ array ด้วย opening square bracket (วงเล็บเปิด) และปิดด้วย closing square bracket (วงเล็บเปิด) และใส่ comma ระหว่างแต่ละรายการ ดังนี้:

```js
var sandwich = ["peanut butter", "jelly", "bread"]
```

# --instructions--

จงแก้ไข array ใหม่ `myArray` เพื่อให้มีทั้ง string และ number (ตามลำดับ)

# --hints--

`myArray` ควรเป็น array

```js
assert(typeof myArray == 'object');
```

item แรกใน `myArray` ควรเป็น string

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

item ที่สองใน `myArray` ควรเป็น number


```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// Only change code below this line
var myArray = [];
```

# --solutions--

```js
var myArray = ["The Answer", 42];
```
