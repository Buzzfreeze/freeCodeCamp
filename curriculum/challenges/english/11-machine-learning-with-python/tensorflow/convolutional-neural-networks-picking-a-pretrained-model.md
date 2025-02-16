---
id: 5e8f2f13c4cdbe86b5c72d9a
title: 'Convolutional Neural Networks: Picking a Pretrained Model'
challengeType: 11
videoId: h1XUt1AgIOI
bilibiliIds:
  aid: 463063633
  bvid: BV1qL411x73q
  cid: 409132626
dashedName: convolutional-neural-networks-picking-a-pretrained-model
---

# --question--

## --text--

กรอกข้อมูลในช่องว่างด้านล่างเพื่อใช้โมเดล MobileNet V2 ที่ผ่านการฝึกอบรมล่วงหน้า(pre-trained) ของ Google เพื่อที่จะเป็นฐานสำหรับโครงข่ายประสาทเทียม(convolutional neural network) :

```py
base_model = tf.__A__.applications.__B__(input_shape=(160, 160, 3),
                                               include_top=__C__,
                                               weights='imagenet'
                                               )
```

## --answers--

A: `keras`

B: `MobileNetV2`

C: `False`

---

A: `Keras`

B: `MobileNetV2`

C: `True`

---

A: `keras`

B: `mobile_net_v2`

C: `False`

## --video-solution--

1

