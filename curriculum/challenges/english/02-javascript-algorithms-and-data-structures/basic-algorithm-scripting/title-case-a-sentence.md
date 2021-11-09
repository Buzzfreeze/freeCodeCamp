---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
challengeType: 5
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

แบบทดสอบนี้ต้องการให้แปลงตัวอักษรแรกของแต่ละคำใน string เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรอื่นที่ไม่ใช่ตัวแรกของคำ ให้เป็นตัวพิมพ์เล็ก
สำหรับแบบทดสอบนี้ คุณต้องทำให้ตัวอักษรแรกของคำเชื่อมต่างๆ เช่น `the` และ `of` เป็นตัวพิมพ์ใหญ่ด้วยเช่นกัน

# --hints--

`titleCase("I'm a little tea pot")` ควรคืนค่าเป็น string.

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` ควรได้ผลลัพธ์เป็น `I'm A Little Tea Pot`.

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` ควรได้ผลลัพธ์เป็น `Short And Stout`.

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` ควรได้ผลลัพธ์เป็น `Here Is My Handle Here Is My Spout`.

```js
assert(
  titleCase('HERE IS MY HANDLE HERE IS MY SPOUT') ===
    'Here Is My Handle Here Is My Spout'
);
```

# --seed--

## --seed-contents--

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
```

# --solutions--

```js
function titleCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");
```
