---
id: 5a23c84252665b21eecc8016
title: Sort using a custom comparator
challengeType: 5
forumTopicId: 302309
dashedName: sort-using-a-custom-comparator
---

# --description--

เขียนฟังก์ชันเพื่อจัดเรียงarray (หรือรายการ) ของstringโดยเรียงลำดับจากมากไปหาน้อย และเรียงลำดับจากน้อยไปหามากสำหรับstringที่มีความยาวเท่ากัน

# --hints--

`lengthSorter` ควรเป็น function.

```js
assert(typeof lengthSorter == 'function');
```

`lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])` ควร return array.

```js
assert(
  Array.isArray(
    lengthSorter([
      'Here',
      'are',
      'some',
      'sample',
      'strings',
      'to',
      'be',
      'sorted'
    ])
  )
);
```

`lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])` ควร return `["strings", "sample", "sorted", "Here", "some", "are", "be", "to"]`.

```js
assert.deepEqual(
  lengthSorter([
    'Here',
    'are',
    'some',
    'sample',
    'strings',
    'to',
    'be',
    'sorted'
  ]),
  ['strings', 'sample', 'sorted', 'Here', 'some', 'are', 'be', 'to']
);
```

`lengthSorter(["I", "hope", "your", "day", "is", "going", "good", "?"])` ควร return `["going", "good", "hope", "your", "day", "is", "?","I"]`.

```js
assert.deepEqual(
  lengthSorter(['I', 'hope', 'your', 'day', 'is', 'going', 'good', '?']),
  ['going', 'good', 'hope', 'your', 'day', 'is', '?', 'I']
);
```

`lengthSorter(["Mine", "is", "going", "great"])` ควร return `["going", "great", "Mine", "is"]`.

```js
assert.deepEqual(lengthSorter(['Mine', 'is', 'going', 'great']), [
  'going',
  'great',
  'Mine',
  'is'
]);
```

`lengthSorter(["Have", "fun", "sorting", "!!"])` ควร return `["sorting", "Have", "fun", "!!"]`.

```js
assert.deepEqual(lengthSorter(['Have', 'fun', 'sorting', '!!']), [
  'sorting',
  'Have',
  'fun',
  '!!'
]);
```

`lengthSorter(["Everything", "is", "good", "!!"])` ควร return `["Everything", "good", "!!", "is"]`.

```js
assert.deepEqual(lengthSorter(['Everything', 'is', 'good', '!!']), [
  'Everything',
  'good',
  '!!',
  'is'
]);
```

# --seed--

## --seed-contents--

```js
function lengthSorter(arr) {

}
```

# --solutions--

```js
function lengthSorter(arr) {
  arr.sort(function(a, b) {
    var result = b.length - a.length;
    if (result == 0) result = a.localeCompare(b);
    return result;
  });
  return arr;
}
```
