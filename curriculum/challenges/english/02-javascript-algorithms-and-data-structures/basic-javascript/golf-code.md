---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

ในเกม [golf](https://en.wikipedia.org/wiki/Golf) แต่ละหลุมมี `par` หมายถึงจำนวนเฉลี่ยของ `strokes` ที่นักกอล์ฟทำให้บอลลงหลุมได้ ก็ถือว่าเกมจบ ทั้งนี้ขึ้นอยู่กับว่า `strokes` ของคุณมากหรือน้อยกว่า `par` ก็จะใช้ชื่อเล่นที่ต่างกัน

function ของคุณจะรับ argument `par` และ `strokes` แล้วคืนค่า string ที่ถูกต้อง ตามตารางที่ลิสต์ stroke ตามลำดับความสำคัญ top (สูงสุด) ถึง bottom (ต่ำสุด):


<table class='table table-striped'><thead><tr><th>Strokes</th><th>Return</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par` และ `strokes` จะเป็นตัวเลขที่เป็นบวกเสมอ เราได้เพิ่ม array ของชื่อทั้งหมดเพื่อความสะดวกของคุณ

# --hints--

`golfScore(4, 1)` ควรคืนค่า string `Hole-in-one!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)` ควรคืนค่า string `Eagle`

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)` ควรคืนค่า string `Eagle`

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)` ควรคืนค่า string `Birdie`

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)` ควรคืนค่า string `Par`

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)` ควรคืนค่า string `Hole-in-one!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)` ควรคืนค่า string `Par`

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)` ควรคืนค่า string `Bogey`

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)` ควรคืนค่า string `Double Bogey`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)` ควรคืนค่า string `Go Home!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)` ควรคืนค่า string `Go Home!`

```js
assert(golfScore(5, 9) === 'Go Home!');
```

# --seed--

## --seed-contents--

```js
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
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
