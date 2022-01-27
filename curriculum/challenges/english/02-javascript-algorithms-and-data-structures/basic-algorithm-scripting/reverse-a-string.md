---
id: a202eed8fc186c8434cb6d61
title: Reverse a String
challengeType: 5
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

แบบทดสอบนี้ให้ทำการเรียงตัวอักษรใน string ใหม่ โดยให้เรียงจากหลังมาหน้า

คุณอาจต้องเปลี่ยน string ให้เป็น array ก่อน ถึงจะเรียงใหม่ได้

ฟังก์ชันนี้ต้องได้ผลลัพธ์เป็น string

# --hints--

การเรียกใช้ฟังก์ชัน `reverseString("hello")` ต้องได้ค่าเป็น string

```js
assert(typeof reverseString('hello') === 'string');
```

การเรียกใช้ฟังก์ชัน `reverseString("hello")` ต้องได้ค่าเป็น string `olleh`

```js
assert(reverseString('hello') === 'olleh');
```

การเรียกใช้ฟังก์ชัน `reverseString("Howdy")` ต้องได้ค่าเป็น string `ydwoH`

```js
assert(reverseString('Howdy') === 'ydwoH');
```

การเรียกใช้ฟังก์ชัน `reverseString("Greetings from Earth")` ต้องได้ค่าเป็น string `htraE morf sgniteerG`

```js
assert(reverseString('Greetings from Earth') === 'htraE morf sgniteerG');
```

# --seed--

## --seed-contents--

```js
function reverseString(str) {
  return str;
}

reverseString("hello");
```

# --solutions--

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
```
