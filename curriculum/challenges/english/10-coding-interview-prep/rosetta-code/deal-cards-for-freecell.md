---
id: 59694356a6e7011f7f1c5f4e
title: Deal cards for FreeCell
challengeType: 5
forumTopicId: 302246
dashedName: deal-cards-for-freecell
---

# --description--

*FreeCell* เป็นเกมไพ่โซลิแทร์ที่ Paul Alfille grเพิเข้าไปในระบบ PLATO ในปี 1978 จากนั้น Jim Horne จาก Microsoft จึงได้เปลี่ยนชื่อเป็น FreeCell และนำเกมกลับมาลงไว้ใน [DOS](https://rosettacode.org/wiki/DOS "DOS") และ [Windows](https://rosettacode.org/wiki/Windows "Windows")

เมื่อเกมได้รับความนิยม Jim Horne ก็ได้เปิดเผยอัลกอริทึมของเกมนี้ออกมา

อัลกอริทึมนี้ใช้ [linear congruential generator](<https://rosettacode.org/wiki/linear congruential generator> "linear congruential generator") ของ Microsoft C:

<ul>
  <li>$state_{n + 1} \equiv 214013 \times state_n + 2531011 \pmod{2^{31}}$</li>
  <li>$rand_n = state_n \div 2^{16}$</li>
  <li>$rand_n$ is in range 0 to 32767.</li>
</ul>

อัลกอริทึมจะดำเนินการดังนี้:

<ol>
  <li>Seed RNG โดยใช้ตัวจำนวนไพ่ที่หยิบ
  </li><li>สร้าง <a href='https://rosettacode.org/wiki/array' title='array' target='_blank'>array</a> ของไพ่ทั้ง 52 ใบ: A โพธิ์ดำ, A ข้าวหลามตัด, A โพธิ์แดง, A ดอกจิก, 2 โพธิ์ดำ, 2 ข้าวหลามตัด, ไปเรื่อยๆ โดยจะมี: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K และ array จะมี index ตั้งแต่ 0 ถึง 51, โดยที่มี A โพธิ์ดำ เป็น 0, และ K ดอกจิก เป็น 51</li>
  <li>จนกว่า array จะว่าง:</li>
  <li>เลือกไพ่แบบสุ่มที่ index ≡ เลขสุ่มตัวต่อไป (mod ความยาวของ array)</li>
    <ul>
      <li>สลับไพ่ใบที่สุ่มมานี้กับไพ่ใบสุดท้ายใน array</li>
      <li>ลบไพ่ที่สุ่มมานี้ออกจาก array (ความยาวของ array ลดลง 1)</li>
      <li>หยิบไพ่ที่สุ่มใบนี้ขึ้นมา</li>
    </ul>
  <li>หยิบไพ่ทั้ง 52 ใบ เปิดไพ่ออกมาและวางไว้ 8 แถว ไพ่ 8 แปดใบแรกจะไปอยู่ในแถวทั้ง 8 แถว และไพ่ 8 ไปถัดไปจะไปวางทับ 8 ใบแรกไปเรื่อยๆ</li>
</ol>

**ตัวอย่าง:**

**ลำดับการหยิบไพ่**

<pre> 1  2  3  4  5  6  7  8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52</pre>

**Game #1**

```js
[
  ['JD', '2D', '9H', 'JC', '5D', '7H', '7C', '5H'],
  ['KD', 'KC', '9S', '5S', 'AD', 'QC', 'KH', '3H'],
  ['2S', 'KS', '9D', 'QD', 'JS', 'AS', 'AH', '3C'],
  ['4C', '5C', 'TS', 'QH', '4H', 'AC', '4D', '7S'],
  ['3S', 'TD', '4S', 'TH', '8H', '2C', 'JH', '7D'],
  ['6D', '8S', '8D', 'QS', '6C', '3D', '8C', 'TC'],
  ['6S', '9C', '2H', '6H']
]
```

**Game #617**

```js
[
  ['7D', 'AD', '5C', '3S', '5S', '8C', '2D', 'AH'],
  ['TD', '7S', 'QD', 'AC', '6D', '8H', 'AS', 'KH'],
  ['TH', 'QC', '3H', '9D', '6S', '8D', '3D', 'TC'],
  ['KD', '5H', '9S', '3C', '8S', '7H', '4D', 'JS'],
  ['4C', 'QS', '9C', '9H', '7C', '6H', '2C', '2S'],
  ['4S', 'TS', '2H', '5D', 'JC', '6C', 'JH', 'QH'],
  ['JD', 'KS', 'KC', '4H']
]
```

# --instructions--

ให้เขียนฟังก์ชันเพื่อใช้หมายเลขdealsและไพ่แจกในลำดับเดียวกับอัลกอริทึมนี้ ฟังก์ชันต้องส่งคืนarrayสองมิติที่แสดงถึงบอร์ด FreeCell

ให้ลองตรวจสอบการหยิบไพ่กับ [FreeCell solutions to 1000000 games](https://freecellgamesolutions.com/)

# --hints--

`dealFreeCell` ต้องเป็นฟังก์ชัน

```js
assert(typeof dealFreeCell === 'function');
```

`dealFreeCell(seed)` ต้องคืนค่าเป็น object

```js
assert(typeof dealFreeCell(1) === 'object');
```

`dealFreeCell(seed)` ต้องคืนค่าเป็น array ที่มี 7 element

```js
assert(dealFreeCell(1).length === 7);
```

`dealFreeCell(1)` ต้องคืนค่าเป็น array ของ "Game #1"

```js
assert.deepEqual(dealFreeCell(1), game1);
```

`dealFreeCell(617)` ต้องคืนค่าเป็น array ของ "Game #617"

```js
assert.deepEqual(dealFreeCell(617), game617);
```

# --seed--

## --after-user-code--

```js
const replaceThis = 3;
const game1 = [
  ['JD', '2D', '9H', 'JC', '5D', '7H', '7C', '5H'],
  ['KD', 'KC', '9S', '5S', 'AD', 'QC', 'KH', '3H'],
  ['2S', 'KS', '9D', 'QD', 'JS', 'AS', 'AH', '3C'],
  ['4C', '5C', 'TS', 'QH', '4H', 'AC', '4D', '7S'],
  ['3S', 'TD', '4S', 'TH', '8H', '2C', 'JH', '7D'],
  ['6D', '8S', '8D', 'QS', '6C', '3D', '8C', 'TC'],
  ['6S', '9C', '2H', '6H']
];
const game617 = [
  ['7D', 'AD', '5C', '3S', '5S', '8C', '2D', 'AH'],
  ['TD', '7S', 'QD', 'AC', '6D', '8H', 'AS', 'KH'],
  ['TH', 'QC', '3H', '9D', '6S', '8D', '3D', 'TC'],
  ['KD', '5H', '9S', '3C', '8S', '7H', '4D', 'JS'],
  ['4C', 'QS', '9C', '9H', '7C', '6H', '2C', '2S'],
  ['4S', 'TS', '2H', '5D', 'JC', '6C', 'JH', 'QH'],
  ['JD', 'KS', 'KC', '4H']
];
```

## --seed-contents--

```js
function dealFreeCell(seed) {

  return true;
}
```

# --solutions--

```js
// RNG
function FreeCellRNG(seed) {
  return {
    lastNum: seed,
    next() {
      this.lastNum = ((214013 * this.lastNum) + 2531011) % (Math.pow(2, 31));
      return this.lastNum >> 16;
    }
  };
}
// Get cards
function getDeck() {
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
  const suits = ['C', 'D', 'H', 'S'];
  const cards = [];
  for (let i = 0; i < ranks.length; i += 1) {
    for (let j = 0; j < suits.length; j += 1) {
      cards.push(`${ranks[i]}${suits[j]}`);
    }
  }
  return cards;
}
function dealFreeCell(seed) {
  const rng = FreeCellRNG(seed);
  const deck = getDeck();

  const deltCards = [[], [], [], [], [], [], []];
  let currentColumn = 0;
  let currentRow = 0;

  let rand;
  let temp;
  let card;
  while (deck.length > 0) {
    // Choose a random card
    rand = rng.next() % deck.length;

    // Swap this random card with the last card in the array
    temp = deck[deck.length - 1];
    deck[deck.length - 1] = deck[rand];
    deck[rand] = temp;

    // Remove this card from the array
    card = deck.pop();

    // Deal this card
    deltCards[currentRow].push(card);
    currentColumn += 1;
    if (currentColumn === 8) {
      currentColumn = 0;
      currentRow += 1;
    }
  }

  return deltCards;
}
```
