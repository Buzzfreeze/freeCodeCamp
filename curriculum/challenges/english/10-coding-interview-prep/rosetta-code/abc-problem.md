---
id: 594810f028c0303b75339acc
title: ABC Problem
challengeType: 5
forumTopicId: 302220
dashedName: abc-problem
---

# --description--

คุณจะได้รับชุดบล็อก ABC (เช่น บล็อกตัวอักษรในวัยเด็ก) มี 20 บล็อกที่มีตัวอักษรสองตัวในแต่ละบล็อก รับประกันตัวอักษรที่สมบูรณ์ในทุกด้านของบล็อก collectionตัวอย่างของบล็อก:

<pre>(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
</pre>

# --instructions--

ใช้ฟังก์ชันที่รับstring (คำ) และกำหนดว่าคำนั้นสามารถสะกดด้วยชุดบล็อกที่กำหนดได้หรือไม่

กฎบางประการที่ควรทราบ:

<ul>
  <li>Once a letter on a block is used, that block cannot be used again.</li>
  <li>The function should be case-insensitive.</li>
</ul>

# --hints--

`canMakeWord` ควรเป็น function.

```js
assert(typeof canMakeWord === 'function');
```

`canMakeWord` ควร return boolean.

```js
assert(typeof canMakeWord('hi') === 'boolean');
```

`canMakeWord("bark")` ควร return true.

```js
assert(canMakeWord(words[0]));
```

`canMakeWord("BooK")` ควร return false.

```js
assert(!canMakeWord(words[1]));
```

`canMakeWord("TReAT")` ควร return true.

```js
assert(canMakeWord(words[2]));
```

`canMakeWord("COMMON")` ควร return false.

```js
assert(!canMakeWord(words[3]));
```

`canMakeWord("squAD")` ควร return true.

```js
assert(canMakeWord(words[4]));
```

`canMakeWord("conFUSE")` ควร return true.

```js
assert(canMakeWord(words[5]));
```

# --seed--

## --after-user-code--

```js
const words = ['bark', 'BooK', 'TReAT', 'COMMON', 'squAD', 'conFUSE'];
```

## --seed-contents--

```js
function canMakeWord(word) {

}
```

# --solutions--

```js
function canMakeWord(word) {
  const characters = 'BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM';
  const blocks = characters.split(' ').map(pair => pair.split(''));

  const letters = [...word.toUpperCase()];
  let length = letters.length;
  const copy = new Set(blocks);

  letters.forEach(letter => {
    for (let block of copy) {
      const index = block.indexOf(letter);

      if (index !== -1) {
        length--;
        copy.delete(block);
        break;
      }
    }
  });
  return !length;
}
```
