---
id: 5e9a093a74c4063ca6f7c15c
title: Pandas Creating Columns
challengeType: 11
videoId: _sSo2XZoB3E
bilibiliIds:
  aid: 975568901
  bvid: BV1b44y1b7Cg
  cid: 409018052
dashedName: pandas-creating-columns
---

# --description--

*ผู้เรียนสามารถใช้ Google Colab แทน notebooks.ai ที่สาธิตใน Videoได้*

แหล่งเรียนรู้เพิ่มเติม:

-   [Notebooks on GitHub](https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas)
-   [How to open Notebooks from GitHub using Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

code ใดที่จะเพิ่มคอลัมน์ "Certificates per month" ใน`certificates_earned` DataFrame  เช่นเดียวกับตารางด้านล่าง? 

<pre>      Certificates  Time (in months)  Certificates per month
Tom               8                16                    0.50
Kris              2                 5                    0.40
Ahmad             5                 9                    0.56
Beau              6                12                    0.50</pre>

## --answers--

```py
certificates_earned['Certificates'] /
certificates_earned['Time (in months)']
```

---

```py
certificates_earned['Certificates per month'] = round(
    certificates_earned['Certificates'] /
    certificates_earned['Time (in months)']
)
```

---

```py
certificates_earned['Certificates per month'] = round(
    certificates_earned['Certificates'] /
    certificates_earned['Time (in months)'], 2
)
```

## --video-solution--

3

