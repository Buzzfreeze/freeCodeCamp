---
id: 5900f3701000cf542c50fe83
title: 'Problem 4: Largest palindrome product'
challengeType: 5
forumTopicId: 302065
dashedName: problem-4-largest-palindrome-product
---

# --description--

palindromic number คือเลขที่ไม่ว่าจะอ่านจากหน้าไปหลังหรือหลังมาหน้าจะได้จำนวนที่มีค่าเท่ากัน 

palindrome ที่มากที่สุดที่เกิดจากการคูณกันของเลขสองหลักคือ 9009 = 91 × 99.

ให้หา palindrome ที่มากที่สุดที่ได้จากการคูณกันของเลข `n` หลัก สองจำนวน

# --hints--

`largestPalindromeProduct(2)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof largestPalindromeProduct(2) === 'number');
```

`largestPalindromeProduct(2)` ต้องคืนค่าเป็น 9009

```js
assert.strictEqual(largestPalindromeProduct(2), 9009);
```

`largestPalindromeProduct(3)` ต้องคืนค่าเป็น 906609

```js
assert.strictEqual(largestPalindromeProduct(3), 906609);
```

# --seed--

## --seed-contents--

```js
function largestPalindromeProduct(n) {

  return true;
}

largestPalindromeProduct(3);
```

# --solutions--

```js
const largestPalindromeProduct = (digit)=>{
  let start = 1;
  let end = Number(`1e${digit}`) - 1;
 let palindrome = [];
  for(let i=start;i<=end;i++){
    for(let j=start;j<=end;j++){
      let product = i*j;
      let palindromeRegex = /\b(\d)(\d?)(\d?).?\3\2\1\b/gi;
      palindromeRegex.test(product) && palindrome.push(product);
    }
 }
 return Math.max(...palindrome);
}
```
