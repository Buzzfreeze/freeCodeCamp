---
id: a7bf700cd123b9a54eef01d5
title: No Repeats Please
challengeType: 5
forumTopicId: 16037
dashedName: no-repeats-please
---

# --description--

จงหาค่าของ จำนวนการเรียงสับเปลี่ยนของตัวอักษรที่ให้มา โดยตัวที่ต่อเนื่องกันต้องไม่ซ้ำกัน

สมมุติให้ ตัวอักษรที่ให้มาไม่ซ้ำกัน  

ตัวอย่าง `aab`  จะได้คำตอบเป็น 2 เนื่องจากมีการเปลี่ยนลำดับทั้งหมด 6 แบบ (`aab`, `aab`, `aba`, `aba`, `baa`, `baa`)

แต่มีเพียง 2 แบบเท่านั้นที่ตัวต่อเนื่องกันไม่ซ้ำกัน (`aba` และ `aba`)

# --hints--

`permAlone("aab")` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert.isNumber(permAlone('aab'));
```

`permAlone("aab")` ควรได้ผลลัพธ์เป็น 2.

```js
assert.strictEqual(permAlone('aab'), 2);
```

`permAlone("aaa")` ควรได้ผลลัพธ์เป็น 0.

```js
assert.strictEqual(permAlone('aaa'), 0);
```

`permAlone("aabb")` ควรได้ผลลัพธ์เป็น 8.

```js
assert.strictEqual(permAlone('aabb'), 8);
```

`permAlone("abcdefa")` ควรได้ผลลัพธ์เป็น 3600.

```js
assert.strictEqual(permAlone('abcdefa'), 3600);
```

`permAlone("abfdefa")` ควรได้ผลลัพธ์เป็น 2640.

```js
assert.strictEqual(permAlone('abfdefa'), 2640);
```

`permAlone("zzzzzzzz")` ควรได้ผลลัพธ์เป็น 0.

```js
assert.strictEqual(permAlone('zzzzzzzz'), 0);
```

`permAlone("a")` ควรได้ผลลัพธ์เป็น 1.

```js
assert.strictEqual(permAlone('a'), 1);
```

`permAlone("aaab")` ควรได้ผลลัพธ์เป็น 0.

```js
assert.strictEqual(permAlone('aaab'), 0);
```

`permAlone("aaabb")` ควรได้ผลลัพธ์เป็น 12.

```js
assert.strictEqual(permAlone('aaabb'), 12);
```

# --seed--

## --seed-contents--

```js
function permAlone(str) {
  return str;
}

permAlone('aab');
```

# --solutions--

```js
function permAlone(str) {
  return permuter(str).filter(function(perm) {
    return !perm.match(/(.)\1/g);
  }).length;
}

function permuter(str) {
  // http://staff.roguecc.edu/JMiller/JavaScript/permute.html
  //permArr: Global array which holds the list of permutations
  //usedChars: Global utility array which holds a list of "currently-in-use" characters
  var permArr = [], usedChars = [];
  function permute(input) {
    //convert input into a char array (one element for each character)
    var i, ch, chars = input.split("");
    for (i = 0; i < chars.length; i++) {
      //get and remove character at index "i" from char array
      ch = chars.splice(i, 1);
      //add removed character to the end of used characters
      usedChars.push(ch);
      //when there are no more characters left in char array to add, add used chars to list of permutations
      if (chars.length === 0) permArr[permArr.length] = usedChars.join("");
      //send characters (minus the removed one from above) from char array to be permuted
      permute(chars.join(""));
      //add removed character back into char array in original position
      chars.splice(i, 0, ch);
      //remove the last character used off the end of used characters array
      usedChars.pop();
    }
  }
  permute(str);
  return permArr;
}

permAlone('aab');
```
