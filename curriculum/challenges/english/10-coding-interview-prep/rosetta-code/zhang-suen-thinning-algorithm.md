---
id: 594810f028c0303b75339ad7
title: Zhang-Suen thinning algorithm
challengeType: 5
forumTopicId: 302347
dashedName: zhang-suen-thinning-algorithm
---

# --description--

อัลกอริทึมนี้ใช้สำหรับการทำให้ภาพขาวดำดูจางลง เช่น ลดลงหนึ่งบิตต่อพิกเซลหนึ่ง 

ลองดูตัวอย่าง:

```js
const testImage1 = [
 '                               ',
 '#########       ########       ',
 '###   ####     ####  ####      ',
 '###    ###     ###    ###      ',
 '###   ####     ###             ',
 '#########      ###             ',
 '### ####       ###    ###      ',
 '###  ####  ### ####  #### ###  ',
 '###   #### ###  ########  ###  ',
 '                               '
];
```

ถ้านำไปเข้าอัลกอริทึมนี้จะได้ผลลัพธ์เป็น

```js
[ '                               ',
  '########         ######        ',
  '#      #        ##             ',
  '#       #       #              ',
  '#      #        #              ',
  '###### #        #              ',
  '#     ##        #              ',
  '#      #    #   ##    ##   #   ',
  '#       #         ####         ',
  '                               ' ];
```

## Algorithm

ให้มองว่าว่าพิกเซลสีดำเป็น 1 และพิกเซลสีขาวเป็น 0 และภาพที่ส่งเข้ามาเป็น array ขนาด N x M ที่มีค่าข้างในเป็น 0 และ 1 

อัลกอริทึมนี้จะอ่านพิกเซลสีดำทีมีค่าข้างเคียงได้ 8 ค่าดังนี้

$$\begin{array}{|c|c|c|}
  \\hline
  P9 & P2              & P3\\\\ \\hline
  P8 & \boldsymbol{P1} & P4\\\\ \\hline
  P7 & P6              & P5\\\\ \\hline
\end{array}$$

ซึ่งจะทำให้พิกเซลสีดำที่อยู่ติดขอบของภาพ ไม่สามารถมีค่าข้างเคียงครบ 8 ค่าได้

- กำหนดให้ $A(P1)$ = จำนวนการเปลี่ยนจากสีขาวเป็นสีดำ ($0 \to 1$) ในลำดับ P2, P3, P4, P5, P6, P7, P8, P9, P2 (จะเห็นว่ามี P2 ทั้งส่วนต้นและส่วนท้าย  เป็นการสื่อว่าค่านี้จะวนได้)
- กำหนดให้ $B(P1)$ = จำนวนพิกเซลข้างเคียงที่เป็นสีดำของ P1 ($= \\sum(P2 \ldots P9)$)

**Step 1:**

อัลกอริทึมนี้จะอ่านค่าพิกเซลทั้งหมด เก็บข้อมูลของพิกเซลที่ตรงตามเงื่อนไขนี้ (ทำทุกพิกเซลพร้อมๆกัน)

1. ดูว่าพิกเซลเป็นสีดำและมีพิกเซลข้างเคียงแปดพิกเซล
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. มี $P2$, $P4$ หรือ $P6$ เป็นสีขาวอย่างน้อยหนึ่งพิกเซล
5. มี $P4$, $P6$ หรือ $P8$ เป็นสีขาวอย่างน้อยหนึ่งพิกเซล

หลังจากอ่านค่าครบทุกพิกเซลแล้ว จะเปลี่ยนพิกเซลที่ตรงตามเงื่อนไขทั้ง 5 ข้อเป็นสีขาว

**Step 2:**

พิกเซลทั้งหมดได้รับการทดสอบอีกครั้ง และพิกเซลที่ตรงตามเงื่อนไขต่อไปนี้ทั้งหมดจะถูกบันทึกไว้ในขั้นตอนนี้

