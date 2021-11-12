---
id: 59c3ec9f15068017c96eb8a3
title: Farey sequence
challengeType: 5
forumTopicId: 302266
dashedName: farey-sequence
---

# --description--

[Farey sequence](<https://en.wikipedia.org/wiki/Farey sequence> "wp: Farey sequence") <code>F<sub>n</sub></code> ของลำดับ `n` คือลำดับของเศษส่วนที่ลดลงอย่างสมบูรณ์ระหว่าง `0` และ `1` ซึ่งเมื่ออยู่ในพจน์ที่ต่ำที่สุด จะมีตัวส่วนน้อยกว่าหรือเท่ากับ `n` จัดเรียงตามขนาดที่เพิ่มขึ้น

*Farey sequence* บางครั้งเรียกว่า *Farey series* อย่างไม่ถูกต้อง

ลำดับ Farey แต่ละลำดับ:

<ul>
  <li>starts with the value  0,  denoted by the fraction  $ \frac{0}{1} $</li>
  <li>ends with the value  1,  denoted by the fraction  $ \frac{1}{1}$.</li>
</ul>

Farey sequences ของลำดับ `1` ถึง `5` เป็น:

<ul>
  <li style='list-style: none;'>${\bf\it{F}}_1 = \frac{0}{1}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_2 = \frac{0}{1}, \frac{1}{2}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_3 = \frac{0}{1}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_4 = \frac{0}{1}, \frac{1}{4}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_5 = \frac{0}{1}, \frac{1}{5}, \frac{1}{4}, \frac{1}{3}, \frac{2}{5}, \frac{1}{2}, \frac{3}{5}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \frac{1}{1}$</li>
</ul>

# --instructions--

เขียนฟังก์ชันที่ส่งคืนลำดับแฟรี่ของคำสั่ง `n` ฟังก์ชันควรมีหนึ่งพารามิเตอร์ที่เป็น `n`ควรส่งคืนลำดับเป็นarray

# --hints--

`farey` ควรเป็น function.

```js
assert(typeof farey === 'function');
```

`farey(3)` ควร return array

```js
assert(Array.isArray(farey(3)));
```

`farey(3)` ควร return `["1/3","1/2","2/3"]`

```js
assert.deepEqual(farey(3), ['1/3', '1/2', '2/3']);
```

`farey(4)` ควร return `["1/4","1/3","1/2","2/4","2/3","3/4"]`

```js
assert.deepEqual(farey(4), ['1/4', '1/3', '1/2', '2/4', '2/3', '3/4']);
```

`farey(5)` ควร return `["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]`

```js
assert.deepEqual(farey(5), [
  '1/5',
  '1/4',
  '1/3',
  '2/5',
  '1/2',
  '2/4',
  '3/5',
  '2/3',
  '3/4',
  '4/5'
]);
```

# --seed--

## --seed-contents--

```js
function farey(n) {

}
```

# --solutions--

```js
function farey(n){
    let farSeq=[];
    for(let den = 1; den <= n; den++){
        for(let num = 1; num < den; num++){
            farSeq.push({
                str:num+"/"+den,
                val:num/den});
        }
    }
    farSeq.sort(function(a,b){
        return a.val-b.val;
    });
    farSeq=farSeq.map(function(a){
        return a.str;
    });
    return farSeq;
}
```
