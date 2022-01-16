---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
challengeType: 5
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

ให้เขียนฟังก์ชันเพื่อแปลงตัวอักษรแรกของแต่ละคำใน string เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่ไม่ใช่ตัวแรกของคำให้เป็นตัวพิมพ์เล็ก

# --hints--

การเรียกใช้ฟังก์ชัน `titleCase("I'm a little tea pot")` ต้องได้ค่าเป็น string

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

การเรียกใช้ฟังก์ชัน `titleCase("I'm a little tea pot")` ต้องได้ค่าเป็น `I'm A Little Tea Pot`.

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

การเรียกใช้ฟังก์ชัน `titleCase("sHoRt AnD sToUt")` ต้องได้ค่าเป็น `Short And Stout`.

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

การเรียกใช้ฟังก์ชัน `titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` ต้องได้ค่าเป็น `Here Is My Handle Here Is My Spout`.

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