1. ดูว่าพิกเซลเป็นสีดำและมีพิกเซลข้างเคียงแปดพิกเซล
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. มี $P2$, $P4$ หรือ $P8$ เป็นสีขาวอย่างน้อยหนึ่งพิกเซล
5. มี $P2$, $P6$ หรือ $P8$ เป็นสีขาวอย่างน้อยหนึ่งพิกเซล

หลังจากอ่านค่าครบทุกพิกเซลแล้ว จะเปลี่ยนพิกเซลที่ตรงตามเงื่อนไขทั้ง 5 ข้อเป็นสีขาวอีกครั้ง

**Iteration:**

และจพทำซ้ำไปเรื่อยๆ จนกว่าไม่มีพิกเซลที่ถูกเปลี่ยนสีอีกแล่ว

# --instructions--
ให้เขียนฟังก์ชันเพื่อทำการใช้วิธีการ Zhang-Suen กับ `image` ที่ให้มา 

โดย `image` จะเป็น array ของสตริง โดยสตริงแต่ละตัวจะสื่อถึงแต่ละแถวของรูปภาพ และ `#` ในสตริงหมายถึงพิกเซลสีดำ และเว้นวรรคหมายถึงพิกเซลสีขาว 

ฟังก์ชันนี้ต้องคืนค่าเป็น array ของสตริงในรูปแบบเดียวกับที่ส่งเข้ามา แต่ทำให้ภาพจางลง

# --hints--

`thinImage` ต้องเป็นฟังก์ชัน

```js
assert.equal(typeof thinImage, 'function');
```

`thinImage` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(thinImage(_testImage1)));
```

`thinImage` ต้องคืนค่าเป็น array ของสตริง

```js
assert.equal(typeof thinImage(_testImage1)[0], 'string');
```

`thinImage(testImage1)` ต้องคืนค่าเป็นรูปที่จางลงเหมือนตัวอย่าง

```js
assert.deepEqual(thinImage(_testImage1), expected1);
```

`thinImage(testImage2)` ต้องคืนค่าเป็นรูปที่จางลง

```js
assert.deepEqual(thinImage(_testImage2), expected2);
```

# --seed--

## --after-user-code--

```js
const _testImage1 = [
  '                               ',
  '#########       ########       ',
  '###   ####     ####  ####      ',
  '###    ###     ###    ###      ',
  '###   ####     ###             ',
  '#########      ###             ',
  '### ####       ###    ###      ',
  '###  ####  ### ####  #### ###  ',
  '###   #### ###  ########  ###  ',
  '                               '
];
const expected1 = [
  '                               ',
  '########         ######        ',
  '#      #        ##             ',
  '#       #       #              ',
  '#      #        #              ',
  '###### #        #              ',
  '#     ##        #              ',
  '#      #    #   ##    ##   #   ',
  '#       #         ####         ',
  '                               '
];
const _testImage2 = [
  '                                                          ',
  ' #################                   #############        ',
  ' ##################               ################        ',
  ' ###################            ##################        ',
  ' ########     #######          ###################        ',
  '   ######     #######         #######       ######        ',
  '   ######     #######        #######                      ',
  '   #################         #######                      ',
  '   ################          #######                      ',
  '   #################         #######                      ',
  '   ######     #######        #######                      ',
  '   ######     #######        #######                      ',
  '   ######     #######         #######       ######        ',
  ' ########     #######          ###################        ',
  ' ########     ####### ######    ################## ###### ',
  ' ########     ####### ######      ################ ###### ',
  ' ########     ####### ######         ############# ###### ',
  '                                                          '];
const expected2 = [
  '                                                          ',
  '                                                          ',
  '    # ##########                       #######            ',
  '     ##        #                   ####       #           ',
  '     #          #                 ##                      ',
  '     #          #                #                        ',
  '     #          #                #                        ',
  '     #          #                #                        ',
  '     ############               #                         ',
  '     #          #               #                         ',
  '     #          #                #                        ',
  '     #          #                #                        ',
  '     #          #                #                        ',
  '     #                            ##                      ',
  '     #                             ############           ',
  '                       ###                          ###   ',
  '                                                          ',
  '                                                          '
];
```

## --seed-contents--

```js
function thinImage(image) {

}

