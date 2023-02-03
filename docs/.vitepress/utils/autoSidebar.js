//侧边栏
const fs = require("fs");
const path = require("path");

const config = {
  title: "text",
  link: "link",
  items: "items",
  indexFile: "index",
};
const { title, link, items, indexFile } = config;

/**
 * 过滤所要导航的文件
 * 文件名 包含.md 但 不包含  README */
function checkFileType(path) {
  return path.includes(".md") && !path.includes("README");
}

/**
 * 格式化文件路径*/
function prefixPath(basePath, dirPath) {
  // replace用于去除相对路径
  basePath = basePath.replace(/([\.\\\/])(?!([\.]?[\u4E00-\u9FA5A-Za-z0-9]))/g, "");
  // replace用于处理windows电脑的路径用\表示的问题
  return path.join(basePath, dirPath).replace(/\\/g, "/");
}

/**
 * 截取文档路径*/
function getPath(path, ele) {
  let item = prefixPath(path, ele);
  let result = item.split("/");
  result.splice(1, 1);
  return result.join("/");
}

/**
 * 选择数组中已有元素*/
function chooseItem(root, ele) {
  return root.find(({ [title]: text }) => text == ele);
}

/**
 * 递归获取分组信息并排序*/
function getGroupChildren(path, ele, root, deep = 0) {
  let palist = fs.readdirSync(path + "/" + ele + "/").sort((a, b) => {
    return a - b;
  });
  palist.forEach((item) => {
    let group = {};
    if (item.includes(indexFile)) {
      group[title] = "开始"; // item.replace(".md", "");
      group[link] = getPath(path + "/" + ele, item).replace(".md", ".html");
      const getItem = chooseItem(root, ele);
      if (getItem) return getItem[items].splice(0, 0, group);

      return root.splice(0, 0, group);
    }
    let info = fs.statSync(path + "/" + ele + "/" + item);
    if (info.isDirectory()) {
      let children = [];
      group[title] = item;
      group.collapsed = true
      getGroupChildren(path + "/" + ele, item, children, deep + 1);
      // group.children = children;
      group[items] = children;
      return root.push(group);
    } else if (checkFileType(item)) {
      group[title] = item.replace(".md", "");
      group[link] = getPath(path + "/" + ele, item).replace(".md", "");
      if (deep) return root.push(group);
      const getItem = chooseItem(root, ele);
      if (getItem) return getItem[items].push(group);
      return root.push(group);
    }
  });
}
/**
 * 初始化*/
function getChildren(path, ele) {
  var root = [];
  getGroupChildren(path, ele, root);
  return root;
}

module.exports = { getChildren };
