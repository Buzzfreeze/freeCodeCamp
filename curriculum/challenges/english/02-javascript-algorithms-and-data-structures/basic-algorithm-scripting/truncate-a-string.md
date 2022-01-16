---
id: ac6993d51946422351508a41
title: Truncate a String
challengeType: 5
forumTopicId: 16089
dashedName: truncate-a-string
---

# --description--
แบบทดสอบนี้ให้ทำการตัด string (argument แรก) ถ้า string ยาวกว่าค่าที่กำหนด (argument ที่สอง) 
ถ้า string ความยาวมากกว่าค่ากำหนด ให้คืนค่าเป็น string ที่ตัดแล้ว แล้วเติม `...` ต่อท้าย


# --hints--

การเรียกใช้ฟังก์ชัน `truncateString("A-tisket a-tasket A green and yellow basket", 8)` ต้องได้ค่าเป็น string `A-tisket...`.

```js
assert(
  truncateString('A-tisket a-tasket A green and yellow basket', 8) ===
    'A-tisket...'
);
```

การเรียกใช้ฟังก์ชัน `truncateString("Peter Piper picked a peck of pickled peppers", 11)` ต้องได้ค่าเป็น string `Peter Piper...`.

```js
assert(
  truncateString('Peter Piper picked a peck of pickled peppers', 11) ===
    'Peter Piper...'
);
```

การเรียกใช้ฟังก์ชัน `truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)` ต้องได้ค่าเป็น string `A-tisket a-tasket A green and yellow basket`.

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

การเรียกใช้ฟังก์ชัน `truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)` ต้องได้ค่าเป็น string `A-tisket a-tasket A green and yellow basket`.

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

การเรียกใช้ฟังก์ชัน `truncateString("A-", 1)` ต้องได้ค่าเป็น string `A...`.

```js
assert(truncateString('A-', 1) === 'A...');
```

การเรียกใช้ฟังก์ชัน `truncateString("Absolutely Longer", 2)` ต้องได้ค่าเป็น string `Ab...`.

```js
assert(truncateString('Absolutely Longer', 2) === 'Ab...');
```

# --seed--

## --seed-contents--

```js
function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

# --solutions--

```js
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  return str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```
