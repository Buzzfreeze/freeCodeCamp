---
id: a56138aff60341a09ed6c480
title: Inventory Update
challengeType: 5
forumTopicId: 16019
dashedName: inventory-update
---

# --description--

เปรียบเทียบและอัพเดตคลังสินค้าที่อยู่ในอาร์เรย์ โดยเปรียบเทียบกันระหว่าง คลังสินค้าเดิม กับ คลังสินค้าที่เพิ่งได้รับ

ให้อัพเดตปริมาณสินค้าปัจจุบัน (ใน `arr1`) และหากไม่พบรายการสินค้านั้น ให้เพิ่มรายการและปริมาณสินค้าลงในอาร์เรย์ของคลังสินค้าปัจจุบัน

ผลลัพธ์ของอาร์เรย์ที่เป็นคลังสินค้า ควรเรียงลำดับตามตัวอักษรของสินค้า


# --hints--

ฟังชั่น `updateInventory` ควรได้ผลลัพธ์เป็นอาร์เรย์ 

```js
assert.isArray(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone']
    ],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste']
    ]
  )
);
```

`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` ควรได้ผลลัพธ์เป็นอาร์เรย์ และมีข้อมูลข้างใน 6 ข้อมูล

```js
assert.equal(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone']
    ],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste']
    ]
  ).length,
  6
);
```

`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` ควรได้ผลลัพธ์เป็น `[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]`.

```js
assert.deepEqual(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone']
    ],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste']
    ]
  ),
  [
    [88, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [3, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [5, 'Microphone'],
    [7, 'Toothpaste']
  ]
);
```

`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])` ควรได้ผลลัพธ์เป็น `[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]`.

```js
assert.deepEqual(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone']
    ],
    []
  ),
  [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
  ]
);
```

`updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` ควรได้ผลลัพธ์เป็น `[[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]`.

```js
assert.deepEqual(
  updateInventory(
    [],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste']
    ]
  ),
  [
    [67, 'Bowling Ball'],
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [7, 'Toothpaste']
  ]
);
```

`updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])` ควรได้ผลลัพธ์เป็น `[[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]`.

```js
assert.deepEqual(
  updateInventory(
    [
      [0, 'Bowling Ball'],
      [0, 'Dirty Sock'],
      [0, 'Hair Pin'],
      [0, 'Microphone']
    ],
    [
      [1, 'Hair Pin'],
      [1, 'Half-Eaten Apple'],
      [1, 'Bowling Ball'],
      [1, 'Toothpaste']
    ]
  ),
  [
    [1, 'Bowling Ball'],
    [0, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [1, 'Half-Eaten Apple'],
    [0, 'Microphone'],
    [1, 'Toothpaste']
  ]
);
```

# --seed--

## --seed-contents--

```js
function updateInventory(arr1, arr2) {
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```

# --solutions--

```js
function updateInventory(arr1, arr2) {
  arr2.forEach(function(item) {
    createOrUpdate(arr1, item);
  });
  // All inventory must be accounted for or you're fired!
  return arr1;
}

function createOrUpdate(arr1, item) {
  var index = -1;
  while (++index < arr1.length) {
    if (arr1[index][1] === item[1]) {
      arr1[index][0] += item[0];
      return;
    }
    if (arr1[index][1] > item[1]) {
      break;
    }
  }
  arr1.splice(index, 0, item);
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

updateInventory(curInv, newInv);
```
