---
id: 5900f4751000cf542c50ff87
title: 'Problem 264: Triangle Centres'
challengeType: 5
forumTopicId: 301913
dashedName: problem-264-triangle-centres
---

# --description--


พิจารณาสามเหลี่ยมทั้งหมดที่มี:

- จุดยอดทั้งหมดบนจุดขัดแตะ
- Circumcentre ที่จุดกำเนิด O.
- Orthocentre ที่จุด H(5, 0).

มีเก้ารูปสามเหลี่ยมดังกล่าวที่มี $\text{perimeter} ≤ 50$

เรียงและเรียงจากน้อยไปมากของperimeterได้แก่

<table>
  <tbody>
    <tr>
      <td>
A(-4, 3), B(5, 0), C(4, -3)<br>
A(4, 3), B(5, 0), C(-4, -3)<br>
A(-3, 4), B(5, 0), C(3, -4)<br>
<br><br>
A(3, 4), B(5, 0), C(-3, -4)<br>
A(0, 5), B(5, 0), C(0, -5)<br>
A(1, 8), B(8, -1), C(-4, -7)<br>
<br><br>
A(8, 1), B(1, -8), C(-4, 7)<br>
A(2, 9), B(9, -2), C(-6, -7)<br>
A(9, 2), B(2, -9), C(-6, 7)<br>
      </td>
      <td><img class="img-responsive center-block" alt="nine triangles ABC with perimeter ≤ 50" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-centres.gif" style="background-color: white; padding: 10px;"></td>
    </tr>
  </tbody>
</table>

ผลรวมของเส้นรอบรูป ปัดเศษเป็นทศนิยมสี่ตำแหน่ง คือ 291.0089

หาสามเหลี่ยมดังกล่าวทั้งหมดที่มี $\text{perimeter} ≤ {10}^5$ ป้อนเป็นคำตอบของคุณเป็นผลรวมของperimeterที่ปัดเศษทศนิยมสี่ตำแหน่ง

# --hints--

`triangleCentres()` ควร return `2816417.1055`.

```js
assert.strictEqual(triangleCentres(), 2816417.1055);
```

# --seed--

## --seed-contents--

```js
function triangleCentres() {

  return true;
}

triangleCentres();
```

# --solutions--

```js
// solution required
```
