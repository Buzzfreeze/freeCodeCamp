---
id: 5900f3e81000cf542c50fefb
title: 'Problem 124: Ordered radicals'
challengeType: 5
forumTopicId: 301751
dashedName: problem-124-ordered-radicals
---

# --description--

รากของ $n, rad(n)$, เป็นผลคูณของตัวประกอบเฉพาะเฉพาะของ $n$ ตัวอย่างเช่น $504 = 2^3 × 3^2 × 7$ ดังนั้น $rad(504) = 2 × 3 × 7 = 42$

หากเราคำนวณ $rad(n)$ ถ้า $1 ≤ n ≤ 10$ แล้วจัดเรียงตาม $rad(n)$ และเรียงลำดับที่ $n$ หากค่ารากเท่ากัน เราจะได้:

<div style="text-align: center;">
  <table cellpadding="2" cellspacing="0" border="0" align="center">
    <tbody>
      <tr>
        <td colspan="2">$Unsorted$</td>
        <td></td>
        <td colspan="3">$Sorted$</td>
      </tr>
      <tr>
        <td>$n$</td>
        <td>$rad(n)$</td>
        <td></td>
        <td>$n$</td>
        <td>$rad(n)$</td>
        <td>$k$</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td></td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
        <td></td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>3</td>
        <td></td>
        <td>4</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>2</td>
        <td></td>
        <td>8</td>
        <td>2</td>
        <td>4</td>
      </tr>
      <tr>
        <td>5</td>
        <td>5</td>
        <td></td>
        <td>3</td>
        <td>3</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>6</td>
        <td></td>
        <td>9</td>
        <td>3</td>
        <td>6</td>
      </tr>
      <tr>
        <td>7</td>
        <td>7</td>
        <td></td>
        <td>5</td>
        <td>5</td>
        <td>7</td>
      </tr>
      <tr>
        <td>8</td>
        <td>2</td>
        <td></td>
        <td>6</td>
        <td>6</td>
        <td>8</td>
      </tr>
      <tr>
        <td>9</td>
        <td>3</td>
        <td></td>
        <td>7</td>
        <td>7</td>
        <td>9</td>
      </tr>
      <tr>
        <td>10</td>
        <td>10</td>
        <td></td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
      </tr>
    </tbody>
  </table>
</div><br>

ให้ $E(k)$ เป็นองค์ประกอบที่ $k$ ในคอลัมน์ $n$ ที่เรียงลำดับ ตัวอย่างเช่น $E(4) = 8$ และ $E(6) = 9$ ถ้า $rad(n)$ ถูกจัดเรียงโดย $1 ≤ n ≤ 100000$ ให้หา $E(10000)$

# --hints--

`orderedRadicals()` ต้องคืนค่าเป็น `21417`

```js
assert.strictEqual(orderedRadicals(), 21417);
```

# --seed--

## --seed-contents--

```js
function orderedRadicals() {

  return true;
}

orderedRadicals();
```

# --solutions--

```js
// solution required
```
