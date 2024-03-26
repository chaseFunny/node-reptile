const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const { ProxyAgent } = require("proxy-agent");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;
// Enable CORS
app.use(cors());
// 使用body-parser中间件来解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const agent = new ProxyAgent();
const targetBgURL = "https://staticcdn.utrainee.com/images//cvschoolbg/";
const targetLogoURL = "https://staticcdn.utrainee.com/images//schoolbadgenew/";
// 获取大学列表
app.get("/schoolList", async (req, res) => {
  const targetURL =
    "https://api.utrainee.com/utrainee/common/schoolinfo/getSchoolListByRegionAndProvince"; // 请替换为实际的目标网站URL
  try {
    axios.get(targetURL, { httpAgent: agent, httpsAgent: agent });
  } catch (error) {
    console.error(error);
    res.status(500).send("服务器发生错误");
  }
});

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
