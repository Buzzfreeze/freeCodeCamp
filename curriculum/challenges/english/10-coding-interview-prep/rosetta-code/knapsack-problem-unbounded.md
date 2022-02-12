---
id: 5a23c84252665b21eecc7ed4
title: Knapsack problem/Unbounded
challengeType: 5
forumTopicId: 323655
dashedName: knapsack-problemunbounded
---

# --description--

คราวนี้ให้ลองเลือกสิ่งของโดยมีข้อจำกัดสองอย่างคือ น้ำหนักต้องไม่เกิน และปริมาตร ก็ต้องไม่เกินด้วยเช่นกัน แต่ตอนนี้คุณจะแบ่งของออกแบบในแบบทดสอบที่แล้วไม่ได้แล้วนะ

# --instructions--

ให้เขียนฟังก์ชันที่รับ array ของ object, ค่าน้ำหนักสูงสุด, และปริมาตรสูงสุด จากนั้นจึงคำนวณน้ำหนักสูงสุดที่เป็นไปได้จากการเลือก object ใน array

# --hints--

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 25, 0.25)` ต้องคืนค่าเป็น `54500`

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

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 55, 0.25)` ต้องคืนค่าเป็น `88400`

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

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 25, 0.15)` ต้องคืนค่าเป็น `42500`

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

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 35, 0.35)` ต้องคืนค่าเป็น `75900`

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

`knapsackUnbounded([{ name:"panacea", value:3000, weight:0.3, volume:0.025 }, { name:"ichor", value:1800, weight:0.2, volume:0.015 }, { name:"gold", value:2500, weight:2, volume:0.002 }], 15, 0.25)` ต้องคืนค่าเป็น `43200`

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
