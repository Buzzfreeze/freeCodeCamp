---
id: 5900f3c11000cf542c50fed3
title: 'Problem 84: Monopoly odds'
challengeType: 5
forumTopicId: 302198
dashedName: problem-84-monopoly-odds
---

# --description--

ในเกมเศรษฐี จะมีกระดานหน้าตาแบบนี้:

<div style="text-align: center;">
  <table cellspacing="1" cellpadding="5" border="0" style="background-color: black; color: black;" align="center">
    <tbody>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">GO</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">A1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CC1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">A2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">T1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">R1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CH1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">B3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">JAIL</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">H2</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">C1</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">T2</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">U1</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">H1</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">C2</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CH3</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">C3</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">R4</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">R2</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">G3</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">D1</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CC3</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CC2</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">G2</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">D2</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">G1</td>
        <td colspan="9">&nbsp;</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">D3</td>
      </tr>
      <tr>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">G2J</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">F3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">U2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">F2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">F1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">R3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">E3</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">E2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">CH2</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">E1</td>
        <td style="background-color: #ffffff; color: black; padding: 5px; border: 1px solid black;">FP</td>
      </tr>
    </tbody>
  </table>
</div><br>

ผู้เล่นเริ่มต้นที่ช่อง GO และทอยลูกเต๋า 6 ด้านสองลูก เพื่อกำหนดจำนวนช่องที่จะเดินไปในทิศทางตามเข็มนาฬิกา ถ้าไม่มีกฎเกณฑ์ใดๆ เพิ่มเติม เราคาดผู้เล่นจะตกลงแต่ละช่องด้วยความน่าจะเป็นที่เท่ากัน คือ: 2.5% แต่ การไปหยุดบน G2J (Go To Jail), CC (community chest), และ CH (chance) จะเปลี่ยนความน่าจะเป็นนั้น

อีกทั้ง G2J และไพ่จาก CC และ CH ที่สั่งให้ผู้เล่นเข้าคุกโดยตรง หากผู้เล่นทอยสามคู่ติดต่อกัน พวกเขาจะไม่ได้ขยับตามการทอยครั้งที่ 3 แต่จะไปเข้าคุกแทน

ในตอนเริ่มเกม จะลับไพ่ CC และ CH เมื่อผู้เล่นตกลงบน CC หรือ CH พวกเขาจะหยิบไพ่จากด้านบนของกองนั้น ๆ และหลังจากทำตามคำแนะนำแล้ว ไพ่นั้นจะกลับไปที่ด้านล่างของกอง มีไพ่สิบหกใบในแต่ละกอง แต่สำหรับจุดประสงค์ของปัญหานี้ เราเกี่ยวข้องกับไพ่ที่สั่งการเคลื่อนไหวเท่านั้น คำสั่งใดๆ ที่ไม่เกี่ยวข้องกับการเคลื่อนไหวจะถูกละเว้น และผู้เล่นจะยังคงอยู่ในช่อง CC/CH

<ul>
  <li>Community Chest (2/16 cards):</li>
  <ol>
    <li>Advance to GO</li>
    <li>Go to JAIL</li>
  </ol>

  <li>Chance (10/16 cards):</li>
  <ol>
    <li>Advance to GO</li>
    <li>Go to JAIL</li>
    <li>Go to C1</li>
    <li>Go to E3</li>
    <li>Go to H2</li>
    <li>Go to R1</li>
    <li>Go to next R (railway company)</li>
    <li>Go to next R</li>
    <li>Go to next U (utility company)</li>
    <li>Go back 3 squares.</li>
  </ol>
</ul>

หัวใจของปัญหานี้เกี่ยวข้องกับความน่าจะเป็นของการไปตกลงบนช่องใดช่องหนึ่ง นั่นคือความน่าจะเป็นที่จะจไปลงที่ช่องหลักการทอยลูกเต๋า ด้วยเหตุผลนี้ จึงควรมีความชัดเจนว่า ยกเว้น G2J ที่ความน่าจะเป็นที่จะจบเป็นศูนย์ ช่อง CH จะมีความน่าจะเป็นต่ำที่สุด เนื่องจาก 5/8 ขอย้ายไปยังช่องอื่น และถือเป็นที่สิ้นสุด ตารางที่ผู้เล่นทำเสร็จในแต่ละม้วนที่เราสนใจ เราจะไม่แยกความแตกต่างระหว่าง "เพียงแค่เยี่ยม" และถูกส่งไปยัง JAIL และเราจะเพิกเฉยต่อกฎเกณฑ์เกี่ยวกับการกำหนดให้สองเท่าเพื่อ "ออกจากคุก" สมมติว่าพวกเขาจ่ายเงินเพื่อออกไปในเทิร์นถัดไป