const testImage1 = [
  '                               ',
  '#########       ########       ',
  '###   ####     ####  ####      ',
  '###    ###     ###    ###      ',
  '###   ####     ###             ',
  '#########      ###             ',
  '### ####       ###    ###      ',
  '###  ####  ### ####  #### ###  ',
  '###   #### ###  ########  ###  ',
  '                               '
];
```

# --solutions--

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

const ZhangSuen = (function () {
  function ZhangSuen() {
  }

  ZhangSuen.nbrs = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1]];

  ZhangSuen.nbrGroups = [[[0, 2, 4], [2, 4, 6]], [[0, 2, 6], [0, 4, 6]]];

  ZhangSuen.toWhite = [];

  ZhangSuen.main = function (image) {
    ZhangSuen.grid = new Array(image);
    for (let r = 0; r < image.length; r++) {
      ZhangSuen.grid[r] = image[r].split('');
    }
    ZhangSuen.thinImage();
    return ZhangSuen.getResult();
  };

  ZhangSuen.thinImage = function () {
    let firstStep = false;
    let hasChanged;
    do {
      hasChanged = false;
      firstStep = !firstStep;
      for (let r = 1; r < ZhangSuen.grid.length - 1; r++) {
        for (let c = 1; c < ZhangSuen.grid[0].length - 1; c++) {
          if (ZhangSuen.grid[r][c] !== '#') {
            continue;
          }
          const nn = ZhangSuen.numNeighbors(r, c);
          if (nn < 2 || nn > 6) {
            continue;
          }
          if (ZhangSuen.numTransitions(r, c) !== 1) {
            continue;
          }
          if (!ZhangSuen.atLeastOneIsWhite(r, c, firstStep ? 0 : 1)) {
            continue;
          }
          ZhangSuen.toWhite.push(new Point(c, r));
          hasChanged = true;
        }
      }
      for (let i = 0; i < ZhangSuen.toWhite.length; i++) {
        const p = ZhangSuen.toWhite[i];
        ZhangSuen.grid[p.y][p.x] = ' ';
      }
      ZhangSuen.toWhite = [];
    } while ((firstStep || hasChanged));
  };

  ZhangSuen.numNeighbors = function (r, c) {
    let count = 0;
    for (let i = 0; i < ZhangSuen.nbrs.length - 1; i++) {
      if (ZhangSuen.grid[r + ZhangSuen.nbrs[i][1]][c + ZhangSuen.nbrs[i][0]] === '#') {
        count++;
      }
    }
    return count;
  };

  ZhangSuen.numTransitions = function (r, c) {
    let count = 0;
    for (let i = 0; i < ZhangSuen.nbrs.length - 1; i++) {
      if (ZhangSuen.grid[r + ZhangSuen.nbrs[i][1]][c + ZhangSuen.nbrs[i][0]] === ' ') {
        if (ZhangSuen.grid[r + ZhangSuen.nbrs[i + 1][1]][c + ZhangSuen.nbrs[i + 1][0]] === '#') {
          count++;
        }
      }
    }
    return count;
  };

  ZhangSuen.atLeastOneIsWhite = function (r, c, step) {
    let count = 0;
    const group = ZhangSuen.nbrGroups[step];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < group[i].length; j++) {
        const nbr = ZhangSuen.nbrs[group[i][j]];
        if (ZhangSuen.grid[r + nbr[1]][c + nbr[0]] === ' ') {
          count++;
          break;
        }
      }
    }
    return count > 1;
  };

  ZhangSuen.getResult = function () {
    const result = [];
    for (let i = 0; i < ZhangSuen.grid.length; i++) {
      const row = ZhangSuen.grid[i].join('');
      result.push(row);
    }
    return result;
  };
  return ZhangSuen;
}());

function thinImage(image) {
  return ZhangSuen.main(image);
}
```
