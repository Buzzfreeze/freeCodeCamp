---
id: 5eb3e4af7d0e7b760b46cedc
title: Set consolidation
challengeType: 5
forumTopicId: 385319
dashedName: set-consolidation
---

# --description--

ให้ set item 2 set ถ้าitemใด ๆ เหมือนกับในsetใด ๆ ผลลัพธ์ของการใช้ *consolidation* กับsetเหล่านั้นคือ set ของ set ที่มีเนื้อหาคือ:

<ul>
  <li>The two input sets if no common item exists between the two input sets of items.</li>
  <li>The single set that is the union of the two input sets if they share a common item.</li>
</ul>

ให้ N setของitemโดยที่ N > 2 ผลลัพธ์จะเหมือนกับการแทนที่setค่าผสมทั้งหมดของสองsetซ้ำๆ โดยการรวมitemจนกว่าจะไม่มีการรวมเพิ่มเติมระหว่างคู่ของset ถ้ายังไม่มี N &lt; 2 สามารถส่งคืนค่าได้

เช่น:

**Example 1:**

ให้setทั้งสองset `{A,B}` และ `{C,D}` ดังนั้นจึงไม่มีองค์ประกอบทั่วไประหว่างsetและผลลัพธ์จะเหมือนกับinput

**Example 2:**

จากสองset `{A,B}` และ `{B,D}` จึงมีองค์ประกอบทั่วไป `B` ระหว่างsetและผลลัพธ์คือsetเดียว `{B,D,A}` (โปรดทราบว่าลำดับของitemในsetนั้นไม่มีสาระสำคัญ: `{A,B,D}` เหมือนกับ `{B,D,A}` และ `{D,A,B}` เป็นต้น)

**Example 3:**

จากทั้งสามset `{A,B}` และ `{C,D}` และ `{D,B}` จะไม่มีองค์ประกอบร่วมกันระหว่างset `{A,B}` และ `{C,D} ` แต่set `{A,B}` และ `{D,B}` ใช้องค์ประกอบร่วมกันที่รวมเข้าด้วยกันเพื่อสร้างผลลัพธ์ `{B,D,A}` ในการตรวจสอบผลลัพธ์นี้ด้วยsetที่เหลือ `{C,D}` พวกเขาใช้องค์ประกอบร่วมกันและรวมเข้ากับผลลัพธ์สุดท้ายของsetเดียว `{A,B,C,D}`

**Example 4:**

การรวมตัวของห้าset:

`{H,I,K}`, `{A,B}`, `{C,D}`, `{D,B}`, and `{F,G,H}`

2 sets:

`{A, C, B, D}`, และ `{G, F, I, H, K}`

# --instructions--

เขียนฟังก์ชันที่รับarrayของatringเป็นพารามิเตอร์ แต่ละatringแสดงถึงsetที่มีอักขระที่แสดงถึงองค์ประกอบของset ฟังก์ชันควรส่งคืนarray 2D ที่มีรวม set หมายเหตุ: ควรจัดเรียงแต่ละset

# --hints--

`setConsolidation` ควรเป็น function.

```js
assert(typeof setConsolidation === 'function');
```

`setConsolidation(["AB", "CD"])` ควร return array.

```js
assert(Array.isArray(setConsolidation(['AB', 'CD'])));
```

`setConsolidation(["AB", "CD"])` ควร return `[["C", "D"], ["A", "B"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'CD']), [
  ['C', 'D'],
  ['A', 'B']
]);
```

`setConsolidation(["AB", "BD"])` ควร return `[["A", "B", "D"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'BD']), [['A', 'B', 'D']]);
```

`setConsolidation(["AB", "CD", "DB"])` ควร return `[["A", "B", "C", "D"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'CD', 'DB']), [['A', 'B', 'C', 'D']]);
```

`setConsolidation(["HIK", "AB", "CD", "DB", "FGH"])` ควร return `[["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]`.

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
