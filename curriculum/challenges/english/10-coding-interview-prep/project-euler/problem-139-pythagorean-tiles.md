---
id: 5900f3f71000cf542c50ff0a
title: 'Problem 139: Pythagorean tiles'
challengeType: 5
forumTopicId: 301767
dashedName: problem-139-pythagorean-tiles
---

# --description--

ให้ (a, b, c) แทนด้านทั้งสามของสามเหลี่ยมมุมฉากที่มีด้านยาวครบส่วน เป็นไปได้ที่จะวางสามเหลี่ยมดังกล่าวเข้าด้วยกันเพื่อสร้างสี่เหลี่ยมจัตุรัสที่มีความยาว c

ตัวอย่างเช่น (3, 4, 5) สามารถวางสามเหลี่ยมเข้าด้วยกันเพื่อสร้างสี่เหลี่ยมจัตุรัสขนาด 5 คูณ 5 โดยมีรูตรงกลางขนาด 1 ต่อ 1 และจะเห็นได้ว่าสี่เหลี่ยมจัตุรัสขนาด 5 คูณ 5 สามารถปูกระเบื้องได้ 25 อัน โดย 1 สี่เหลี่ยม

<img class="img-responsive center-block" alt="two 5 x 5 squares: one with four 3x4x5 triangles placed to create 1x1 hole in the middle; second with twenty-five 1x1 squares" src="https://cdn.freecodecamp.org/curriculum/project-euler/pythagorean-tiles.png" style="background-color: white; padding: 10px;">

อย่างไรก็ตาม หากใช้รูปสามเหลี่ยม (5, 12, 13) รูจะวัดได้ 7 คูณ 7 สี่เหลี่ยมขนาด 7 คูณ 7 เหล่านี้ไม่สามารถใช้ปูกระเบื้องขนาด 13 คูณ 13 ได้

เนื่องจากเส้นรอบวงของสามเหลี่ยมมุมฉากมีค่าน้อยกว่าหนึ่งร้อยล้าน จะมีสามเหลี่ยมพีทาโกรัสกี่รูปที่จะยอมให้มีการปูกระเบื้องดังกล่าวได้?

# --hints--

`pythagoreanTiles()` ควร return `10057761`.

```js
assert.strictEqual(pythagoreanTiles(), 10057761);
```

# --seed--

## --seed-contents--

```js
function pythagoreanTiles() {

  return true;
}

pythagoreanTiles();
```

# --solutions--

```js
// solution required
```
