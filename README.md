使用 devv.ai 做 node 爬虫

1.  我要使用 node.js 爬取网站的图片资源，使用 express 框架搭建项目，这个方案是否可行？
    回复：https://devv.ai/search?threadId=dgrwc4q142rk
2.

## 职途简历高校信息抓取

## 大学列表抓取

使用接口：

![image-20240326083256558](https://blog-1304565468.cos.ap-shanghai.myqcloud.com/blog/image-20240326083256558.png)

https://api.utrainee.com/utrainee/common/schoolinfo/getSchoolListByRegionAndProvince

## 大学图片

### 大学背景图

`https://staticcdn.utrainee.com/images//cvschoolbg/school_446/a1.png`

### 大学 logo 图

`https://staticcdn.utrainee.com/images//schoolbadgenew/school_446/3.png`

## 报错解决

### 启动项目失败

![image-20240326085858685](https://blog-1304565468.cos.ap-shanghai.myqcloud.com/blog/image-20240326085858685.png)
解决办法：
`npm install -g cross-env`
