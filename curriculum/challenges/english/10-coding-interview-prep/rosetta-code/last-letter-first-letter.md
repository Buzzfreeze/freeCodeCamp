---
id: 5e4ce2b6ac708cc68c1df25e
title: Last letter-first letter
challengeType: 5
forumTopicId: 385256
dashedName: last-letter-first-letter
---

# --description--

เกมต่อคำคือเกมที่จะนำตัวอักษรสุดท้ายของคำก่อนหน้ามาเป็น ตัวอักษรตัวแรกของคำใหม่

เช่น  

dog -> goldfish -> hippopotamus -> snake -> ฯลฯ

# --instructions--

ให้เขียนฟังก์ชันที่รับค่าเป็น array ของคำ จากนั้นนำคำนั้นมาต่อกันในรูปแบบของเกมต่อคำ เพื่อสร้างชุดรูปแบบให้ได้ยาวที่สุด โดยห้ามใช้คำซ้ำ

# --hints--

`findLongestChain` ต้องเป็นฟังก์ชัน

```js
assert(typeof findLongestChain == 'function');
```

`findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])` ต้องคืนค่าเป็น array

```js
assert(
  Array.isArray(
    findLongestChain([
      'certain',
      'each',
      'game',
      'involves',
      'starting',
      'with',
      'word'
    ])
  )
);
```

`findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])` ต้องคืนค่าเป็น `["involves", "starting", "game", "each"]`

```js
assert.deepEqual(
  findLongestChain([
    'certain',
    'each',
    'game',
    'involves',
    'starting',
    'with',
    'word'
  ]),
  ['involves', 'starting', 'game', 'each']
);
```

`findLongestChain(["audino", "bagon", "kangaskhan", "banette", "bidoof", "braviary", "exeggcute", "yamask"])` ต้องคืนค่าเป็น `["braviary", "yamask", "kangaskhan"]`

```js
assert.deepEqual(
  findLongestChain([
    'audino',
    'bagon',
    'kangaskhan',
    'banette',
    'bidoof',
    'braviary',
    'exeggcute',
    'yamask'
  ]),
  ['braviary', 'yamask', 'kangaskhan']
);
```

`findLongestChain(["harp", "poliwrath", "poochyena", "porygon2", "porygonz", "archana"])` ต้องคืนค่าเป็น `["poliwrath", "harp", "poochyena", "archana"]`

```js
assert.deepEqual(
  findLongestChain([
    'harp',
    'poliwrath',
    'poochyena',
    'porygon2',
    'porygonz',
    'archana'
  ]),
  ['poliwrath', 'harp', 'poochyena', 'archana']
);
```

`findLongestChain(["scolipede", "elephant", "zeaking", "sealeo", "silcoon", "tigers"])` ต้องคืนค่าเป็น `["scolipede", "elephant", "tigers", "sealeo"]`

```js
assert.deepEqual(
  findLongestChain([
    'scolipede',
    'elephant',
    'zeaking',
    'sealeo',
    'silcoon',
    'tigers'
  ]),
  ['scolipede', 'elephant', 'tigers', 'sealeo']
);
```

`findLongestChain(["loudred", "lumineon", "lunatone", "machamp", "magnezone", "nosepass", "petilil", "pidgeotto", "pikachu"])` ต้องคืนค่าเป็น `["machamp", "petilil", "lumineon", "nosepass"]`

```js
assert.deepEqual(
  findLongestChain([
    'loudred',
    'lumineon',
    'lunatone',
    'machamp',
    'magnezone',
    'nosepass',
    'petilil',
    'pidgeotto',
    'pikachu'
  ]),
  ['machamp', 'petilil', 'lumineon', 'nosepass']
);
```

# --seed--

## --seed-contents--

```js
function findLongestChain(items) {

}
```

# --solutions--

```js
function findLongestChain(items) {
  function Ref(index, first_char, last_char) {
    this.index = index;
    this.first_char = first_char;
    this.last_char = last_char;
  }

  var items_len = items.length
  var refs_len = items_len;
  var refs = []

  // enough space for all items
  var longest_path_refs_len = 0;
  var longest_path_refs = new Array(items_len);

  function search(curr_len) {
    if (curr_len > longest_path_refs_len) {
      longest_path_refs_len = curr_len;

      for (var i = 0; i < curr_len; i++) {
        longest_path_refs[i] = refs[i];
      }
    }

    // recursive search
    var last_char = refs[curr_len - 1].last_char;
    for (var i = curr_len; i < refs_len; i++)
      if (refs[i].first_char == last_char) {
        var aux = refs[curr_len];
        refs[curr_len] = refs[i];
        refs[i] = aux;
        search(curr_len + 1);
        refs[i] = refs[curr_len];
        refs[curr_len] = aux;
      }
  }

  for (var i = 0; i < items_len; i++) {
    var itemsi_len = items[i].length;
    refs.push(new Ref(i, items[i][0], items[i][itemsi_len - 1]));
  }

  // try each item as possible start
  for (var i = 0; i < items_len; i++) {
    var aux = refs[0];
    refs[0] = refs[i];
    refs[i] = aux;
    search(1);
    refs[i] = refs[0];
    refs[0] = aux;
  }

  var longest_path_len = longest_path_refs_len;
  var longest_path = new Array(longest_path_len);

  for (var i = 0; i < longest_path_len; i++)
    longest_path[i] = items[longest_path_refs[i].index];

  return longest_path;
}
```
