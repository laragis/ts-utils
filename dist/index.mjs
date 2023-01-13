// src/toLetter.ts
import { lowerCase } from "lodash";
function toLetter(int, isLowercase = false) {
  let letter = String.fromCharCode(int - 1 + 65);
  return isLowercase ? lowerCase(letter) : letter;
}
var toLetter_default = toLetter;

// src/toRoman.ts
import { lowerCase as lowerCase2 } from "lodash";
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
  return isLowercase ? lowerCase2(romanStr) : romanStr;
}
var toRoman_default = toRoman;

// src/index.ts
import { default as default2 } from "licia/sleep.js";
import { default as default3 } from "licia/toBool.js";
import { default as default4 } from "licia/castPath.js";
import { default as default5 } from "licia/download.js";
import { default as default6 } from "licia/extractUrls.js";
import { default as default7 } from "licia/fill.js";
import { default as default8 } from "licia/fullscreen.js";
import { default as default9 } from "licia/hotkey.js";
import { default as default10 } from "licia/loadCss.js";
import { default as default11 } from "licia/loadImg.js";
import { default as default12 } from "licia/loadJs.js";
import { default as default13 } from "licia/naturalSort.js";
import { default as default14 } from "licia/parallel.js";
import { default as default15 } from "licia/query.js";
import { default as default16 } from "licia/randomId.js";
import { default as default17 } from "licia/scrollTo.js";
import { default as default18 } from "licia/tryIt.js";
import { default as default19 } from "licia/type.js";
import { default as default20 } from "licia/fileSize.js";
import { default as default21 } from "licia/getUrlParam.js";
import { default as default22 } from "licia/startWith.js";
import { default as default23 } from "licia/endWith.js";
import { default as default24 } from "licia/strTpl.js";
import { default as default25 } from "licia/stripHtmlTag.js";
import { default as default26 } from "licia/isAbsoluteUrl.js";
import { default as default27 } from "licia/isAbsoluteUrl.js";
import { default as default28 } from "licia/isDate.js";
import { default as default29 } from "licia/isEl.js";
import { default as default30 } from "licia/isEmail.js";
import { default as default31 } from "licia/isGeneratorFn.js";
import { default as default32 } from "licia/isJson.js";
import { default as default33 } from "licia/isMobile.js";
import { default as default34 } from "licia/isUrl.js";

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
import moment from "moment";
function formatDate(date, format = "DD/MM/YYYY") {
  return date ? moment(date).format(format) : null;
}
var formatDate_default = formatDate;
export {
  default4 as castPath,
  default5 as download,
  downloadImage_default as downloadImage,
  default23 as endWith,
  default6 as extractUrls,
  default20 as fileSize,
  default7 as fill,
  formatDate_default as formatDate,
  default8 as fullscreen,
  default21 as getUrlParam,
  default9 as hotkey,
  default26 as isAbsoluteUrl,
  default27 as isDataUrl,
  default28 as isDate,
  default29 as isEl,
  default30 as isEmail,
  default31 as isGeneratorFn,
  default32 as isJson,
  default33 as isMobile,
  default34 as isUrl,
  default10 as loadCss,
  default11 as loadImg,
  default12 as loadJs,
  default13 as naturalSort,
  default14 as parallel,
  default15 as query,
  default16 as randomId,
  default17 as scrollTo,
  selectApiData_default as selectApiData,
  default2 as sleep,
  default22 as startWith,
  default24 as strTpl,
  default25 as stripHtmlTag,
  default3 as toBool,
  toLetter_default as toLetter,
  toRoman_default as toRoman,
  default18 as tryIt,
  default19 as type
};