โดยเริ่มต้นที่ GO และกำหนดหมายเลขช่องตามลำดับจาก 00 ถึง 39 เราสามารถเชื่อมตัวเลขสองหลักเหล่านี้เพื่อสร้างสตริงที่สอดคล้องกับชุดของช่อง

จากสถิติจะเห็นได้ว่าช่องที่ตกได้บ่อยที่สุดสามช่องตามลำดับคือ JAIL (6.24%) = Square 10, E3 (3.18%) = Square 24 และ GO (3.09%) = Square 00 ดังนั้นช่องสี่เหลี่ยมยอดนิยมทั้งสามช่องนี้ สามารถแสดงด้วย modal string หกหลักเป็น `102400`

ถ้าแทนที่จะใช้ลูกเต๋า 6 ด้าน 2 ลูก เรามาใช้ลูกเต๋า 'n' ด้านสองลูกแทน ให้หาค่าของ modal string หกหลัก

# --hints--

`monopolyOdds(8)` ต้องคืนค่าเป็นสตริง

```js
assert(typeof monopolyOdds(8) === 'string');
```

`monopolyOdds(8)` ต้องคืนค่าเป็นสตริง `102400`

```js
assert.strictEqual(monopolyOdds(8), '102400');
```

`monopolyOdds(10)` ต้องคืนค่าเป็นสตริง `100024`

```js
assert.strictEqual(monopolyOdds(10), '100024');
```

`monopolyOdds(20)` ต้องคืนค่าเป็นสตริง `100005`

```js
assert.strictEqual(monopolyOdds(20), '100005');
```

`monopolyOdds(4)` ต้องคืนค่าเป็นสตริง `101524`

```js
assert.strictEqual(monopolyOdds(4), '101524');
```

# --seed--

## --seed-contents--

```js
function monopolyOdds(n) {

  return true;
}

monopolyOdds(8);
```

# --solutions--

```js
function monopolyOdds(n) {
  function chanceCard(position, chanceCardPosition) {
    chanceCardPosition = (chanceCardPosition + 1) % 16;
    if (chanceCardPosition < 6) {
      position = chanceCardsMoves[chanceCardPosition];
    } else if (chanceCardPosition === 6 || chanceCardPosition === 7) {
      position = nextMovesFromR[position];
    } else if (chanceCardPosition === 8) {
      position = nextMovesFromU[position];
    } else if (chanceCardPosition === 9) {
      position -= 3;
    }
    return [position, chanceCardPosition];
  }

  function chestCard(position, chestPosition) {
    chestPosition = (chestPosition + 1) % 16;
    if (chestPosition < 2) {
      position = chestCardsMoves[chestPosition];
    }
    return [position, chestPosition];
  }

  function isChest(position) {
    return position === 2 || position === 17 || position === 33;
  }

  function isChance(position) {
    return position === 7 || position === 22 || position === 36;
  }

  function isJail(position) {
    return position === 30;
  }

  function roll(dice) {
    return Math.floor(Math.random() * dice) + 1;
  }

  function getTopThree(board) {
    return sortByVisits(board)
      .slice(0, 3)
      .map(elem => elem[0].toString().padStart(2, '0'))
      .join('');
  }

  function sortByVisits(board) {
    return board
      .map((element, index) => [index, element])
      .sort((a, b) => a[1] - b[1])
      .reverse();
  }

  const rounds = 2000000;
  const chestCardsMoves = [0, 10];
  const chanceCardsMoves = [0, 10, 11, 24, 39, 5];
  const nextMovesFromR = { 7: 15, 22: 25, 36: 5 };
  const nextMovesFromU = { 7: 12, 36: 12, 22: 28 };

  const board = new Array(40).fill(0);
  let doubleCount = 0;
  let curPosition = 0;
  let curChestCard = 0;
  let curChanceCard = 0;

  for (let i = 0; i < rounds; i++) {
    const dice1 = roll(n);
    const dice2 = roll(n);

    if (dice1 === dice2) {
      doubleCount++;
    } else {
      doubleCount = 0;
    }

    if (doubleCount > 2) {
      curPosition = 10;
      doubleCount = 0;
    } else {
      curPosition = (curPosition + dice1 + dice2) % 40;

      if (isChance(curPosition)) {
        [curPosition, curChanceCard] = chanceCard(curPosition, curChanceCard);
      } else if (isChest(curPosition)) {
        [curPosition, curChestCard] = chestCard(curPosition, curChestCard);
      } else if (isJail(curPosition)) {
        curPosition = 10;
      }
    }
    board[curPosition]++;
  }
  return getTopThree(board);
}
```
