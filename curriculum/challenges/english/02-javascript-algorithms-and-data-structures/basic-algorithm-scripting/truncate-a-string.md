---
id: ac6993d51946422351508a41
title: Truncate a String
challengeType: 5
forumTopicId: 16089
dashedName: truncate-a-string
---

# --description--
แบบทดสอบนี้ให้ทำการตัด string (argument แรก) ตามความยาวของเลขที่กำหนด (argument ที่สอง) 
โดยหาก string ใน argument แรกมีความยาวมากกว่าเลขที่กำหนดใน arugument ที่สอง ก็ให้คืนค่าเป็น string ที่ตัดแล้ว แล้วเติม `...` ต่อท้าย


# --hints--

`truncateString("A-tisket a-tasket A green and yellow basket", 8)` ควรคืนค่าเป็น string `A-tisket...`.

```js
assert(
  truncateString('A-tisket a-tasket A green and yellow basket', 8) ===
    'A-tisket...'
);
```

`truncateString("Peter Piper picked a peck of pickled peppers", 11)` ควรคืนค่าเป็น string `Peter Piper...`.

```js
assert(
  truncateString('Peter Piper picked a peck of pickled peppers', 11) ===
    'Peter Piper...'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)` ควรคืนค่าเป็น string `A-tisket a-tasket A green and yellow basket`.

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)` ควรคืนค่าเป็น string `A-tisket a-tasket A green and yellow basket`.

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-", 1)` ควรคืนค่าเป็น string `A...`.

```js
assert(truncateString('A-', 1) === 'A...');
```

`truncateString("Absolutely Longer", 2)` ควรคืนค่าเป็น string `Ab...`.

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
