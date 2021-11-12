---
id: 5a23c84252665b21eecc7ed4
title: Knapsack problem/Unbounded
challengeType: 5
forumTopicId: 323655
dashedName: knapsack-problemunbounded
---

# --description--

นักเดินทางคนหนึ่งถูกเบี่ยงทางและต้องแวะพักที่แชงกรี-ลาโดยไม่ได้วางแผนไว้ เมื่อเลือกที่จะออกไป เขาได้รับอนุญาตให้นำสิ่งของที่มีอยู่ไปมากเท่าที่เขาชอบ ตราบใดที่มันใส่ลงในเป้ของเขาได้พอดี และเขาสามารถพกติดตัวไปได้

เขารู้ว่าเขาสามารถบรรทุกได้ไม่เกินค่าน้ำหนักสูงสุดโดยรวม และความจุของเป้ของเขามีปริมาณจำกัด

เมื่อมองเหนือบาร์โค้ดของสินค้าที่เขาพบน้ำหนักและปริมาตร เขาขุดสำเนาเอกสารทางการเงินฉบับล่าสุดออกมาแล้วหามูลค่าของแต่ละรายการ

เขาสามารถรับสิ่งของใดก็ได้ทั้งหน่วยเท่านั้น แต่มีสิ่งของอื่น ๆ มากกว่าที่เขาสามารถพกติดตัวได้

# --instructions--

เขียนฟังก์ชันที่รับอาร์เรย์ของobject น้ำหนักสูงสุด และปริมาณสูงสุดเป็นพารามิเตอร์ แต่ละobjectมี 4 attribute: ชื่อ ค่า น้ำหนัก และปริมาณ ฟังก์ชันนี้ควรคืนค่าสูงสุดของสิ่งของที่ผู้เดินทางสามารถนำติดตัวไปได้

# --hints--

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 25, 0.25)` ควร return `54500`.

```js
assert.equal(
  knapsackUnbounded(
    [
      { name: 'panacea', value: 3000, weight: 0.3, volume: 0.025 },
      { name: 'ichor', value: 1800, weight: 0.2, volume: 0.015 },
      { name: 'gold', value: 2500, weight: 2, volume: 0.002 }
    ],
    25,
    0.25
  ),
  54500
);
```

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 55, 0.25)` ควร return `88400`.

```js
assert.equal(
  knapsackUnbounded(
    [
      { name: 'panacea', value: 3000, weight: 0.3, volume: 0.025 },
      { name: 'ichor', value: 1800, weight: 0.2, volume: 0.015 },
      { name: 'gold', value: 2500, weight: 2, volume: 0.002 }
    ],
    55,
    0.25
  ),
  88400
);
```

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 25, 0.15)` ควร return `42500`.

```js
assert.equal(
  knapsackUnbounded(
    [
      { name: 'panacea', value: 3000, weight: 0.3, volume: 0.025 },
      { name: 'ichor', value: 1800, weight: 0.2, volume: 0.015 },
      { name: 'gold', value: 2500, weight: 2, volume: 0.002 }
    ],
    25,
    0.15
  ),
  42500
);
```

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 35, 0.35)` ควร return `75900`.

```js
assert.equal(
  knapsackUnbounded(
    [
      { name: 'panacea', value: 3000, weight: 0.3, volume: 0.025 },
      { name: 'ichor', value: 1800, weight: 0.2, volume: 0.015 },
      { name: 'gold', value: 2500, weight: 2, volume: 0.002 }
    ],
    35,
    0.35
  ),
  75900
);
```

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 15, 0.25)` ควร return `43200`.

```js
assert.equal(
  knapsackUnbounded(
    [
      { name: 'panacea', value: 3000, weight: 0.3, volume: 0.025 },
      { name: 'ichor', value: 1800, weight: 0.2, volume: 0.015 },
      { name: 'gold', value: 2500, weight: 2, volume: 0.002 }
    ],
    15,
    0.25
  ),
  43200
);
```

# --seed--

## --seed-contents--

```js
function knapsackUnbounded(items, maxweight, maxvolume) {

}
```

# --solutions--

```js
function knapsackUnbounded(items, maxWeight, maxVolume) {
  function getPickTotals(items, pick) {
    let totalValue = 0;
    let totalWeight = 0;
    let totalVolume = 0;
    for (let i = 0; i < items.length; i++) {
      totalValue += pick[i] * items[i].value;
      totalWeight += pick[i] * items[i].weight;
      totalVolume += pick[i] * items[i].volume;
    }
    return [totalValue, totalWeight, totalVolume];
  }

  function getMaxes(items, maxWeight, maxVolume) {
    const maxes = [];
    for (let i = 0; i < items.length; i++) {
      const maxUnitsInWeight = Math.floor(maxWeight / items[i].weight);
      const maxUnitsInVolume = Math.floor(maxVolume / items[i].volume);
      const maxUnitsInLimit = Math.min(maxUnitsInWeight, maxUnitsInVolume);
      maxes.push(maxUnitsInLimit);
    }
    return maxes;
  }

  function isInLimit(value, limit) {
    return value <= limit;
  }

  function getCombinations(maxValues, curPicks, combinations) {
    if (maxValues.length === 0) {
      combinations.push(curPicks);
    }

    const curMax = maxValues[0];
    const leftMaxValues = maxValues.slice(1);
    for (let i = 0; i <= curMax; i++) {
      getCombinations(leftMaxValues, curPicks.concat(i), combinations);
    }
    return combinations;
  }

  let bestValue = 0;
  let bestPick = [];
  const maxes = getMaxes(items, maxWeight, maxVolume);
  const combinations = getCombinations(maxes, [], []);
  for (let i = 0; i < combinations.length; i++) {
    const curPick = combinations[i];
    const [curValue, curWeight, curVolume] = getPickTotals(items, curPick);
    if (!isInLimit(curWeight, maxWeight) || !isInLimit(curVolume, maxVolume)) {
      continue;
    }

    if (curValue > bestValue) {
      bestValue = curValue;
      bestPick = [curPick];
    } else if (curValue === bestValue) {
      bestPick.push(curPick);
    }
  }

  return bestValue;
}
```
