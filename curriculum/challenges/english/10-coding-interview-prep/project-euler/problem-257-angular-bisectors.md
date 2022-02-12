---
id: 5900f46e1000cf542c50ff80
title: 'Problem 257: Angular Bisectors'
challengeType: 5
forumTopicId: 301905
dashedName: problem-257-angular-bisectors
---

# --description--

รูปสามเหลี่ยมด้านเท่าจำนวนเต็ม $ABC$ ที่มีด้าน $a ≤ b ≤ c$ ($AB = c$, $BC = a$ และ $AC = b$)

เส้นแบ่งครึ่งเชิงมุมของสามเหลี่ยมตัดกันที่จุด $E$, $F$ และ $G$ (ดูภาพด้านล่าง)

<img class="img-responsive center-block" alt="triangle ABC, with angular bisectors intersecting sides at the points E, F and G" src="https://cdn.freecodecamp.org/curriculum/project-euler/angular-bisectors.gif" style="background-color: white; padding: 10px;">

ส่วน $EF$, $EG$ และ $FG$ แบ่งสามเหลี่ยม $ABC$ เป็นสามเหลี่ยมเล็กสี่รูป: $AEG$, $BFE$, $CGF$ และ $EFG$ สามารถพิสูจน์ได้ว่าสำหรับสามเหลี่ยมทั้งสี่เหล่านี้แต่ละรูป อัตราส่วน $\frac{\text{area}(ABC)}{\text{area}(\text{subtriangle})}$ เป็นจำนวนตรรกยะ อย่างไรก็ตาม มีรูปสามเหลี่ยมซึ่งอัตราส่วนบางส่วนหรือทั้งหมดเป็นintegral

มีสามเหลี่ยม $ABC$ กี่รูปที่มีเส้นรอบวง $≤ 100\\,000\\,000$ เพื่อให้อัตราส่วน $\frac{\text{area}(ABC)}{\text{area}(AEG)}$ เป็น integral?

# --hints--

`angularBisectors()` ต้องคืนค่าเป็น `139012411`

```js
assert.strictEqual(angularBisectors(), 139012411);
```

# --seed--

## --seed-contents--

```js
function angularBisectors() {

  return true;
}

angularBisectors();
```

# --solutions--

```js
// solution required
```
