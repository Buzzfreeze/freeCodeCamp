---
id: 5900f4281000cf542c50ff39
title: 'Problem 186: Connectedness of a network'
challengeType: 5
forumTopicId: 301822
dashedName: problem-186-connectedness-of-a-network
---

# --description--

นี่คือบันทึกจากระบบโทรศัพท์ที่มีผู้ใช้หนึ่งล้านคน:

| RecNr | Caller | Called |
|-------|--------|--------|
|   1   | 200007 | 100053 |
|   2   | 600183 | 500439 |
|   3   | 600863 | 701497 |
|  ...  |  ...   |  ...   |


หมายเลขโทรศัพท์ของผู้โทรและหมายเลขที่โทรในบันทึก $n$ คือ $Caller(n) = S_{2n - 1}$ และ $Called(n) = S_{2n}$ โดยที่ ${S}_{1, 2,3,\ldots}$ มาจาก "Lagged Fibonacci Generator":

ถ้า $1 ≤ k ≤ 55$ แล้ว $S_k = [100003 - 200003k + 300007{k}^3]\\;(\text{modulo}\\;1000000)$

ถ้า $56 ≤ k$ แล้ว $S_k = [S_{k - 24} + S_{k - 55}]\\;(\text{modulo}\\;1000000)$

ถ้า $Caller(n) = Called(n)$ จะถือว่าโทรผิด และยกเลิกการโทร แต่ถ้านอกเหนือจากนี้ให้ถือว่าโทรถูก

จากจุดเริ่มต้นของบันทึก เราบอกว่าผู้ใช้คู่หนึ่ง $X$ และ $Y$ เป็นเพื่อนกันถ้า $X$ โทรหา $Y$ หรือ $Y$ โทรหา $X$  
ในทำนองเดียวกัน $X$ เป็นเพื่อนของเพื่อนของ $Z$ ถ้า $X$ เป็นเพื่อนของ $Y$ และ $Y$ เป็นเพื่อนของ $Z$ ฯลฯ

หมายเลขโทรศัพท์ของนายกรัฐมนตรีคือ 524287 หลังจากโทรสำเร็จกี่ครั้งโดยไม่นับการโทรผิด ที่จะทำให้ 99% ของผู้ใช้ (รวมนายกรัฐมนตรีด้วย) จะเป็นเพื่อนหรือเพื่อนของเพื่อน ฯลฯ ของนายกรัฐมนตรี?

# --hints--

`connectednessOfANetwork()` ต้องคืนค่าเป็น `2325629`

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
