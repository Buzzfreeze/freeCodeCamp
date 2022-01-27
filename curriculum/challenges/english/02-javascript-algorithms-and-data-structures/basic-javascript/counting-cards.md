---
id: 565bbe00e9cc8ac0725390f4
title: Counting Cards
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

ในเกม Blackjack ผู้เล่นจะได้เปรียบเจ้ามือ ถ้าผู้เล่นนับจำนวนไพ่สูงและไพ่ต่ำที่เหลืออยู่ในสำรับ เราเรียกวิธีนี้ว่า [การนับไพ่](https://en.wikipedia.org/wiki/Card_counting)

ผู้เล่นจะได้เปรียบถ้ามีไพ่สูงเหลืออยู่ในสำรับ ไพ่แต่ละใบมีค่าตามตารางด้านล่าง เมื่อนับแล้วได้ผลเป็นบวก ผู้เล่นควรพนันสูง เมื่อนับแล้วได้ผลเป็นศูนย์หรือติดลบ ผู้เล่นควรพนันต่ำ

<table class='table table-striped'><thead><tr><th>การนับ</th><th>ไพ่</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>

ให้เขียนฟังก์ชันการนับไพ่ ที่รับพารามิเตอร์ `card` ซึ่งเป็น number หรือ string ก็ได้ และเพิ่มหรือลดค่าตัวแปร global ที่ชื่อ `count` ตามค่าของไพ่ในตาราง จากนั้นให้ฟังก์ชันคืนค่า string ที่เป็นผลรวมของการนับ และตามด้วย string `Bet` หากนับแล้วได้ผลเป็นบวก หรือ string `Hold` ถ้านับแล้วได้ผลเป็นศูนย์หรือติดลบ ให้เว้นวรรคระหว่างผลของการนับกับ string `Bet` หรือ `Hold` ด้วย

**ตัวอย่างค่าที่คืนออกมา:** `-3 Hold` หรือ `5 Bet`

**Hint**  
ห้ามกำหนดค่า `count` เป็น 0 เมื่อไพ่เป็น 7, 8, หรือ 9  
ห้ามคืนค่าออกมาเป็น array  
ห้ามใส่ single หรือ double quote ในค่าที่คืนออกมา

# --hints--

ถ้าไพ่เป็น 2, 3, 4, 5, 6 ควรคืนค่า string `5 Bet` ออกมา

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(3);
    cc(4);
    cc(5);
    var out = cc(6);
    if (out === '5 Bet') {
      return true;
    }
    return false;
  })()
);
```

ถ้าไพ่เป็น 7, 8, 9 ควรคืนค่า string `0 Hold` ออกมา

```js
assert(
  (function () {
    count = 0;
    cc(7);
    cc(8);
    var out = cc(9);
    if (out === '0 Hold') {
      return true;
    }
    return false;
  })()
);
```

ถ้าไพ่เป็น 10, J, Q, K, A ควรคืนค่า string `-5 Hold` ออกมา

```js
assert(
  (function () {
    count = 0;
    cc(10);
    cc('J');
    cc('Q');
    cc('K');
    var out = cc('A');
    if (out === '-5 Hold') {
      return true;
    }
    return false;
  })()
);
```

ถ้าไพ่เป็น 3, 7, Q, 8, A ควรคืนค่า string `-1 Hold` ออกมา

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(7);
    cc('Q');
    cc(8);
    var out = cc('A');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

ถ้าไพ่เป็น 2, J, 9, 2, 7 ควรคืนค่า string `1 Bet` ออกมา

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc('J');
    cc(9);
    cc(2);
    var out = cc(7);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

ถ้าไพ่เป็น  2, 2, 10  ควรคืนค่า string `1 Bet` ออกมา

```js
assert(
  (function () {
    count = 0;
    cc(2);
    cc(2);
    var out = cc(10);
    if (out === '1 Bet') {
      return true;
    }
    return false;
  })()
);
```

ถ้าไพ่เป็น 3, 2, A, 10, K ควรคืนค่า string `-1 Hold` ออกมา

```js
assert(
  (function () {
    count = 0;
    cc(3);
    cc(2);
    cc('A');
    cc(10);
    var out = cc('K');
    if (out === '-1 Hold') {
      return true;
    }
    return false;
  })()
);
```

# --seed--

## --seed-contents--

```js
var count = 0;

function cc(card) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  return "Change Me";
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```

# --solutions--

```js
var count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```
