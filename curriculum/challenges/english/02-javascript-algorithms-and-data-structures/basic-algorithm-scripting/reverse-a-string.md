---
id: a202eed8fc186c8434cb6d61
title: Reverse a String
challengeType: 5
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

แบบทดสอบนี้ต้องการให้กลับตัวอักษรของ string จากขวาไปซ้าย

คุณอาจต้องแปลง string ให้เป็น array ก่อน จึงจะสามารถกลับตัวอักษรจากขวาไปซ้ายได้

ผลลัพธ์ที่ได้ต้องเป็น string

# --hints--

`reverseString("hello")` ควรคืนค่าเป็น string

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` ควรคืนค่าเป็น string `olleh`.

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` ควรคืนค่าเป็น string `ydwoH`.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` ควรคืนค่าเป็น string `htraE morf sgniteerG`.

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
