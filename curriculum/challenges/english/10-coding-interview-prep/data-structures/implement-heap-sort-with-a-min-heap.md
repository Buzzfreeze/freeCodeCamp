---
id: 587d825b367417b2b2512c8c
title: Implement Heap Sort with a Min Heap
challengeType: 1
forumTopicId: 301643
dashedName: implement-heap-sort-with-a-min-heap
---

# --description--

ตอนนี้เราสามารถเพิ่มและลบ element ได้แล้ว มาดูกันว่า applications heaps สามารถนำไปใช้อะไรได้บ้าง โดยทั่วไปแล้ว heap จะใช้เพื่อนำ priority queues ไปใช้ เนื่องจากจะจัดเก็บรายการที่มีมูลค่าสูงสุดหรือน้อยที่สุดในตำแหน่งแรกเสมอ นอกจากนี้ยังใช้เพื่อนำอัลกอริธึมการเรียงลำดับที่เรียกว่า heap sort ไปใช้ เราจะดูวิธีการทำสิ่งนี้ที่นี่ heap sort ใช้ heap ขั้นต่ำ ซึ่งตรงกันข้ามกับ heap สูงสุด  heap ขั้นต่ำจะเก็บองค์ประกอบที่มีค่าน้อยที่สุดในตำแหน่งรูทเสมอ

heap sort ทำงานโดยนำ array ที่ไม่เรียงลำดับ เพิ่มแต่ละรายการใน array ลงใน heap ขั้นต่ำ จากนั้นแยกทุกรายการออกจาก heap ขั้นต่ำไปยัง array ใหม่ โครงสร้าง heap ขั้นต่ำช่วยให้แน่ใจว่า array ใหม่จะมีรายการดั้งเดิมโดยเรียงลำดับจากน้อยไปมาก นี่เป็นหนึ่งในอัลกอริธึมการเรียงลำดับที่มีประสิทธิภาพมากที่สุดโดยมีค่า เคสเฉลี่ยและเคสที่แย่ที่สุดที่ O(nlog(n))

# --instructions--

ลองใช้ heap sort ด้วย heap ขั้นต่ำ อย่าลังเลที่จะปรับโค้ด heap สูงสุดของคุณที่นี่ สร้าง `MinHeap` object ด้วย `insert`, `remove` และ `sort` method  โดยที่ `sort` method ควร return array ของ element ทั้งหมดใน heap ขั้นต่ำที่เรียงลำดับจากน้อยไปมาก

# --hints--

ควรมีโครงสร้างข้อมูล MinHeap

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    }
    return typeof test == 'object';
  })()
);
```

MinHeap ควรมี method ที่เรียกว่า insert

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

MinHeap ควรมี method ที่เรียกว่า remove

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

MinHeap ควรมี method ที่เรียกว่า sort

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.sort == 'function';
  })()
);
```

Sort method ควร return array ที่มีรายการทั้งหมดที่ถูกเพิ่มไปยัง heap ขั้นต่ำ ที่เรียงลำดับแล้ว

```js
assert(
  (() => {
    if (typeof MinHeap === 'undefined') {
      return false;
    }

    const heap = new MinHeap();
    const arr = createRandomArray(25);

    for (let i of arr) {
      heap.insert(i);
    }

    const result = heap.sort();
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== result[i]) {
        return false;
      }
    }
    return true;
  })()
);
```

# --seed--

## --seed-contents--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);
  
  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // Only change code below this line
  
  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
