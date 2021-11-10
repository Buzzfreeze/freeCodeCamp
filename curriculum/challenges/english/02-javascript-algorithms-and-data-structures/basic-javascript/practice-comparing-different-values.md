---
id: 599a789b454f2bbd91a3ff4d
title: Practice comparing different values
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

ในสองบทเรียนที่แล้ว เราได้เรียนรู้เกี่ยวกับ equality operator (`==`) และ strict equality operator (`===`) ลองมาทบทวนและฝึกฝนโดยใช้เครื่องหมายเหล่านี้กัน

ถ้าค่าที่เปรียบเทียบไม่ได้มีประเภทเหมือนกัน เครื่องหมาย (`==`) จะทำการแปลงประเภทข้อมูล แล้วจึงเปรียบเทียบค่า แต่เครื่องหมาย (`===`) จะเปรียบเทียบทั้ง ประเภทข้อมูล และข้อมูลต้องเหมือนกัน โดยไม่มีการแปลงประเภทข้อมูลหนึ่งไปเป็นอีกประเภทหนึ่ง 



**Examples**

`3 == '3'` คืนค่า `true` เนื่องจาก JavaScript จะทำการแปลง string เป็น number ส่วน `3 === '3'` จะคืนค่า false เพราะประเภทข้อมูลต่างกัน และไม่ได้ทำการแปลงประเภท

**หมายเหตุ:** ใน JavaScript คุณสามารถตรวจสอบประเภทของตัวแปร หรือค่าได้ด้วย `typeof` operator ดังนี้:


```js
typeof 3
typeof '3'
```

`typeof 3` จะคืนค่า string `number` และ `typeof '3'` จะคืนค่า string `string`

# --instructions--

ฟังก์ชัน `compareEquality` ใน editor จะเปรียบเทียบค่าสองค่า โดยใช้เครื่องหมาย (`==`) จงปรับแก้ฟังก์ชันเพื่อให้คืนค่า string `Equal` เมื่อข้อมูลเท่ากันทั้งประเภทข้อมูลและค่าข้อมูลเท่านั้น


# --hints--

`compareEquality(10, "10")` ควรคืนค่า string `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` ควรคืนค่า string `Not Equal`

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

คุณควรใช้ `===` operator

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
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
