---
id: 5eb3e4a21f462f409d656c73
title: Self-referential sequence
challengeType: 5
forumTopicId: 385317
dashedName: self-referential-sequence
---

# --description--

มีหลายวิธีในการสร้างลำดับการอ้างอิงตนเอง เช่น ([Look-and-say sequence](<https://rosettacode.org/wiki/Look-and-say sequence>)) ที่จะเริ่มต้นด้วยจำนวนเต็มบวก แล้วสร้างข้อมูลถัดไปโดยการรวมข้อมูลก่อนหน้า:

<pre>0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...</pre>

อีกวิธีหนึ่งในการสร้างลำดับการอ้างอิงตนเองคือการสรุปค่าของข้อมูลก่อนหน้า

นับจำนวนหลักที่เหมือนกันแต่ละหลัก จากนั้นจึงรวมผลรวมและหลักสำหรับตัวเลขที่แจกแจงแต่ละหลัก โปรดทราบว่าห้าข้อมูลแรกจะเหมือนกับลำดับก่อนหน้า

<pre>0, 10, 1110, 3110, 132110, 13123110, 23124110 ...</pre>

เรียงตัวเลขจากมากไปหาน้อย ไม่รวมการนับตัวเลขที่ไม่ปรากฏในข้อมูลก่อนหน้า

ขึ้นอยู่กับค่าเริ่มต้นอนุกรมที่สร้างด้วยวิธีนี้มักจะมาบรรจบกันเป็นค่าคงที่หรือเป็นรูปแบบวัฏจักรสั้น ๆ (สำหรับจุดประสงค์ของเรา การบรรจบกันหมายความว่าองค์ประกอบตรงกับองค์ประกอบที่เห็นก่อนหน้านี้) ลำดับที่แสดง โดยมีค่าเริ่มต้นเป็น 0 มาบรรจบกันเป็นค่าคงที่ที่ 1433223110 หลังจากการวนซ้ำ 11 ครั้ง ค่าเมล็ดที่บรรจบกันเร็วที่สุดคือ 22 ค่าคงที่หลังจากองค์ประกอบแรก (ส่วนต่อไปคือ 22 ซึ่งเคยเห็นมาแล้ว)

# --instructions--

ให้เขียนฟังก์ชันที่รับค่าเริ่มต้นเป็นพารามิเตอร์ และสร้างลำดับการอ้างอิงตัวเองจนกว่าจะมาบรรจบกัน และคืนค่าเป็น array

# --hints--

`selfReferential` ต้องเป็นฟังก์ชัน

```js
assert(typeof selfReferential === 'function');
```

`selfReferential(40)` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(selfReferential(40)));
```

`selfReferential(40)` ต้องคืนค่าเป็น `["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"]`

```js
assert.deepEqual(selfReferential(40), [
  '40',
  '1410',
  '142110',
  '14123110',
  '1413124110',
  '2413125110',
  '151413224110',
  '152413225110',
  '251413324110',
  '152423224110',
  '152413423110'
]);
```

`selfReferential(132110)` ต้องคืนค่าเป็น `["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"]`

```js
assert.deepEqual(selfReferential(132110), [
  '132110',
  '13123110',
  '23124110',
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(132211)` ต้องคืนค่าเป็น `["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"]`

```js
assert.deepEqual(selfReferential(132211), [
  '132211',
  '132231',
  '232221',
  '134211',
  '14131231',
  '14231241',
  '24132231',
  '14233221'
]);
```

`selfReferential(1413223110)` ต้องคืนค่าเป็น `["1413223110", "1423224110", "2413323110", "1433223110"]`

```js
assert.deepEqual(selfReferential(1413223110), [
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(251413126110)` ต้องคืนค่าเป็น `["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"]`

```js
assert.deepEqual(selfReferential(251413126110), [
  '251413126110',
  '16151413225110',
  '16251413226110',
  '26151413325110',
  '16251423225110',
  '16251413424110',
  '16153413225110'
]);
```

# --seed--

## --seed-contents--

```js
function selfReferential(n) {

}
```

# --solutions--

```js
function selfReferential(n) {
  var descending,
    i,
    incr,
    j,
    max_i,
    max_len,
    max_seq,
    seq,
    sequence,
    indexOf =
      [].indexOf ||
      function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item) return i;
        }
        return -1;
      };

  sequence = function(n) {
    var c, cnt, cnts, d, digit, i, j, l, len, new_cnts, ref, s, seq;
    cnts = {};
    ref = n.toString();
    for (j = 0, len = ref.length; j < len; j++) {
      c = ref[j];
      d = parseInt(c);
      incr(cnts, d);
    }
    seq = [ref];
    while (true) {
      s = '';
      for (i = l = 9; l >= 0; i = --l) {
        if (cnts[i]) {
          s += '' + cnts[i] + i;
        }
      }
      if (indexOf.call(seq, s) >= 0) {
        break;
      }
      seq.push(s);
      new_cnts = {};
      for (digit in cnts) {
        cnt = cnts[digit];
        incr(new_cnts, cnt);
        incr(new_cnts, digit);
      }
      cnts = new_cnts;
    }
    return seq;
  };

  incr = function(h, k) {
    if (h[k] == null) {
      h[k] = 0;
    }
    return (h[k] += 1);
  };

  descending = function(n) {
    var tens;
    if (n < 10) {
      return true;
    }
    tens = n / 10;
    if (n % 10 > tens % 10) {
      return false;
    }
    return descending(tens);
  };

  return sequence(n);
}
```
