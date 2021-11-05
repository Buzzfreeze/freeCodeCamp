---
id: 5900f4281000cf542c50ff39
title: 'Problem 186: Connectedness of a network'
challengeType: 5
forumTopicId: 301822
dashedName: problem-186-connectedness-of-a-network
---

# --description--

นี่คือบันทึกจากระบบโทรศัพท์ที่มีผู้ใช้หนึ่งล้านคนพลุกพล่าน:

| RecNr | Caller | Called |
|-------|--------|--------|
|   1   | 200007 | 100053 |
|   2   | 600183 | 500439 |
|   3   | 600863 | 701497 |
|  ...  |  ...   |  ...   |


หมายเลขโทรศัพท์ของผู้โทรและหมายเลขที่โทรในบันทึก $n$ คือ $Caller(n) = S_{2n - 1}$ และ $Called(n) = S_{2n}$ โดยที่ ${S}_{1, 2,3,\ldots}$ มาจาก "Lagged Fibonacci Generator":

สำหรับ $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007{k}^3]\\;(\text{modulo}\\;1000000)$

For $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}]\\;(\text{modulo}\\;1000000)$

If $Caller(n) = Called(n)$ then the user is assumed to have misdialled and the call fails; otherwise the call is successful.

จากจุดเริ่มต้นของบันทึก เราบอกว่าผู้ใช้คู่หนึ่ง $X$ และ $Y$ เป็นเพื่อนกันถ้า $X$ โทร $Y$ หรือในทางกลับกัน ในทำนองเดียวกัน $X$ เป็นเพื่อนของเพื่อนของ $Z$ ถ้า $X$ เป็นเพื่อนของ $Y$ และ $Y$ เป็นเพื่อนของ $Z$; และอื่นๆ สำหรับโซ่ที่ยาวกว่า

หมายเลขโทรศัพท์ของนายกรัฐมนตรีคือ 524287 หลังจากโทรสำเร็จกี่ครั้งโดยไม่นับการโทรผิด 99% ของผู้ใช้ (รวมถึง PM) จะเป็นเพื่อนหรือเพื่อนของเพื่อน ฯลฯ ของนายกรัฐมนตรีหรือไม่?

# --hints--

`connectednessOfANetwork()` ควร return `2325629`.

```js
assert.strictEqual(connectednessOfANetwork(), 2325629);
```

# --seed--

## --seed-contents--

```js
function connectednessOfANetwork() {

  return true;
}

connectednessOfANetwork();
```

# --solutions--

```js
// solution required
```
