---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

ในการเล่น [กอล์ฟ](https://en.wikipedia.org/wiki/Golf) แต่ละหลุมจะมีค่า พาร์ (`par`) ซึ่งเป็นค่าเฉลี่ยของจำนวนครั้งที่ตี (`strokes`) ที่นักกอล์ฟทำให้ลูกลงหลุมได้ เมื่อลูกลงหลุมก็ถือว่าเกมจบ 
นักกอล์ฟจะมีชื่อเล่นที่ใช้เรียกค่าผลต่างของ `strokes` กับ `par` ด้วย ซึ่งแต่ละค่าก็จะมีชื่อต่างกัน

ฟังก์ชันที่คุณกำลังจะเขียนนั้นจะรับ argument `par` และ `strokes` แล้วคืนค่า string ที่ถูกต้อง ตามตารางด้านล่าง:


<table class='table table-striped'><thead><tr><th>จำนวนครั้งที่ตี</th><th>ค่าที่คืนออกมา</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

ค่าของ `par` และ `strokes` จะเป็นตัวเลขและเป็นค่าบวกเสมอ เราเขียน array ของชื่อทั้งหมดไว้ให้คุณแล้ว

# --hints--

การเรียกใช้ฟังก์ชัน `golfScore(4, 1)` ต้องคืนค่าออกมาเป็น string `Hole-in-one!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

การเรียกใช้ฟังก์ชัน `golfScore(4, 2)` ต้องคืนค่าออกมาเป็น string `Eagle`

```js
assert(golfScore(4, 2) === 'Eagle');
```

การเรียกใช้ฟังก์ชัน `golfScore(5, 2)` ต้องคืนค่าออกมาเป็น string `Eagle`

```js
assert(golfScore(5, 2) === 'Eagle');
```

การเรียกใช้ฟังก์ชัน `golfScore(4, 3)` ต้องคืนค่าออกมาเป็น string `Birdie`

```js
assert(golfScore(4, 3) === 'Birdie');
```

การเรียกใช้ฟังก์ชัน `golfScore(4, 4)` ต้องคืนค่าออกมาเป็น string `Par`

```js
assert(golfScore(4, 4) === 'Par');
```

การเรียกใช้ฟังก์ชัน `golfScore(1, 1)` ต้องคืนค่าออกมาเป็น string `Hole-in-one!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

การเรียกใช้ฟังก์ชัน `golfScore(5, 5)` ต้องคืนค่าออกมาเป็น string `Par`

```js
assert(golfScore(5, 5) === 'Par');
```

การเรียกใช้ฟังก์ชัน `golfScore(4, 5)` ต้องคืนค่าออกมาเป็น string `Bogey`

```js
assert(golfScore(4, 5) === 'Bogey');
```

การเรียกใช้ฟังก์ชัน `golfScore(4, 6)` ต้องคืนค่าออกมาเป็น string `Double Bogey`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

การเรียกใช้ฟังก์ชัน `golfScore(4, 7)` ต้องคืนค่าออกมาเป็น string `Go Home!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

การเรียกใช้ฟังก์ชัน `golfScore(5, 9)` ต้องคืนค่าออกมาเป็น string `Go Home!`

```js
assert(golfScore(5, 9) === 'Go Home!');
```

# --seed--

## --seed-contents--

```js
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // แก้โค้ดใต้บรรทัดนี้เท่านั้น


  return "Change Me";
  // แก้โค้ดเหนือบรรทัดนี้เท่านั้น
}

golfScore(5, 4);
```

# --solutions--

```js
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  }

  if (strokes <= par - 2) {
    return "Eagle";
  }

  if (strokes === par - 1) {
    return "Birdie";
  }

  if (strokes === par) {
    return "Par";
  }

  if (strokes === par + 1) {
    return "Bogey";
  }

  if(strokes === par + 2) {
    return "Double Bogey";
  }

  return "Go Home!";
}
```
