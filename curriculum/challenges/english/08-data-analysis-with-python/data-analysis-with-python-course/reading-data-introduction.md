---
id: 5e9a093a74c4063ca6f7c161
title: Reading Data Introduction
challengeType: 11
videoId: cDnt02BcHng
bilibiliIds:
  aid: 548023524
  bvid: BV1Nq4y1K7iV
  cid: 409020187
dashedName: reading-data-introduction
---

# --description--

*ผู้เรียนสามารถใช้ Google Colab แทน notebooks.ai ที่สาธิตใน Videoได้*

แหล่งเรียนรู้เพิ่มเติม:

-   [Notebooks on GitHub](https://github.com/krishnatray/RDP-Reading-Data-with-Python-and-Pandas)
-   [How to open Notebooks from GitHub using Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

กำหนดไฟล์ชื่อ `certificates.csv`พร้อมกับเนื้อหาเหล่านี้: 

<pre>
Name$Certificates$Time (in months)
Tom$8$16
Kris$2$5
Ahmad$5$9
Beau$6$12
</pre>

กรอกข้อมูลในช่องว่างสำหรับอาร์กิวเมนต์ที่ขาดหายไปด้านล่าง: 

```py
import csv

with open(__A__, 'r') as fp:
    reader = csv.reader(fp, delimiter=__B__)
    next(reader)
    for index, values in enumerate(reader):
        name, certs_num, months_num = values
        print(f"{name} earned {__C__} certificates in {months_num} months")
```

## --answers--

A: `'certificates.csv'`

B: `'-'`

C: `values`

---

A: `'certificates.csv'`

B: `'$'`

C: `certs_num`

---

A: `'certificates'`

B: `'$'`

C: `certs_num`

## --video-solution--

2

