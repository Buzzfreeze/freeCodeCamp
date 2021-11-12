---
id: 5a23c84252665b21eecc8024
title: State name puzzle
challengeType: 5
forumTopicId: 302323
dashedName: state-name-puzzle
---

# --description--

งานนี้ได้รับแรงบันดาลใจจาก "การเล่นคำ" คอลัมน์ DDJ ของมาร์ค เนลสัน และหนึ่งในเกมไขปริศนาประจำสัปดาห์จาก Will Shortz ใน NPR Weekend Edition [\[1\]](https://www.npr.org/templates/story/story.php?storyId=9264290) และเดิมมีสาเหตุมาจาก David Edelheit ความท้าทายคือการนำชื่อของรัฐสองรัฐในสหรัฐฯ มาผสมกัน จากนั้นจึงจัดเรียงตัวอักษรใหม่เพื่อสร้างชื่อของรัฐสองรัฐ *ที่แตกต่างกัน* (เพื่อให้ชื่อรัฐทั้งสี่แตกต่างกัน) รัฐเหล่านี้คืออะไร? ปัญหาได้รับการเผยแพร่ใหม่บน [เว็บการสนทนาของ Unicon](https://tapestry.tucson.az.us/twiki/bin/view/Main/StateNamesPuzzle) ซึ่งรวมถึงโซลูชันต่างๆ พร้อมการวิเคราะห์ เทคนิคหลายอย่างอาจมีประโยชน์ และคุณอาจต้องการอ้างอิงถึง[การกำหนดหมายเลข Gödel](https://en.wikipedia.org/wiki/Goedel_numbering), [ความสัมพันธ์ที่เท่าเทียมกัน](https://en.wikipedia.org/wiki/Equivalence_relation ) และ [คลาสเทียบเท่า](https://en.wikipedia.org/wiki/Equivalence_classes) ข้อดีพื้นฐานของสิ่งเหล่านี้ถูกกล่าวถึงในเว็บอภิปราย Unicon ความท้าทายที่สองในรูปแบบของรัฐใหม่ที่สมมติขึ้นก็ถูกนำเสนอเช่นกัน

# --instructions--

เขียนฟังก์ชันเพื่อแก้ปัญหาสำหรับarrayของชื่อรัฐที่กำหนด ฟังก์ชันควรส่งคืนarray แต่ละองค์ประกอบควรเป็นวัตถุในรูปแบบนี้: `{"from":[],"to":[]}` array "from" ควรมีชื่อดั้งเดิมและarray "to" ควรมีชื่อผลลัพธ์

# --hints--

`solve` ควรเป็น function.

```js
assert(typeof solve == 'function');
```

`solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])` ควร return an array.

```js
assert(
  Array.isArray(
    solve([
      'New Mexico',
      'New York',
      'North Carolina ',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota'
    ])
  )
);
```

`solve(["New Mexico", "New York", "North Carolina ", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota"])` ควร return `[{ from: ["North Carolina ", "South Dakota"], to: ["North Dakota", "South Carolina"] }]`.

```js
assert.deepEqual(
  solve([
    'New Mexico',
    'New York',
    'North Carolina ',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota'
  ]),
  [
    {
      from: ['North Carolina ', 'South Dakota'],
      to: ['North Dakota', 'South Carolina']
    }
  ]
);
```

`solve(["New York", "New Kory", "Wen Kory", "York New", "Kory New", "New Kory"])` ควร return `[{ from: ["New Kory", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "New York"], to: ["Kory New", "Wen Kory"] }, { from: ["New Kory", "New York"], to: ["Kory New", "York New"] }, { from: ["New York", "Wen Kory"], to: ["New Kory", "York New"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "New Kory"] }, { from: ["New York", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New York", "York New"], to: ["New Kory", "Wen Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "New Kory"] }, { from: ["New York", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "Wen Kory"] }, { from: ["Kory New", "New York"], to: ["New Kory", "York New"] }, { from: ["Kory New", "New York"], to: ["Wen Kory", "York New"] }, { from: ["New Kory", "Wen Kory"], to: ["Kory New", "York New"] }, { from: ["New Kory", "York New"], to: ["Kory New", "Wen Kory"] }, { from: ["Kory New", "New Kory"], to: ["Wen Kory", "York New"] }]`.

```js
assert.deepEqual(
  solve([
    'New York',
    'New Kory',
    'Wen Kory',
    'York New',
    'Kory New',
    'New Kory'
  ]),
  [
    { from: ['New Kory', 'New York'], to: ['Wen Kory', 'York New'] },
    { from: ['New Kory', 'New York'], to: ['Kory New', 'Wen Kory'] },
    { from: ['New Kory', 'New York'], to: ['Kory New', 'York New'] },
    { from: ['New York', 'Wen Kory'], to: ['New Kory', 'York New'] },
    { from: ['New York', 'Wen Kory'], to: ['Kory New', 'New Kory'] },
    { from: ['New York', 'Wen Kory'], to: ['Kory New', 'York New'] },
    { from: ['New York', 'York New'], to: ['New Kory', 'Wen Kory'] },
    { from: ['New York', 'York New'], to: ['Kory New', 'New Kory'] },
    { from: ['New York', 'York New'], to: ['Kory New', 'Wen Kory'] },
    { from: ['Kory New', 'New York'], to: ['New Kory', 'Wen Kory'] },
    { from: ['Kory New', 'New York'], to: ['New Kory', 'York New'] },
    { from: ['Kory New', 'New York'], to: ['Wen Kory', 'York New'] },
    { from: ['New Kory', 'Wen Kory'], to: ['Kory New', 'York New'] },
    { from: ['New Kory', 'York New'], to: ['Kory New', 'Wen Kory'] },
    { from: ['Kory New', 'New Kory'], to: ['Wen Kory', 'York New'] }
  ]
);
```

# --seed--

## --seed-contents--

```js
function solve(input) {

}
```

# --solutions--

```js
function solve(input) {
  var orig = {};
  input.forEach(function(e) {
    orig[__helpers.removeWhiteSpace(e).toLowerCase()] = e;
  });

  input = Object.keys(orig);
  var map = {};
  for (var i = 0; i < input.length - 1; i++) {
    var pair0 = input[i];
    for (var j = i + 1; j < input.length; j++) {
      var pair = [pair0, input[j]];
      var s = pair0 + pair[1];
      var key = s.split('').sort();

      var val = map[key] ? map[key] : [];
      val.push(pair);
      map[key] = val;
    }
  }

  var result = [];
  Object.keys(map).forEach(key => {
    for (var i = 0; i < map[key].length - 1; i++) {
      var a = map[key][i];
      for (var j = i + 1; j < map[key].length; j++) {
        var b = map[key][j];

        if (new Set([a[0], b[0], a[1], b[1]]).size < 4) continue;
        var from = [orig[a[0]], orig[a[1]]].sort();
        var to = [orig[b[0]], orig[b[1]]].sort();
        result.push({
          from,
          to
        });
      }
    }
  });

  return result;
}
```
