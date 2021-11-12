---
id: 594810f028c0303b75339ad7
title: Zhang-Suen thinning algorithm
challengeType: 5
forumTopicId: 302347
dashedName: zhang-suen-thinning-algorithm
---

# --description--

นี่คือalgorithmที่ใช้ในการทำให้ภาพขาวดำบางลง เช่น หนึ่งบิตต่อภาพพิกเซล ตัวอย่างเช่น ด้วยภาพinputของ:

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

จะได้

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

สมมติว่าพิกเซลสีดำเป็นหนึ่งและพิกเซลสีขาวเป็นศูนย์ และภาพที่ป้อนเป็นarray N คูณ M สี่เหลี่ยมของหนึ่งและศูนย์ algorithmทำงานบนพิกเซลสีดำทั้งหมด P1 ที่สามารถมีneighboursได้แปดคน neighboursเรียงตามลำดับดังนี้

$$\begin{array}{|c|c|c|}
  \\hline
  P9 & P2              & P3\\\\ \\hline
  P8 & \boldsymbol{P1} & P4\\\\ \\hline
  P7 & P6              & P5\\\\ \\hline
\end{array}$$

เห็นได้ชัดว่าพิกเซลขอบเขตของภาพไม่สามารถมีneighboursครบแปดคนได้

- กำหนด $A(P1)$ = จำนวนการเปลี่ยนจากสีขาวเป็นสีดำ ($0 \to 1$) ในลำดับ P2, P3, P4, P5, P6, P7, P8, P9, P2 (หมายเหตุ P2 พิเศษที่ส่วนท้าย - เป็นวงกลม)
- กำหนด $B(P1)$ = จำนวนneighboursพิกเซลสีดำของ P1 ($= \\sum(P2 \ldots P9)$)

**Step 1:**

พิกเซลทั้งหมดได้รับการทดสอบและพิกเซลที่ตรงตามเงื่อนไขต่อไปนี้ทั้งหมด (พร้อมกัน) จะถูกบันทึกไว้ในขั้นตอนนี้

1. พิกเซลเป็นสีดำและมีneighboursแปดคน
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. อย่างน้อยหนึ่ง $P2$, $P4$ และ $P6$ เป็นสีขาว
5. อย่างน้อยหนึ่ง $P4$, $P6$ และ $P8$ เป็นสีขาว

หลังจากวนซ้ำบนรูปภาพและรวบรวมพิกเซลทั้งหมดที่ตรงตามเงื่อนไขขั้นตอนที่ 1 ทั้งหมด พิกเซลที่ตรงตามเงื่อนไขทั้งหมดเหล่านี้จะถูกตั้งค่าเป็นสีขาว

**Step 2:**

พิกเซลทั้งหมดได้รับการทดสอบอีกครั้ง และพิกเซลที่ตรงตามเงื่อนไขต่อไปนี้ทั้งหมดจะถูกบันทึกไว้ในขั้นตอนนี้

1. พิกเซลเป็นสีดำและมีneighboursแปดคน
2. $2 \le B(P1) \le 6$
3. $A(P1) = 1$
4. อย่างน้อยหนึ่ง $P2$, $P4$ และ $P8$ เป็นสีขาว
5. อย่างน้อยหนึ่ง $P2$, $P6$ และ $P8$ เป็นสีขาว

หลังจากวนซ้ำบนรูปภาพและรวบรวมพิกเซลทั้งหมดที่ตรงตามเงื่อนไขขั้นตอนที่ 2 ทั้งหมด พิกเซลที่ตรงตามเงื่อนไขทั้งหมดเหล่านี้จะถูกตั้งค่าเป็นสีขาวอีกครั้ง

**Iteration:**

หากมีการตั้งค่าพิกเซลใดๆ ในรอบนี้ของขั้นตอนที่ 1 หรือขั้นตอนที่ 2 ขั้นตอนทั้งหมดจะถูกทำซ้ำจนกว่าจะไม่มีการเปลี่ยนแปลงพิกเซลของภาพ

# --instructions--
เขียนกิจวัตรเพื่อทำให้Zhang-Suenบางลงใน "รูปภาพ" ที่ให้มา ซึ่งเป็นarrayของstring โดยที่แต่ละstringแสดงถึงบรรทัดเดียวของรูปภาพ ในstring "#" หมายถึงพิกเซลสีดำ และช่องว่างหมายถึงพิกเซลสีขาว ฟังก์ชันควรreturnรูปภาพที่บางลง โดยใช้การแสดงแบบเดียวกัน

# --hints--

`thinImage` ควรเป็น function.

```js
assert.equal(typeof thinImage, 'function');
```

`thinImage` ควร return array.

```js
assert(Array.isArray(thinImage(_testImage1)));
```

`thinImage` ควร return array ของ strings.

```js
assert.equal(typeof thinImage(_testImage1)[0], 'string');
```

`thinImage(testImage1)` ควร return thinned image เหมือนตัวอย่าง.

```js
assert.deepEqual(thinImage(_testImage1), expected1);
```

`thinImage(testImage2)` ควร return thinned image.

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
