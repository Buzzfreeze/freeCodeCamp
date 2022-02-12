---
id: 5eb3e4af7d0e7b760b46cedc
title: Set consolidation
challengeType: 5
forumTopicId: 385319
dashedName: set-consolidation
---

# --description--

ผลของการ *consolidation* ของเซ็ทสองเซ็ทคือ:

<ul>
  <li>เซ็ททั้งสองเซ็ท ถ้าเซ็ททั้งสองนั้นไม่มีข้อมูลที่เหมือนกันเลย</li>
  <li>เซ็ทที่เกิดจากสองเซ็ทนั้น union กัน ถ้าสองเซ็ทนั้นมีข้อมูลที่เหมือนกัน</li>
</ul>

ถ้ามีเซ็ทจะนวน N เซ็ท โดยที่ N > 2 จะทำการ consolidation ระหว่างเซ็ทไปเรื่อยๆ จนกว่าจะไม่สามารถทำการ consolidation ได้แล้ว แต่ถ้า N &lt; 2 จะไม่มีความหมาย ให้คืนค่าเป็น input ได้เลย

เช่น:

**Example 1:**

ถ้ามีเซ็ทเป็น `{A,B}` และ `{C,D}` สองเซ็ทนี้ไม่มีข้อมูลที่เหมือนกัน ให้คืนค่าเป็นทั้งสองเซ็ทนี้ได้เลย

**Example 2:**

ถ้ามีเซ็ทเป็น `{A,B}` และ `{B,D}` ทั้งสองเซ็ทจะมี `B` ที่เหมือนกันทำให้ผลลัพธ์เป็น `{B,D,A}` (ลำดับของข้อมูลในเซ็ทไม่มีความสำคัญ ทำให้ `{A,B,D}` มีค่าเท่ากับ `{B,D,A}` และ `{D,A,B}`)

**Example 3:**

ถ้ามีเซ็ทเป็น `{A,B}` และ `{C,D}` และ `{D,B}`  
เซ็ท `{A,B}` และ `{C,D}` จะไม่มีข้อมูลที่เหมือนกัน แต่เซ็ท `{A,B}` และ `{D,B}` ทั้งสองเซ็ทจะมี `B` ที่เหมือนกันทำให้ผลลัพธ์เป็น `{B,D,A}` และก็นำเซ็ทนี้มาเทียบกับเซ็ท `{C,D}` อีกที ทำให้ได้ผลลัพธ์เป็น `{A,B,C,D}`

**Example 4:**

ถ้ามีเซ็ทเป็น:

`{H,I,K}`, `{A,B}`, `{C,D}`, `{D,B}`, และ `{F,G,H}`

จะได้ผลลัพธ์เป็น 2 เซ็ทนี้:

`{A, C, B, D}` และ `{G, F, I, H, K}`

# --instructions--

ให้เขียนฟังก์ชันที่รับค่า array ของสตริง และคืนค่าเป็น array ที่เกิดจากการ consolidation

# --hints--

`setConsolidation` ต้องเป็นฟังก์ชัน

```js
assert(typeof setConsolidation === 'function');
```

`setConsolidation(["AB", "CD"])` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(setConsolidation(['AB', 'CD'])));
```

`setConsolidation(["AB", "CD"])` ต้องคืนค่าเป็น `[["C", "D"], ["A", "B"]]`

```js
assert.deepEqual(setConsolidation(['AB', 'CD']), [
  ['C', 'D'],
  ['A', 'B']
]);
```

`setConsolidation(["AB", "BD"])` ต้องคืนค่าเป็น `[["A", "B", "D"]]`

```js
assert.deepEqual(setConsolidation(['AB', 'BD']), [['A', 'B', 'D']]);
```

`setConsolidation(["AB", "CD", "DB"])` ต้องคืนค่าเป็น `[["A", "B", "C", "D"]]`

```js
assert.deepEqual(setConsolidation(['AB', 'CD', 'DB']), [['A', 'B', 'C', 'D']]);
```

`setConsolidation(["HIK", "AB", "CD", "DB", "FGH"])` ต้องคืนค่าเป็น `[["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]`

```js
assert.deepEqual(setConsolidation(['HIK', 'AB', 'CD', 'DB', 'FGH']), [
  ['F', 'G', 'H', 'I', 'K'],
  ['A', 'B', 'C', 'D']
]);
```

# --seed--

## --seed-contents--

```js
function setConsolidation(sets) {

}
```

# --solutions--

```js
function setConsolidation(sets) {
  function addAll(l1, l2) {
    l2.forEach(function(e) {
      if (l1.indexOf(e) == -1) l1.push(e);
    });
  }

  function consolidate(sets) {
    var r = [];
    for (var i = 0; i < sets.length; i++) {
      var s = sets[i];
      {
        var new_r = [];
        new_r.push(s);
        for (var j = 0; j < r.length; j++) {
          var x = r[j];
          {
            if (
              !(function(c1, c2) {
                for (var i = 0; i < c1.length; i++) {
                  if (c2.indexOf(c1[i]) >= 0) return false;
                }
                return true;
              })(s, x)
            ) {
              (function(l1, l2) {
                addAll(l1, l2);
              })(s, x);
            } else {
              new_r.push(x);
            }
          }
        }
        r = new_r;
      }
    }
    return r;
  }

  function consolidateR(sets) {
    if (sets.length < 2) return sets;
    var r = [];
    r.push(sets[0]);
    {
      var arr1 = consolidateR(sets.slice(1, sets.length));
      for (var i = 0; i < arr1.length; i++) {
        var x = arr1[i];
        {
          if (
            !(function(c1, c2) {
              for (var i = 0; i < c1.length; i++) {
                if (c2.indexOf(c1[i]) >= 0) return false;
              }
              return true;
            })(r[0], x)
          ) {
            (function(l1, l2) {
              return l1.push.apply(l1, l2);
            })(r[0], x);
          } else {
            r.push(x);
          }
        }
      }
    }
    return r;
  }

  function hashSetList(set) {
    var r = [];
    for (var i = 0; i < set.length; i++) {
      r.push([]);
      for (var j = 0; j < set[i].length; j++)
        (function(s, e) {
          if (s.indexOf(e) == -1) {
            s.push(e);
            return true;
          } else {
            return false;
          }
        })(r[i], set[i].charAt(j));
    }
    return r;
  }

  var h1 = consolidate(hashSetList(sets)).map(function(e) {
    e.sort();
    return e;
  });
  return h1;
}
```
