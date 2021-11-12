---
id: 594fa2746886f41f7d8bf225
title: Topological sort
challengeType: 5
forumTopicId: 302340
dashedName: topological-sort
---

# --description--

ให้ mapping ระหว่าง item และ items อ้างถึง topological sort orders items เพื่อไม่ให้มีรายการใดนำหน้ารายการขึ้นอยู่กับ มีสอง algorithms สำหรับ topological sorting: Kahn's (1962) topological sort และ depth-first search.

# --instructions--

เขียนฟังก์ชันที่จะส่งคืนรายการที่มีลำดับการรวบรวมที่ถูกต้องของห้องสมุดจากการขึ้นต่อกัน

- สมมติว่าชื่อห้องสมุดเป็นคำเดียว
- รายการที่ระบุว่าเป็นผู้อยู่ในความอุปการะเท่านั้นไม่มีผู้อยู่ในความอุปการะของตนเอง แต่ต้องให้ลำดับการรวบรวม
- การพึ่งพาตนเองใด ๆ ควรละเว้น
- ควรละเว้นการพึ่งพาที่ไม่สามารถเรียงลำดับได้

ใช้ข้อมูลต่อไปนี้เป็นตัวอย่าง:

<pre>
LIBRARY          LIBRARY DEPENDENCIES
=======          ====================
des_system_lib   std synopsys std_cell_lib des_system_lib dw02 dw01 ramlib ieee
dw01             ieee dw01 dware gtech
dw02             ieee dw02 dware
dw03             std synopsys dware dw03 dw02 dw01 ieee gtech
dw04             dw04 ieee dw01 dware gtech
dw05             dw05 ieee dware
dw06             dw06 ieee dware
dw07             ieee dware
dware            ieee dware
gtech            ieee gtech
ramlib           std ieee
std_cell_lib     ieee std_cell_lib
synopsys
</pre>

การcompile libraryในภาษา VHDL มีข้อจำกัดที่libraryจะต้องถูกคอมไพล์หลังจากlibraryใดๆ ขึ้นอยู่กับlibraryนั้น ข้อมูลข้างต้นจะไม่สามารถจัดลำดับได้ ตัวอย่างเช่น `dw04` ถูกเพิ่มลงในรายการการอ้างอิงของ `dw01'

inputของฟังก์ชันจะเป็นสตริงแบบหลายบรรทัด แต่ละบรรทัดจะประกอบด้วยชื่อของlibrary ตามด้วยการอ้างอิง (ถ้ามี)

เช่น:

```js
const libsSimple =
  `aaa bbb
  bbb`;
```

# --hints--

`topologicalSort` ควรเป็น function.

```js
assert(typeof topologicalSort === 'function');
```

`topologicalSort(libsSimple)` ควร return array.

```js
assert(Array.isArray(topologicalSort(libsSimple)));
```

`topologicalSort(libsSimple)` ควร return `['bbb', 'aaa']`.

```js
assert.deepEqual(topologicalSort(libsSimple), ['bbb', 'aaa']);
```

`topologicalSort(libsVHDL)` ควร return `['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']`.

```js
assert.deepEqual(topologicalSort(libsVHDL), ['ieee', 'std_cell_lib', 'gtech', 'dware', 'dw07', 'dw06', 'dw05', 'dw02', 'dw01', 'dw04', 'std', 'ramlib', 'synopsys', 'dw03', 'des_system_lib']);
```

`topologicalSort(libsCustom)` ควร return `['base', 'c', 'd', 'b', 'a']`.

```js
assert.deepEqual(topologicalSort(libsCustom), ['base', 'c', 'd', 'b', 'a']);
```

`topologicalSort` ควร ignore unorderable dependencies.

```js
assert.deepEqual(topologicalSort(libsUnorderable), ['Base']);
```

# --seed--

## --after-user-code--

```js
const libsSimple =
  `aaa bbb
  bbb`;

const libsVHDL =
  `des_system_lib   std synopsys std_cell_lib des_system_lib dw02 dw01 ramlib ieee
  dw01             ieee dw01 dware gtech
  dw02             ieee dw02 dware
  dw03             std synopsys dware dw03 dw02 dw01 ieee gtech
  dw04             dw04 ieee dw01 dware gtech
  dw05             dw05 ieee dware
  dw06             dw06 ieee dware
  dw07             ieee dware
  dware            ieee dware
  gtech            ieee gtech
  ramlib           std ieee
  std_cell_lib     ieee std_cell_lib
  synopsys`;

const libsCustom =
  `a b c d
  b c d
  d c
  c base
  base`;

const libsUnorderable =
  `TestLib Base MainLib
  MainLib TestLib
  Base`;
```

## --seed-contents--

```js
function topologicalSort(libs) {

  return true;
}
```

# --solutions--

```js
function topologicalSort(libs) {
  // A map of the input data, with the keys as the packages, and the values as
  // and array of packages on which it depends.
  const D = libs
    .split('\n')
    .map(e => e.split(' ').filter(ep => ep !== ''))
    .reduce((p, c) =>
      p.set(c[0], c.filter((e, i) => (i > 0 && e !== c[0] ? e : null))), new Map());
  [].concat(...D.values()).forEach(e => {
    D.set(e, D.get(e) || []);
  });

  // The above map rotated so that it represents a DAG of the form
  // Map {
  //    A => [ A, B, C],
  //    B => [C],
  //    C => []
  // }
  // where each key represents a node, and the array contains the edges.
  const G = [...D.keys()].reduce((p, c) =>
    p.set(
      c,
      [...D.keys()].filter(e => D.get(e).includes(c))),
    new Map()
  );

  // An array of leaf nodes; nodes with 0 in degrees.
  const Q = [...D.keys()].filter(e => D.get(e).length === 0);

  // The result array.
  const S = [];
  while (Q.length) {
    const u = Q.pop();
    S.push(u);
    G.get(u).forEach(v => {
      D.set(v, D.get(v).filter(e => e !== u));
      if (D.get(v).length === 0) {
        Q.push(v);
      }
    });
  }

  return S;
}
```
