["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit/util.js"],"~:js","goog.provide(\"com.cognitect.transit.util\");\ngoog.require(\"goog.object\");\ngoog.scope(function() {\n  var util = com.cognitect.transit.util, gobject = goog.object;\n  if (typeof Object.keys != \"undefined\") {\n    util.objectKeys = function(obj) {\n      return Object.keys(obj);\n    };\n  } else {\n    util.objectKeys = function(obj) {\n      return gobject.getKeys(obj);\n    };\n  }\n  if (typeof Array.isArray != \"undefined\") {\n    util.isArray = function(obj) {\n      return Array.isArray(obj);\n    };\n  } else {\n    util.isArray = function(obj) {\n      return goog.typeOf(obj) === \"array\";\n    };\n  }\n  util.chars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\\x3d\";\n  util.randInt = function(ub) {\n    return Math.round(Math.random() * ub);\n  };\n  util.randHex = function() {\n    return util.randInt(15).toString(16);\n  };\n  util.randomUUID = function() {\n    var rhex = (8 | 3 & util.randInt(14)).toString(16), ret = util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + \"-\" + util.randHex() + util.randHex() + util.randHex() + util.randHex() + \"-\" + \"4\" + util.randHex() + util.randHex() + util.randHex() + \"-\" + rhex + util.randHex() + util.randHex() + util.randHex() + \"-\" + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + \n    util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex();\n    return ret;\n  };\n  util.btoa = function(input) {\n    if (typeof btoa != \"undefined\") {\n      return btoa(input);\n    } else {\n      var str = String(input);\n      for (var block, charCode, idx = 0, map = util.chars, output = \"\"; str.charAt(idx | 0) || (map = \"\\x3d\", idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {\n        charCode = str.charCodeAt(idx += 3 / 4);\n        if (charCode > 255) {\n          throw new Error(\"'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.\");\n        }\n        block = block << 8 | charCode;\n      }\n      return output;\n    }\n  };\n  util.atob = function(input) {\n    if (typeof atob != \"undefined\") {\n      return atob(input);\n    } else {\n      var str = String(input).replace(/=+$/, \"\");\n      if (str.length % 4 == 1) {\n        throw new Error(\"'atob' failed: The string to be decoded is not correctly encoded.\");\n      }\n      for (var bc = 0, bs, buffer, idx = 0, output = \"\"; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {\n        buffer = util.chars.indexOf(buffer);\n      }\n      return output;\n    }\n  };\n  util.Uint8ToBase64 = function(u8Arr) {\n    var CHUNK_SIZE = 32768, index = 0, length = u8Arr.length, result = \"\", slice = null;\n    while (index < length) {\n      slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));\n      result += String.fromCharCode.apply(null, slice);\n      index += CHUNK_SIZE;\n    }\n    return util.btoa(result);\n  };\n  util.Base64ToUint8 = function(base64) {\n    var binary_string = util.atob(base64), len = binary_string.length, bytes = new Uint8Array(len);\n    for (var i = 0; i < len; i++) {\n      var ascii = binary_string.charCodeAt(i);\n      bytes[i] = ascii;\n    }\n    return bytes;\n  };\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide(\"com.cognitect.transit.util\");\ngoog.require(\"goog.object\");\n\ngoog.scope(function () {\n\n    var util    = com.cognitect.transit.util,\n        gobject = goog.object;\n\n    if (typeof Object.keys != \"undefined\") {\n        util.objectKeys = function (obj) {\n            return Object.keys(obj);\n        };\n    } else {\n        util.objectKeys = function (obj) {\n            return gobject.getKeys(obj);\n        };\n    }\n\n    if (typeof Array.isArray != \"undefined\") {\n        util.isArray = function (obj) {\n            return Array.isArray(obj);\n        };\n    } else {\n        util.isArray = function (obj) {\n            return goog.typeOf(obj) === \"array\";\n        };\n    }\n\n    /**\n     * @const\n     * @type {string}\n     */\n    util.chars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\n\n    util.randInt = function (ub) {\n        return Math.round(Math.random() * ub);\n    };\n\n    util.randHex = function () {\n        return util.randInt(15).toString(16);\n    };\n\n    util.randomUUID = function () {\n        var rhex = (0x8 | (0x3 & util.randInt(14))).toString(16),\n            ret  = util.randHex() + util.randHex() + util.randHex() + util.randHex() +\n                   util.randHex() + util.randHex() + util.randHex() + util.randHex() + \"-\" +\n                   util.randHex() + util.randHex() + util.randHex() + util.randHex() + \"-\" +\n                              \"4\" + util.randHex() + util.randHex() + util.randHex() + \"-\" +\n                             rhex + util.randHex() + util.randHex() + util.randHex() + \"-\" +\n                   util.randHex() + util.randHex() + util.randHex() + util.randHex() +\n                   util.randHex() + util.randHex() + util.randHex() + util.randHex() +\n                   util.randHex() + util.randHex() + util.randHex() + util.randHex();\n        return ret;\n    };\n\n// https://github.com/davidchambers/Base64.js\n\n    util.btoa = function (input) {\n        if (typeof btoa != \"undefined\") {\n            return btoa(input);\n        } else {\n            var str = String(input);\n            for (\n                var block, charCode, idx = 0, map = util.chars, output = '';\n                str.charAt(idx | 0) || (map = '=', idx % 1);\n                output += map.charAt(63 & block >> 8 - idx % 1 * 8)\n            ) {\n                charCode = str.charCodeAt(idx += 3 / 4);\n                if (charCode > 0xFF) {\n                    throw new Error(\"'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.\");\n                }\n                block = block << 8 | charCode;\n            }\n            return output;\n        }\n    };\n\n    /**\n     * @suppress {uselessCode}\n     */\n    util.atob = function (input) {\n        if (typeof atob != \"undefined\") {\n            return atob(input);\n        } else {\n            var str = String(input).replace(/=+$/, '');\n            if (str.length % 4 == 1) {\n                throw new Error(\"'atob' failed: The string to be decoded is not correctly encoded.\");\n            }\n            for (\n                var bc = 0, bs, buffer, idx = 0, output = '';\n                buffer = str.charAt(idx++);\n                ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,\n                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0\n            ) {\n                buffer = util.chars.indexOf(buffer);\n            }\n            return output;\n        }\n    };\n\n    util.Uint8ToBase64 = function (u8Arr) {\n        var CHUNK_SIZE = 0x8000,\n            index      = 0,\n            length     = u8Arr.length,\n            result     = '',\n            slice      = null;\n\n        while (index < length) {\n            slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));\n            result += String.fromCharCode.apply(null, slice);\n            index += CHUNK_SIZE;\n        }\n\n        return util.btoa(result);\n    };\n\n    util.Base64ToUint8 = function (base64) {\n        var binary_string = util.atob(base64),\n            len           = binary_string.length,\n            bytes         = new Uint8Array(len);\n\n        for (var i = 0; i < len; i++) {\n            var ascii = binary_string.charCodeAt(i);\n            bytes[i] = ascii;\n        }\n\n        return bytes;\n    };\n\n});\n","~:compiled-at",1682448775301,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.util.js\",\n\"lineCount\":82,\n\"mappings\":\"AAcAA,IAAKC,CAAAA,OAAL,CAAa,4BAAb,CAAA;AACAD,IAAKE,CAAAA,OAAL,CAAa,aAAb,CAAA;AAEAF,IAAKG,CAAAA,KAAL,CAAW,QAAS,EAAG;AAEnB,MAAIC,OAAUC,GAAIC,CAAAA,SAAUC,CAAAA,OAAQH,CAAAA,IAApC,EACII,UAAUR,IAAKS,CAAAA,MADnB;AAGA,MAAI,MAAOC,OAAOC,CAAAA,IAAlB,IAA0B,WAA1B;AACIP,QAAKQ,CAAAA,UAAL,GAAkBC,QAAS,CAACC,GAAD,CAAM;AAC7B,aAAOJ,MAAOC,CAAAA,IAAP,CAAYG,GAAZ,CAAP;AAD6B,KAAjC;AADJ;AAKIV,QAAKQ,CAAAA,UAAL,GAAkBC,QAAS,CAACC,GAAD,CAAM;AAC7B,aAAON,OAAQO,CAAAA,OAAR,CAAgBD,GAAhB,CAAP;AAD6B,KAAjC;AALJ;AAUA,MAAI,MAAOE,MAAMC,CAAAA,OAAjB,IAA4B,WAA5B;AACIb,QAAKa,CAAAA,OAAL,GAAeC,QAAS,CAACJ,GAAD,CAAM;AAC1B,aAAOE,KAAMC,CAAAA,OAAN,CAAcH,GAAd,CAAP;AAD0B,KAA9B;AADJ;AAKIV,QAAKa,CAAAA,OAAL,GAAeC,QAAS,CAACJ,GAAD,CAAM;AAC1B,aAAOd,IAAKmB,CAAAA,MAAL,CAAYL,GAAZ,CAAP,KAA4B,OAA5B;AAD0B,KAA9B;AALJ;AAcAV,MAAKgB,CAAAA,KAAL,GAAa,sEAAb;AAEAhB,MAAKiB,CAAAA,OAAL,GAAeC,QAAS,CAACC,EAAD,CAAK;AACzB,WAAOC,IAAKC,CAAAA,KAAL,CAAWD,IAAKE,CAAAA,MAAL,EAAX,GAA2BH,EAA3B,CAAP;AADyB,GAA7B;AAIAnB,MAAKuB,CAAAA,OAAL,GAAeC,QAAS,EAAG;AACvB,WAAOxB,IAAKiB,CAAAA,OAAL,CAAa,EAAb,CAAiBQ,CAAAA,QAAjB,CAA0B,EAA1B,CAAP;AADuB,GAA3B;AAIAzB,MAAK0B,CAAAA,UAAL,GAAkBC,QAAS,EAAG;AAC1B,QAAIC,OAAwCH,CAAhC,CAAgCA,GAAzB,CAAyBA,GAAnBzB,IAAKiB,CAAAA,OAAL,CAAa,EAAb,CAAmBQ,EAAAA,QAAjC,CAA0C,EAA1C,CAAX,EACII,MAAO7B,IAAKuB,CAAAA,OAAL,EAAPM,GAAwB7B,IAAKuB,CAAAA,OAAL,EAAxBM,GAAyC7B,IAAKuB,CAAAA,OAAL,EAAzCM,GAA0D7B,IAAKuB,CAAAA,OAAL,EAA1DM,GACO7B,IAAKuB,CAAAA,OAAL,EADPM,GACwB7B,IAAKuB,CAAAA,OAAL,EADxBM,GACyC7B,IAAKuB,CAAAA,OAAL,EADzCM,GAC0D7B,IAAKuB,CAAAA,OAAL,EAD1DM,GAC2E,GAD3EA,GAEO7B,IAAKuB,CAAAA,OAAL,EAFPM,GAEwB7B,IAAKuB,CAAAA,OAAL,EAFxBM,GAEyC7B,IAAKuB,CAAAA,OAAL,EAFzCM,GAE0D7B,IAAKuB,CAAAA,OAAL,EAF1DM,GAE2E,GAF3EA,GAGkB,GAHlBA,GAGwB7B,IAAKuB,CAAAA,OAAL,EAHxBM,GAGyC7B,IAAKuB,CAAAA,OAAL,EAHzCM,GAG0D7B,IAAKuB,CAAAA,OAAL,EAH1DM,GAG2E,GAH3EA,GAIiBD,IAJjBC,GAIwB7B,IAAKuB,CAAAA,OAAL,EAJxBM,GAIyC7B,IAAKuB,CAAAA,OAAL,EAJzCM,GAI0D7B,IAAKuB,CAAAA,OAAL,EAJ1DM,GAI2E,GAJ3EA,GAKO7B,IAAKuB,CAAAA,OAAL,EALPM,GAKwB7B,IAAKuB,CAAAA,OAAL,EALxBM,GAKyC7B,IAAKuB,CAAAA,OAAL,EALzCM,GAK0D7B,IAAKuB,CAAAA,OAAL,EAL1DM,GAMO7B,IAAKuB,CAAAA,OAAL,EANPM,GAMwB7B,IAAKuB,CAAAA,OAAL,EANxBM;AAMyC7B,QAAKuB,CAAAA,OAAL,EANzCM,GAM0D7B,IAAKuB,CAAAA,OAAL,EAN1DM,GAOO7B,IAAKuB,CAAAA,OAAL,EAPPM,GAOwB7B,IAAKuB,CAAAA,OAAL,EAPxBM,GAOyC7B,IAAKuB,CAAAA,OAAL,EAPzCM,GAO0D7B,IAAKuB,CAAAA,OAAL,EAR9D;AASA,WAAOM,GAAP;AAV0B,GAA9B;AAeA7B,MAAK8B,CAAAA,IAAL,GAAYC,QAAS,CAACC,KAAD,CAAQ;AACzB,QAAI,MAAOF,KAAX,IAAmB,WAAnB;AACI,aAAOA,IAAA,CAAKE,KAAL,CAAP;AADJ,UAEO;AACH,UAAIC,MAAMC,MAAA,CAAOF,KAAP,CAAV;AACA,WACI,IAAIG,KAAJ,EAAWC,QAAX,EAAqBC,MAAM,CAA3B,EAA8BC,MAAMtC,IAAKgB,CAAAA,KAAzC,EAAgDuB,SAAS,EAD7D,EAEIN,GAAIO,CAAAA,MAAJ,CAAWH,GAAX,GAAiB,CAAjB,CAFJ,KAE4BC,GAAA,GAAM,MAAN,EAAWD,GAAX,GAAiB,CAF7C,GAGIE,MAHJ,IAGcD,GAAIE,CAAAA,MAAJ,CAAW,EAAX,GAAgBL,KAAhB,IAAyB,CAAzB,GAA6BE,GAA7B,GAAmC,CAAnC,GAAuC,CAAvC,CAHd,CAIE;AACED,gBAAA,GAAWH,GAAIQ,CAAAA,UAAJ,CAAeJ,GAAf,IAAsB,CAAtB,GAA0B,CAA1B,CAAX;AACA,YAAID,QAAJ,GAAe,GAAf;AACI,gBAAM,IAAIM,KAAJ,CAAU,0FAAV,CAAN;AADJ;AAGAP,aAAA,GAAQA,KAAR,IAAiB,CAAjB,GAAqBC,QAArB;AALF;AAOF,aAAOG,MAAP;AAbG;AAHkB,GAA7B;AAuBAvC,MAAK2C,CAAAA,IAAL,GAAYC,QAAS,CAACZ,KAAD,CAAQ;AACzB,QAAI,MAAOW,KAAX,IAAmB,WAAnB;AACI,aAAOA,IAAA,CAAKX,KAAL,CAAP;AADJ,UAEO;AACH,UAAIC,MAAMC,MAAA,CAAOF,KAAP,CAAca,CAAAA,OAAd,CAAsB,KAAtB,EAA6B,EAA7B,CAAV;AACA,UAAIZ,GAAIa,CAAAA,MAAR,GAAiB,CAAjB,IAAsB,CAAtB;AACI,cAAM,IAAIJ,KAAJ,CAAU,mEAAV,CAAN;AADJ;AAGA,WACI,IAAIK,KAAK,CAAT,EAAYC,EAAZ,EAAgBC,MAAhB,EAAwBZ,MAAM,CAA9B,EAAiCE,SAAS,EAD9C,EAEIU,MAFJ,GAEahB,GAAIO,CAAAA,MAAJ,CAAWH,GAAA,EAAX,CAFb,EAGI,CAACY,MAAD,KAAYD,EAAA,GAAKD,EAAA,GAAK,CAAL,GAASC,EAAT,GAAc,EAAd,GAAmBC,MAAnB,GAA4BA,MAAjC,EACZF,EAAA,EADY,GACL,CADP,IACYR,MADZ,IACsBL,MAAOgB,CAAAA,YAAP,CAAoB,GAApB,GAA0BF,EAA1B,KAAiC,CAAC,CAAlC,GAAsCD,EAAtC,GAA2C,CAA3C,EADtB,GACuE,CAJ3E;AAMIE,cAAA,GAASjD,IAAKgB,CAAAA,KAAMmC,CAAAA,OAAX,CAAmBF,MAAnB,CAAT;AANJ;AAQA,aAAOV,MAAP;AAbG;AAHkB,GAA7B;AAoBAvC,MAAKoD,CAAAA,aAAL,GAAqBC,QAAS,CAACC,KAAD,CAAQ;AAClC,QAAIC,aAAa,KAAjB,EACIC,QAAa,CADjB,EAEIV,SAAaQ,KAAMR,CAAAA,MAFvB,EAGIW,SAAa,EAHjB,EAIIC,QAAa,IAJjB;AAMA,WAAOF,KAAP,GAAeV,MAAf,CAAuB;AACnBY,WAAA,GAAQJ,KAAMK,CAAAA,QAAN,CAAeH,KAAf,EAAsBpC,IAAKwC,CAAAA,GAAL,CAASJ,KAAT,GAAiBD,UAAjB,EAA6BT,MAA7B,CAAtB,CAAR;AACAW,YAAA,IAAUvB,MAAOgB,CAAAA,YAAaW,CAAAA,KAApB,CAA0B,IAA1B,EAAgCH,KAAhC,CAAV;AACAF,WAAA,IAASD,UAAT;AAHmB;AAMvB,WAAOvD,IAAK8B,CAAAA,IAAL,CAAU2B,MAAV,CAAP;AAbkC,GAAtC;AAgBAzD,MAAK8D,CAAAA,aAAL,GAAqBC,QAAS,CAACC,MAAD,CAAS;AACnC,QAAIC,gBAAgBjE,IAAK2C,CAAAA,IAAL,CAAUqB,MAAV,CAApB,EACIE,MAAgBD,aAAcnB,CAAAA,MADlC,EAEIqB,QAAgB,IAAIC,UAAJ,CAAeF,GAAf,CAFpB;AAIA,SAAK,IAAIG,IAAI,CAAb,EAAgBA,CAAhB,GAAoBH,GAApB,EAAyBG,CAAA,EAAzB,CAA8B;AAC1B,UAAIC,QAAQL,aAAcxB,CAAAA,UAAd,CAAyB4B,CAAzB,CAAZ;AACAF,WAAA,CAAME,CAAN,CAAA,GAAWC,KAAX;AAF0B;AAK9B,WAAOH,KAAP;AAVmC,GAAvC;AAjHmB,CAAvB,CAAA;;\",\n\"sources\":[\"com/cognitect/transit/util.js\"],\n\"sourcesContent\":[\"// Copyright 2014 Cognitect. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide(\\\"com.cognitect.transit.util\\\");\\ngoog.require(\\\"goog.object\\\");\\n\\ngoog.scope(function () {\\n\\n    var util    = com.cognitect.transit.util,\\n        gobject = goog.object;\\n\\n    if (typeof Object.keys != \\\"undefined\\\") {\\n        util.objectKeys = function (obj) {\\n            return Object.keys(obj);\\n        };\\n    } else {\\n        util.objectKeys = function (obj) {\\n            return gobject.getKeys(obj);\\n        };\\n    }\\n\\n    if (typeof Array.isArray != \\\"undefined\\\") {\\n        util.isArray = function (obj) {\\n            return Array.isArray(obj);\\n        };\\n    } else {\\n        util.isArray = function (obj) {\\n            return goog.typeOf(obj) === \\\"array\\\";\\n        };\\n    }\\n\\n    /**\\n     * @const\\n     * @type {string}\\n     */\\n    util.chars = \\\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\\\";\\n\\n    util.randInt = function (ub) {\\n        return Math.round(Math.random() * ub);\\n    };\\n\\n    util.randHex = function () {\\n        return util.randInt(15).toString(16);\\n    };\\n\\n    util.randomUUID = function () {\\n        var rhex = (0x8 | (0x3 & util.randInt(14))).toString(16),\\n            ret  = util.randHex() + util.randHex() + util.randHex() + util.randHex() +\\n                   util.randHex() + util.randHex() + util.randHex() + util.randHex() + \\\"-\\\" +\\n                   util.randHex() + util.randHex() + util.randHex() + util.randHex() + \\\"-\\\" +\\n                              \\\"4\\\" + util.randHex() + util.randHex() + util.randHex() + \\\"-\\\" +\\n                             rhex + util.randHex() + util.randHex() + util.randHex() + \\\"-\\\" +\\n                   util.randHex() + util.randHex() + util.randHex() + util.randHex() +\\n                   util.randHex() + util.randHex() + util.randHex() + util.randHex() +\\n                   util.randHex() + util.randHex() + util.randHex() + util.randHex();\\n        return ret;\\n    };\\n\\n// https://github.com/davidchambers/Base64.js\\n\\n    util.btoa = function (input) {\\n        if (typeof btoa != \\\"undefined\\\") {\\n            return btoa(input);\\n        } else {\\n            var str = String(input);\\n            for (\\n                var block, charCode, idx = 0, map = util.chars, output = '';\\n                str.charAt(idx | 0) || (map = '=', idx % 1);\\n                output += map.charAt(63 & block >> 8 - idx % 1 * 8)\\n            ) {\\n                charCode = str.charCodeAt(idx += 3 / 4);\\n                if (charCode > 0xFF) {\\n                    throw new Error(\\\"'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.\\\");\\n                }\\n                block = block << 8 | charCode;\\n            }\\n            return output;\\n        }\\n    };\\n\\n    /**\\n     * @suppress {uselessCode}\\n     */\\n    util.atob = function (input) {\\n        if (typeof atob != \\\"undefined\\\") {\\n            return atob(input);\\n        } else {\\n            var str = String(input).replace(/=+$/, '');\\n            if (str.length % 4 == 1) {\\n                throw new Error(\\\"'atob' failed: The string to be decoded is not correctly encoded.\\\");\\n            }\\n            for (\\n                var bc = 0, bs, buffer, idx = 0, output = '';\\n                buffer = str.charAt(idx++);\\n                ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,\\n                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0\\n            ) {\\n                buffer = util.chars.indexOf(buffer);\\n            }\\n            return output;\\n        }\\n    };\\n\\n    util.Uint8ToBase64 = function (u8Arr) {\\n        var CHUNK_SIZE = 0x8000,\\n            index      = 0,\\n            length     = u8Arr.length,\\n            result     = '',\\n            slice      = null;\\n\\n        while (index < length) {\\n            slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));\\n            result += String.fromCharCode.apply(null, slice);\\n            index += CHUNK_SIZE;\\n        }\\n\\n        return util.btoa(result);\\n    };\\n\\n    util.Base64ToUint8 = function (base64) {\\n        var binary_string = util.atob(base64),\\n            len           = binary_string.length,\\n            bytes         = new Uint8Array(len);\\n\\n        for (var i = 0; i < len; i++) {\\n            var ascii = binary_string.charCodeAt(i);\\n            bytes[i] = ascii;\\n        }\\n\\n        return bytes;\\n    };\\n\\n});\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"scope\",\"util\",\"com\",\"cognitect\",\"transit\",\"gobject\",\"object\",\"Object\",\"keys\",\"objectKeys\",\"util.objectKeys\",\"obj\",\"getKeys\",\"Array\",\"isArray\",\"util.isArray\",\"typeOf\",\"chars\",\"randInt\",\"util.randInt\",\"ub\",\"Math\",\"round\",\"random\",\"randHex\",\"util.randHex\",\"toString\",\"randomUUID\",\"util.randomUUID\",\"rhex\",\"ret\",\"btoa\",\"util.btoa\",\"input\",\"str\",\"String\",\"block\",\"charCode\",\"idx\",\"map\",\"output\",\"charAt\",\"charCodeAt\",\"Error\",\"atob\",\"util.atob\",\"replace\",\"length\",\"bc\",\"bs\",\"buffer\",\"fromCharCode\",\"indexOf\",\"Uint8ToBase64\",\"util.Uint8ToBase64\",\"u8Arr\",\"CHUNK_SIZE\",\"index\",\"result\",\"slice\",\"subarray\",\"min\",\"apply\",\"Base64ToUint8\",\"util.Base64ToUint8\",\"base64\",\"binary_string\",\"len\",\"bytes\",\"Uint8Array\",\"i\",\"ascii\"]\n}\n"]