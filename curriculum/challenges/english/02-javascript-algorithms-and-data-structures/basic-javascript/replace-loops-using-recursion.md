---
id: 5cfa3679138e7d9595b9d9d4
title: Replace Loops using Recursion
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

สำหรับบางคนหัวข้อนี้อาจจะเข้าใจยากหน่อย ค่อยๆ ทำความเข้าใจไปนะครับ
Recursion (การเรียกตัวเองซ้ำ) เป็นวิธีที่จะใช้ฟังก์ชันเรียกใช้ตัวเอง 
ลองดูตัวอย่างการใช้งานจะช่วยให้เข้าใจมากขึ้น: 
ถ้าเราอยากสร้างฟังก์ชันที่เอา element `n` ตัวแรกของ array มาคูณกัน ถ้าใช้ `for` เราจะใช้แบบนี้:

```js
  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
```

จากโค้ดข้างบนเราจะเห็นว่า `multiply(arr, n)` จะมีค่าเท่ากับ `multiply(arr, n - 1) * arr[n - 1]` (ถ้ายังไม่เข้าใจให้ลองสร้าง array แล้วลองคำนวนดู)
แปลว่าคุณสามารถเขียน `multiply` ให้เรียกตัวเองได้โดยไม่ต้องใช้ loop

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

การใช้ recursion ทำ `multiply` จะแบ่งเป็นขั้นตอนได้ตามนี้
ในกรณีที่ `n <= 0` (<dfn>base case</dfn>) จะคืนค่า 1 ออกมา แต่ถ้า `n > 0` ฟังก์ชันจะเรียกตัวเองโดยใช้ `arr` และ `n - 1` ซึ่งจะมีการเรียก `multiply` เข้าไปเรื่อยๆ จนกว่าจะเจอว่า `n <= 0` ณ จุดนี้ ฟังก์ชันทั้งหมดจะคืนค่าได้ และ `multiply` ที่อยู่ชั้นบนสุดก็จะคืนค่าผลลัพธ์กลับไป

ลองแทนค่าเพื่อให้เห็นภาพมากขึ้น:
ถ้าเรามีตัวแปร `var arr = [2, 3, 4]` แล้วเรียกใช้ `multiply(arr, 1)`
โค้ดจะทำงานตามนี้:

1. ตรวจสอบว่า `n <= 0` หรือไม่ซึ่งในกรณีนี้ n มีค่าเป็น 1 ทำให้ไปเข้าเคส `else`
2. เมื่อเข้า `else` จะเรียกใช้ `multiply(arr, n - 1) * arr[n - 1]` ซึ่งจะมีค่าเป็น `multiply(arr, 0) * arr[0]`
3. เมื่อ `multiply(arr, 0)` ถูกเรียกใช้ จะตรวจสอบว่า `n <= 0` หรือไม่ซึ่งในกรณีนี้ n มีค่าเป็น 0 ทำให้ฟังก์ชันคืนค่า `1` ออกมา
4. จากข้อที่ 2 เราจะได้ค่าของ `multiply(arr, 0)` มาแล้วซึ่งมีค่าเป็น `1` เราก็สามารถทำการคำนวน `multiply(arr, 0) * arr[0]` ได้แล้ว ก็จะได้ค่าเป็น `1 * 2`
5. เราก็จะได้ผลลัพธ์จากการเรียกใช้ฟังก์ชัน `multiply(arr, 1)` เป็น `2`

ลองคำนวนเองโดยใช้ `multiply(arr, 3)` เพื่อให้เห็นภาพมากขึ้นว่าฟังก์ชันชั้นที่อยุ่ลึกลงไปทำงานอย่างไร

**หมายเหตุ:** ฟังก์ชันแบบ Recursive จำเป็นต้องมี base case เพื่อคืนค่าโดยที่ไม่ต้องเรียกฟังก์ชัน (ในตัวอย่างนี้คือกรณีที่ `n <= 0`) ถ้าไม่มี base case ก็จะทำให้ Recursion ทำงานไปเรื่อยๆ โดยไม่หยุด

# --instructions--

จงเขียน recursive function `sum(arr, n)` ที่คืนค่าเป็นผลบวกของ `n` elements แรกของ array `arr`

# --hints--

การเรียกใช้ฟังก์ชัน `sum([1], 0)` ต้องคืนค่าออกมาเป็น 0

```js
assert.equal(sum([1], 0), 0);
```

การเรียกใช้ฟังก์ชัน `sum([2, 3, 4], 1)` ต้องคืนค่าออกมาเป็น 2

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

การเรียกใช้ฟังก์ชัน `sum([2, 3, 4, 5], 3)` ต้องคืนค่าออกมาเป็น 9

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

ห้ามใช้ loop ในโค้ด ไม่ว่าจะเป็น (`for`, `while` หรือ higher order functions เช่น `forEach`, `map`, `filter` หรือ `reduce`)

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

ต้องใช้ recursive ในการทำแบบฝึกหัดนี้

```js
assert(
  sum.toString().match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
function sum(arr, n) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```
