"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  castPath: () => import_castPath.default,
  download: () => import_download.default,
  downloadImage: () => downloadImage_default,
  endWith: () => import_endWith.default,
  extractUrls: () => import_extractUrls.default,
  fileSize: () => import_fileSize.default,
  fill: () => import_fill.default,
  formatDate: () => formatDate_default,
  fullscreen: () => import_fullscreen.default,
  getUrlParam: () => import_getUrlParam.default,
  hotkey: () => import_hotkey.default,
  isAbsoluteUrl: () => import_isAbsoluteUrl.default,
  isDataUrl: () => import_isAbsoluteUrl2.default,
  isDate: () => import_isDate.default,
  isEl: () => import_isEl.default,
  isEmail: () => import_isEmail.default,
  isGeneratorFn: () => import_isGeneratorFn.default,
  isJson: () => import_isJson.default,
  isMobile: () => import_isMobile.default,
  isUrl: () => import_isUrl.default,
  loadCss: () => import_loadCss.default,
  loadImg: () => import_loadImg.default,
  loadJs: () => import_loadJs.default,
  naturalSort: () => import_naturalSort.default,
  parallel: () => import_parallel.default,
  query: () => import_query.default,
  randomId: () => import_randomId.default,
  scrollTo: () => import_scrollTo.default,
  selectApiData: () => selectApiData_default,
  sleep: () => import_sleep.default,
  startWith: () => import_startWith.default,
  strTpl: () => import_strTpl.default,
  stripHtmlTag: () => import_stripHtmlTag.default,
  toBool: () => import_toBool.default,
  toLetter: () => toLetter_default,
  toRoman: () => toRoman_default,
  tryIt: () => import_tryIt.default,
  type: () => import_type.default
});
module.exports = __toCommonJS(src_exports);

// src/toLetter.ts
var import_lodash = require("lodash");
function toLetter(int, isLowercase = false) {
  let letter = String.fromCharCode(int - 1 + 65);
  return isLowercase ? (0, import_lodash.lowerCase)(letter) : letter;
}
var toLetter_default = toLetter;

// src/toRoman.ts
var import_lodash2 = require("lodash");
function toRoman(num, isLowercase) {
  if (typeof num !== "number")
    return false;
  let digits = String(+num).split(""), key = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX"
  ], roman_num = "", i = 3;
  while (i--) {
    roman_num = (key[+digits.pop() + i * 10] || "") + roman_num;
  }
  let romanStr = Array(+digits.join("") + 1).join("M") + roman_num;
  return isLowercase ? (0, import_lodash2.lowerCase)(romanStr) : romanStr;
}
var toRoman_default = toRoman;

// src/index.ts
var import_sleep = __toESM(require("licia/sleep.js"));
var import_toBool = __toESM(require("licia/toBool.js"));
var import_castPath = __toESM(require("licia/castPath.js"));
var import_download = __toESM(require("licia/download.js"));
var import_extractUrls = __toESM(require("licia/extractUrls.js"));
var import_fill = __toESM(require("licia/fill.js"));
var import_fullscreen = __toESM(require("licia/fullscreen.js"));
var import_hotkey = __toESM(require("licia/hotkey.js"));
var import_loadCss = __toESM(require("licia/loadCss.js"));
var import_loadImg = __toESM(require("licia/loadImg.js"));
var import_loadJs = __toESM(require("licia/loadJs.js"));
var import_naturalSort = __toESM(require("licia/naturalSort.js"));
var import_parallel = __toESM(require("licia/parallel.js"));
var import_query = __toESM(require("licia/query.js"));
var import_randomId = __toESM(require("licia/randomId.js"));
var import_scrollTo = __toESM(require("licia/scrollTo.js"));
var import_tryIt = __toESM(require("licia/tryIt.js"));
var import_type = __toESM(require("licia/type.js"));
var import_fileSize = __toESM(require("licia/fileSize.js"));
var import_getUrlParam = __toESM(require("licia/getUrlParam.js"));
var import_startWith = __toESM(require("licia/startWith.js"));
var import_endWith = __toESM(require("licia/endWith.js"));
var import_strTpl = __toESM(require("licia/strTpl.js"));
var import_stripHtmlTag = __toESM(require("licia/stripHtmlTag.js"));
var import_isAbsoluteUrl = __toESM(require("licia/isAbsoluteUrl.js"));
var import_isAbsoluteUrl2 = __toESM(require("licia/isAbsoluteUrl.js"));
var import_isDate = __toESM(require("licia/isDate.js"));
var import_isEl = __toESM(require("licia/isEl.js"));
var import_isEmail = __toESM(require("licia/isEmail.js"));
var import_isGeneratorFn = __toESM(require("licia/isGeneratorFn.js"));
var import_isJson = __toESM(require("licia/isJson.js"));
var import_isMobile = __toESM(require("licia/isMobile.js"));
var import_isUrl = __toESM(require("licia/isUrl.js"));

// src/downloadImage.ts
async function downloadImage(imageSrc, imageName = "image") {
  const image = await fetch(imageSrc);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);
  const link = document.createElement("a");
  link.href = imageURL;
  link.download = imageName ?? "image";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
var downloadImage_default = downloadImage;

// src/selectApiData.ts
var selectApiData = (data) => {
  var _a;
  return (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.data;
};
var selectApiData_default = selectApiData;

// src/formatDate.js
var import_moment = __toESM(require("moment"));
function formatDate(date, format = "DD/MM/YYYY") {
  return date ? (0, import_moment.default)(date).format(format) : null;
}
var formatDate_default = formatDate;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  castPath,
  download,
  downloadImage,
  endWith,
  extractUrls,
  fileSize,
  fill,
  formatDate,
  fullscreen,
  getUrlParam,
  hotkey,
  isAbsoluteUrl,
  isDataUrl,
  isDate,
  isEl,
  isEmail,
  isGeneratorFn,
  isJson,
  isMobile,
  isUrl,
  loadCss,
  loadImg,
  loadJs,
  naturalSort,
  parallel,
  query,
  randomId,
  scrollTo,
  selectApiData,
  sleep,
  startWith,
  strTpl,
  stripHtmlTag,
  toBool,
  toLetter,
  toRoman,
  tryIt,
  type
});
