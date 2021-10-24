---
id: 5e9a093a74c4063ca6f7c154
title: Numpy Arrays
challengeType: 11
videoId: VDYVFHBL1AM
bilibiliIds:
  aid: 890607366
  bvid: BV1zP4y1h7FR
  cid: 409011400
dashedName: numpy-arrays
---

# --description--

*ผู้เรียนสามารถใช้ Google Colab แทน notebooks.ai ที่สาธิตใน Videoได้*

แหล่งเรียนรู้เพิ่มเติม:

-   [Notebooks on GitHub](https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-numpy)
-   [How to open Notebooks from GitHub using Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

ผลลัพธ์จะเกิดอะไรขึ้น เมื่อ code ทำการ print ออกมา?

```py
A = np.array([
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
])

print(A[:, :2])
```

## --answers--

```py
[['a' 'b']]
```

---

```py
[['b' 'c']
['e' 'f']
['h' 'i']]
```

---

```py
[['a' 'b']
['d' 'e']
['g' 'h']]
```

## --video-solution--

3

