---
id: 599a789b454f2bbd91a3ff4d
title: Practice comparing different values
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

สองบทเรียนที่แล้วเราได้เรียนรู้เกี่ยวกับ equality operator (`==`) และ strict equality operator (`===`) ลองมาทบทวนและฝึกฝนโดยใช้เครื่องหมายเหล่านี้กัน

ถ้าค่าที่เปรียบเทียบมีประเภทต่างกัน เครื่องหมาย (`==`) จะทำการแปลงประเภทข้อมูล แล้วจึงเปรียบเทียบค่า แต่เครื่องหมาย (`===`) จะดูว่าทั้งประเภทข้อมูลและค่าของข้อมูลต้องเหมือนกัน โดยไม่มีการแปลงประเภทข้อมูล



**ตัวอย่าง**

โค้ด `3 == '3'` จะคืนค่า `true` ออกมา เนื่องจาก JavaScript จะทำการแปลง string เป็น number ส่วน `3 === '3'` จะคืนค่า false เพราะประเภทข้อมูลต่างกัน และไม่ได้ทำการแปลงประเภทให้

**หมายเหตุ:** ใน JavaScript คุณสามารถตรวจสอบประเภทของตัวแปร หรือค่าได้ด้วย operator `typeof` ตามตัวอย่างนี้:


```js
typeof 3
typeof '3'
```

โค้ดส่วน `typeof 3` จะคืนค่า string ออกมาเป็นคำว่า `number` และโค้ดส่วน `typeof '3'` จะคืนค่า string ออกมาเป็นคำว่า `string`

# --instructions--

ฟังก์ชัน `compareEquality` ใน editor ทางด้านขวาจะเปรียบเทียบค่าสองค่า โดยใช้ equality operator (`==`) จงปรับแก้ฟังก์ชันเพื่อให้คืนค่า string `Equal` เมื่อข้อมูลเป็นประเภทเดียวกัน และข้อมูลมีค่าเท่ากันเท่านั้น


# --hints--

การเรียกใช้ฟังก์ชัน `compareEquality(10, "10")` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

การเรียกใช้ฟังก์ชัน `compareEquality("20", 20)` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

คุณต้องใช้ equality operator (`===`)

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// เตรียมข้อมูล
function compareEquality(a, b) {
  if (a == b) { // แก้ไขบรรทัดนี้เท่านั้น
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
