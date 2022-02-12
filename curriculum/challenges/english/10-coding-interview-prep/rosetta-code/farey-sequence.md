---
id: 59c3ec9f15068017c96eb8a3
title: Farey sequence
challengeType: 5
forumTopicId: 302266
dashedName: farey-sequence
---

# --description--

[Farey sequence](<https://en.wikipedia.org/wiki/Farey sequence> "wp: Farey sequence") <code>F<sub>n</sub></code> ของลำดับ `n` คือลำดับของเศษส่วนที่ลดลงอย่างสมบูรณ์ระหว่าง `0` และ `1` ซึ่งเมื่ออยู่ในพจน์ที่ต่ำที่สุด จะมีตัวส่วนน้อยกว่าหรือเท่ากับ `n` จัดเรียงตามขนาดที่เพิ่มขึ้น

บางคนจะเรียก *Farey sequence* ว่า *Farey series* ซึ่งชื่อนี้ไม่ถูกต้อง

Farey sequence แต่ละตัวจะต้อง:

<ul>
  <li>เริ่มที่ 0 ซึ่งมาจาก $ \frac{0}{1}$</li>
  <li>จบที่ 1 ซึ่งมาจาก $ \frac{1}{1}$</li>
</ul>

Farey sequence ของ `1` ถึง `5` เป็น:

<ul>
  <li style='list-style: none;'>${\bf\it{F}}_1 = \frac{0}{1}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_2 = \frac{0}{1}, \frac{1}{2}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_3 = \frac{0}{1}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_4 = \frac{0}{1}, \frac{1}{4}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_5 = \frac{0}{1}, \frac{1}{5}, \frac{1}{4}, \frac{1}{3}, \frac{2}{5}, \frac{1}{2}, \frac{3}{5}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \frac{1}{1}$</li>
</ul>

# --instructions--

ให้เขียนฟังก์ชันที่คืนค่าเป็น Farey sequence ของ `n` ให้ฟังก์ชันรับพารามิตเตอร์ `n` และคืนค่าเป็น array

# --hints--

`farey` ต้องเป็นฟังก์ชัน

```js
assert(typeof farey === 'function');
```

`farey(3)` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(farey(3)));
```

`farey(3)` ต้องคืนค่าเป็น `["1/3","1/2","2/3"]`

```js
assert.deepEqual(farey(3), ['1/3', '1/2', '2/3']);
```

`farey(4)` ต้องคืนค่าเป็น `["1/4","1/3","1/2","2/4","2/3","3/4"]`

```js
assert.deepEqual(farey(4), ['1/4', '1/3', '1/2', '2/4', '2/3', '3/4']);
```

`farey(5)` ต้องคืนค่าเป็น `["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]`

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
