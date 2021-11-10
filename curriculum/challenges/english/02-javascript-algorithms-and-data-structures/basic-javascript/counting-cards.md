---
id: 565bbe00e9cc8ac0725390f4
title: Counting Cards
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KE7ty'
forumTopicId: 16809
dashedName: counting-cards
---

# --description--

ในเกมคาสิโน Blackjack ผู้เล่นสามารถได้เปรียบเหนือเจ้ามือ โดยการติดตามจำนวนไพ่เลขสูงและต่ำที่เหลืออยู่ในสำรับ เรียกว่า [การนับไพ่](https://en.wikipedia.org/wiki/Card_counting)

# - การมีไพ่สูงเหลืออยู่ในสำรับจะเป็นประโยชน์ต่อผู้เล่น ไพ่แต่ละใบมีค่ากำหนดตามตารางด้านล่าง เมื่อนับเป็นบวก ผู้เล่นควรเดิมพันสูง เมื่อการนับเป็นศูนย์หรือติดลบ ผู้เล่นควรเดิมพันต่ำ

<table class='table table-striped'><thead><tr><th>Count Change</th><th>Cards</th></tr></thead><tbody><tr><td>+1</td><td>2, 3, 4, 5, 6</td></tr><tr><td>0</td><td>7, 8, 9</td></tr><tr><td>-1</td><td>10, 'J', 'Q', 'K', 'A'</td></tr></tbody></table>

You will write a card counting function. It will receive a `card` parameter, which can be a number or a string, and increment or decrement the global `count` variable according to the card's value (see table). The function will then return a string with the current count and the string `Bet` if the count is positive, or `Hold` if the count is zero or negative. The current count and the player's decision (`Bet` or `Hold`) should be separated by a single space.

# - คุณจะเขียนฟังก์ชันการนับไพ่ ที่รับพารามิเตอร์ `card` ซึ่งสามารถเป็น number หรือ string และเพิ่มหรือลดค่าตัวแปร global `count` ตามมูลค่าของไพ่ (ดูตาราง) จากนั้นฟังก์ชันจะคืนค่า string ที่เป็นจำนวนนับปัจจุบัน (current count) และ string `Bet` หากการนับเป็นบวก หรือ string `Hold` หากการนับเป็นศูนย์หรือติดลบ การนับปัจจุบันและการตัดสินใจของผู้เล่น (`Bet` หรือ `Hold`) ควรคั่นด้วยเว้นวรรค

**Example Outputs:** `-3 Hold` หรือ `5 Bet`

**Hint**  

# - ห้ามรีเซ็ต `count` เป็น 0 เมื่อมีค่าเท่ากับ 7, 8, หรือ 9
ห้ามส่งคืนค่าเป็น array
ห้ามใส่ quote (single หรือ double) ในผลลัพธ์

# --hints--

ลำดับไพ่ 2, 3, 4, 5, 6 ควรได้ผลลัพธ์ `5 Bet`

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

ลำดับไพ่ 7, 8, 9 ควรคืนค่าเป็น string `0 Hold`

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

ลำดับไพ่ 10, J, Q, K, A ควรคืนค่าเป็น string `-5 Hold`

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

ลำดับไพ่ 3, 7, Q, 8, A ควรคืนค่าเป็น string `-1 Hold`

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

ลำดับไพ่ 2, J, 9, 2, 7 ควรคืนค่าเป็น string `1 Bet`

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

ลำดับไพ่  2, 2, 10  ควรคืนค่าเป็น string `1 Bet`

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

ลำดับไพ่ 3, 2, A, 10, K ควรคืนค่าเป็น string `-1 Hold`

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
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
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
