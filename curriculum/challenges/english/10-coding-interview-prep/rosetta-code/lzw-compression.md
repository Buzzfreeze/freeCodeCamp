---
id: 5ea2815e364d9a2222ea55f8
title: LZW compression
challengeType: 5
forumTopicId: 385288
dashedName: lzw-compression
---

# --description--

Lempel-Ziv-Welch (LZW) อัลกอริทีมจะใช้เพื่อทำการ loss-less data compression

ลองอ่านข้อมูลเพิ่มเติมใน [Wikipedia](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) 

# --instructions--

ให้เขียนฟังก์ชันที่รับพารามิเตอร์สองตัว 

พารามิเตอร์แรกคือ boolean ซึ่งถ้าเป็น `true` ให้ทำการ compress และถ้าเป็น `false` ให้ทำการ decompress 

พารามิเตอร์ที่สองจะเป็นสตริงหรือ array ก็ได้ ถ้าเป็นสตริง เมื่อทำการ compress แล้วให้คืนค่าเป็น array ของตัวเลข ถ้าเป็น array ให้คืนค่าเป็น string

# --hints--

`LZW` ต้องเป็นฟังก์ชัน

```js
assert(typeof LZW === 'function');
```

`LZW(true, "TOBEORNOTTOBEORTOBEORNOT")` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(LZW(true, 'TOBEORNOTTOBEORTOBEORNOT')));
```

`LZW(false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263])` ต้องคืนค่าเป็น string

```js
assert(
  typeof LZW(false, [
    84,
    79,
    66,
    69,
    79,
    82,
    78,
    79,
    84,
    256,
    258,
    260,
    265,
    259,
    261,
    263
  ]) === 'string'
);
```

`LZW(true, "TOBEORNOTTOBEORTOBEORNOT")` ต้องคืนค่าเป็น `[84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263]`

```js
assert.deepEqual(LZW(true, 'TOBEORNOTTOBEORTOBEORNOT'), [
  84,
  79,
  66,
  69,
  79,
  82,
  78,
  79,
  84,
  256,
  258,
  260,
  265,
  259,
  261,
  263
]);
```

`LZW(false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263])` ต้องคืนค่าเป็น `"TOBEORNOTTOBEORTOBEORNOT"`

```js
assert.equal(
  LZW(false, [
    84,
    79,
    66,
    69,
    79,
    82,
    78,
    79,
    84,
    256,
    258,
    260,
    265,
    259,
    261,
    263
  ]),
  'TOBEORNOTTOBEORTOBEORNOT'
);
```

`LZW(true, "0123456789")` ต้องคืนค่าเป็น `[48, 49, 50, 51, 52, 53, 54, 55, 56, 57]`

```js
assert.deepEqual(LZW(true, '0123456789'), [
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57
]);
```

`LZW(false, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57])` ต้องคืนค่าเป็น `"0123456789"`

```js
assert.equal(
  LZW(false, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]),
  '0123456789'
);
```

`LZW(true, "BABAABAAA")` ต้องคืนค่าเป็น `[66, 65, 256, 257, 65, 260]`

```js
assert.deepEqual(LZW(true, 'BABAABAAA'), [66, 65, 256, 257, 65, 260]);
```

`LZW(false, [66, 65, 256, 257, 65, 260])` ต้องคืนค่าเป็น `"BABAABAAA"`

```js
assert.equal(LZW(false, [66, 65, 256, 257, 65, 260]), 'BABAABAAA');
```

# --seed--

## --seed-contents--

```js
function LZW (compressData, input) {

}
```

# --solutions--

```js
function LZW (compressData, input) {
  function compress(uncompressed) {
    // Build the dictionary.
    var i,
      dictionary = {},
      c,
      wc,
      w = "",
      result = [],
      dictSize = 256;
    for (i = 0; i < 256; i += 1) {
      dictionary[String.fromCharCode(i)] = i;
    }

    for (i = 0; i < uncompressed.length; i += 1) {
      c = uncompressed.charAt(i);
      wc = w + c;
      //Do not use dictionary[wc] because javascript arrays
      //will return values for array['pop'], array['push'] etc
      // if (dictionary[wc]) {
      if (dictionary.hasOwnProperty(wc)) {
        w = wc;
      } else {
        result.push(dictionary[w]);
        // Add wc to the dictionary.
        dictionary[wc] = dictSize++;
        w = String(c);
      }
    }

    // Output the code for w.
    if (w !== "") {
      result.push(dictionary[w]);
    }
    return result;
  }


  function decompress(compressed) {
    // Build the dictionary.
    var i,
      dictionary = [],
      w,
      result,
      k,
      entry = "",
      dictSize = 256;
    for (i = 0; i < 256; i += 1) {
      dictionary[i] = String.fromCharCode(i);
    }

    w = String.fromCharCode(compressed[0]);
    result = w;
    for (i = 1; i < compressed.length; i += 1) {
      k = compressed[i];
      if (dictionary[k]) {
        entry = dictionary[k];
      } else {
        if (k === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }

      result += entry;

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);

      w = entry;
    }
    return result;
  }

  if(compressData){
    return compress(input)
  }else{
    return decompress(input)
  }
}
```
