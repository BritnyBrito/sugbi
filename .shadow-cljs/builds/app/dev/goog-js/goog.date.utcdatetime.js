["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/date/utcdatetime.js"],"~:js","goog.provide(\"goog.date.UtcDateTime\");\ngoog.require(\"goog.date\");\ngoog.require(\"goog.date.Date\");\ngoog.require(\"goog.date.DateTime\");\ngoog.require(\"goog.date.Interval\");\ngoog.date.UtcDateTime = function(opt_year, opt_month, opt_date, opt_hours, opt_minutes, opt_seconds, opt_milliseconds) {\n  var timestamp;\n  if (typeof opt_year === \"number\") {\n    timestamp = Date.UTC(opt_year, opt_month || 0, opt_date || 1, opt_hours || 0, opt_minutes || 0, opt_seconds || 0, opt_milliseconds || 0);\n  } else {\n    timestamp = opt_year ? opt_year.getTime() : goog.now();\n  }\n  this.date = new Date(timestamp);\n};\ngoog.inherits(goog.date.UtcDateTime, goog.date.DateTime);\ngoog.date.UtcDateTime.fromTimestamp = function(timestamp) {\n  var date = new goog.date.UtcDateTime();\n  date.setTime(timestamp);\n  return date;\n};\ngoog.date.UtcDateTime.fromIsoString = function(formatted) {\n  var ret = new goog.date.UtcDateTime(2000);\n  return goog.date.setIso8601DateTime(ret, formatted) ? ret : null;\n};\ngoog.date.UtcDateTime.prototype.clone = function() {\n  var date = new goog.date.UtcDateTime(this.date);\n  date.setFirstDayOfWeek(this.getFirstDayOfWeek());\n  date.setFirstWeekCutOffDay(this.getFirstWeekCutOffDay());\n  return date;\n};\ngoog.date.UtcDateTime.prototype.add = function(interval) {\n  if (interval.years || interval.months) {\n    var yearsMonths = new goog.date.Interval(interval.years, interval.months);\n    goog.date.Date.prototype.add.call(this, yearsMonths);\n  }\n  var daysAndTimeMillis = 1000 * (interval.seconds + 60 * (interval.minutes + 60 * (interval.hours + 24 * interval.days)));\n  this.date = new Date(this.date.getTime() + daysAndTimeMillis);\n};\ngoog.date.UtcDateTime.prototype.getTimezoneOffset = function() {\n  return 0;\n};\ngoog.date.UtcDateTime.prototype.getFullYear = goog.date.DateTime.prototype.getUTCFullYear;\ngoog.date.UtcDateTime.prototype.getMonth = goog.date.DateTime.prototype.getUTCMonth;\ngoog.date.UtcDateTime.prototype.getDate = goog.date.DateTime.prototype.getUTCDate;\ngoog.date.UtcDateTime.prototype.getHours = goog.date.DateTime.prototype.getUTCHours;\ngoog.date.UtcDateTime.prototype.getMinutes = goog.date.DateTime.prototype.getUTCMinutes;\ngoog.date.UtcDateTime.prototype.getSeconds = goog.date.DateTime.prototype.getUTCSeconds;\ngoog.date.UtcDateTime.prototype.getMilliseconds = goog.date.DateTime.prototype.getUTCMilliseconds;\ngoog.date.UtcDateTime.prototype.getDay = goog.date.DateTime.prototype.getUTCDay;\ngoog.date.UtcDateTime.prototype.setFullYear = goog.date.DateTime.prototype.setUTCFullYear;\ngoog.date.UtcDateTime.prototype.setMonth = goog.date.DateTime.prototype.setUTCMonth;\ngoog.date.UtcDateTime.prototype.setDate = goog.date.DateTime.prototype.setUTCDate;\ngoog.date.UtcDateTime.prototype.setHours = goog.date.DateTime.prototype.setUTCHours;\ngoog.date.UtcDateTime.prototype.setMinutes = goog.date.DateTime.prototype.setUTCMinutes;\ngoog.date.UtcDateTime.prototype.setSeconds = goog.date.DateTime.prototype.setUTCSeconds;\ngoog.date.UtcDateTime.prototype.setMilliseconds = goog.date.DateTime.prototype.setUTCMilliseconds;\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Locale independent date/time class.\n */\n\ngoog.provide('goog.date.UtcDateTime');\n\ngoog.require('goog.date');\ngoog.require('goog.date.Date');\ngoog.require('goog.date.DateTime');\ngoog.require('goog.date.Interval');\n\n\n\n/**\n * Class representing a date/time in GMT+0 time zone, without daylight saving.\n * Defaults to current date and time if none is specified. The get... and the\n * getUTC... methods are equivalent.\n *\n * @param {number|goog.date.DateLike=} opt_year Four digit UTC year or a\n *     date-like object.  If not set, the created object will contain the\n *     date determined by goog.now().\n * @param {number=} opt_month UTC month, 0 = Jan, 11 = Dec.\n * @param {number=} opt_date UTC date of month, 1 - 31.\n * @param {number=} opt_hours UTC hours, 0 - 23.\n * @param {number=} opt_minutes UTC minutes, 0 - 59.\n * @param {number=} opt_seconds UTC seconds, 0 - 59.\n * @param {number=} opt_milliseconds UTC milliseconds, 0 - 999.\n * @constructor\n * @struct\n * @extends {goog.date.DateTime}\n */\ngoog.date.UtcDateTime = function(\n    opt_year, opt_month, opt_date, opt_hours, opt_minutes, opt_seconds,\n    opt_milliseconds) {\n  'use strict';\n  var timestamp;\n  if (typeof opt_year === 'number') {\n    timestamp = Date.UTC(\n        opt_year, opt_month || 0, opt_date || 1, opt_hours || 0,\n        opt_minutes || 0, opt_seconds || 0, opt_milliseconds || 0);\n  } else {\n    timestamp = opt_year ? opt_year.getTime() : goog.now();\n  }\n  /** @override */\n  this.date = new Date(timestamp);\n};\ngoog.inherits(goog.date.UtcDateTime, goog.date.DateTime);\n\n\n/**\n * @param {number} timestamp Number of milliseconds since Epoch.\n * @return {!goog.date.UtcDateTime}\n */\ngoog.date.UtcDateTime.fromTimestamp = function(timestamp) {\n  'use strict';\n  var date = new goog.date.UtcDateTime();\n  date.setTime(timestamp);\n  return date;\n};\n\n\n/**\n * Creates a DateTime from a UTC datetime string expressed in ISO 8601 format.\n *\n * @param {string} formatted A date or datetime expressed in ISO 8601 format.\n * @return {goog.date.UtcDateTime} Parsed date or null if parse fails.\n */\ngoog.date.UtcDateTime.fromIsoString = function(formatted) {\n  'use strict';\n  var ret = new goog.date.UtcDateTime(2000);\n  return goog.date.setIso8601DateTime(ret, formatted) ? ret : null;\n};\n\n\n/**\n * Clones the UtcDateTime object.\n *\n * @return {!goog.date.UtcDateTime} A clone of the datetime object.\n * @override\n */\ngoog.date.UtcDateTime.prototype.clone = function() {\n  'use strict';\n  var date = new goog.date.UtcDateTime(this.date);\n  date.setFirstDayOfWeek(this.getFirstDayOfWeek());\n  date.setFirstWeekCutOffDay(this.getFirstWeekCutOffDay());\n  return date;\n};\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.add = function(interval) {\n  'use strict';\n  if (interval.years || interval.months) {\n    var yearsMonths = new goog.date.Interval(interval.years, interval.months);\n    goog.date.Date.prototype.add.call(this, yearsMonths);\n  }\n  var daysAndTimeMillis = 1000 *\n      (interval.seconds +\n       60 * (interval.minutes + 60 * (interval.hours + 24 * interval.days)));\n  this.date = new Date(this.date.getTime() + daysAndTimeMillis);\n};\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.getTimezoneOffset = function() {\n  'use strict';\n  return 0;\n};\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.getFullYear =\n    goog.date.DateTime.prototype.getUTCFullYear;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.getMonth =\n    goog.date.DateTime.prototype.getUTCMonth;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.getDate =\n    goog.date.DateTime.prototype.getUTCDate;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.getHours =\n    goog.date.DateTime.prototype.getUTCHours;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.getMinutes =\n    goog.date.DateTime.prototype.getUTCMinutes;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.getSeconds =\n    goog.date.DateTime.prototype.getUTCSeconds;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.getMilliseconds =\n    goog.date.DateTime.prototype.getUTCMilliseconds;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.getDay = goog.date.DateTime.prototype.getUTCDay;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.setFullYear =\n    goog.date.DateTime.prototype.setUTCFullYear;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.setMonth =\n    goog.date.DateTime.prototype.setUTCMonth;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.setDate =\n    goog.date.DateTime.prototype.setUTCDate;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.setHours =\n    goog.date.DateTime.prototype.setUTCHours;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.setMinutes =\n    goog.date.DateTime.prototype.setUTCMinutes;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.setSeconds =\n    goog.date.DateTime.prototype.setUTCSeconds;\n\n\n/** @override */\ngoog.date.UtcDateTime.prototype.setMilliseconds =\n    goog.date.DateTime.prototype.setUTCMilliseconds;\n","~:compiled-at",1682448775028,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.date.utcdatetime.js\",\n\"lineCount\":57,\n\"mappings\":\"AAUAA,IAAKC,CAAAA,OAAL,CAAa,uBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,WAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,gBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,oBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,oBAAb,CAAA;AAsBAF,IAAKG,CAAAA,IAAKC,CAAAA,WAAV,GAAwBC,QAAQ,CAC5BC,QAD4B,EAClBC,SADkB,EACPC,QADO,EACGC,SADH,EACcC,WADd,EAC2BC,WAD3B,EAE5BC,gBAF4B,CAEV;AAEpB,MAAIC,SAAJ;AACA,MAAI,MAAOP,SAAX,KAAwB,QAAxB;AACEO,aAAA,GAAYC,IAAKC,CAAAA,GAAL,CACRT,QADQ,EACEC,SADF,IACe,CADf,EACkBC,QADlB,IAC8B,CAD9B,EACiCC,SADjC,IAC8C,CAD9C,EAERC,WAFQ,IAEO,CAFP,EAEUC,WAFV,IAEyB,CAFzB,EAE4BC,gBAF5B,IAEgD,CAFhD,CAAZ;AADF;AAKEC,aAAA,GAAYP,QAAA,GAAWA,QAASU,CAAAA,OAAT,EAAX,GAAgChB,IAAKiB,CAAAA,GAAL,EAA5C;AALF;AAQA,MAAKd,CAAAA,IAAL,GAAY,IAAIW,IAAJ,CAASD,SAAT,CAAZ;AAXoB,CAFtB;AAeAb,IAAKkB,CAAAA,QAAL,CAAclB,IAAKG,CAAAA,IAAKC,CAAAA,WAAxB,EAAqCJ,IAAKG,CAAAA,IAAKgB,CAAAA,QAA/C,CAAA;AAOAnB,IAAKG,CAAAA,IAAKC,CAAAA,WAAYgB,CAAAA,aAAtB,GAAsCC,QAAQ,CAACR,SAAD,CAAY;AAExD,MAAIV,OAAO,IAAIH,IAAKG,CAAAA,IAAKC,CAAAA,WAAd,EAAX;AACAD,MAAKmB,CAAAA,OAAL,CAAaT,SAAb,CAAA;AACA,SAAOV,IAAP;AAJwD,CAA1D;AAcAH,IAAKG,CAAAA,IAAKC,CAAAA,WAAYmB,CAAAA,aAAtB,GAAsCC,QAAQ,CAACC,SAAD,CAAY;AAExD,MAAIC,MAAM,IAAI1B,IAAKG,CAAAA,IAAKC,CAAAA,WAAd,CAA0B,IAA1B,CAAV;AACA,SAAOJ,IAAKG,CAAAA,IAAKwB,CAAAA,kBAAV,CAA6BD,GAA7B,EAAkCD,SAAlC,CAAA,GAA+CC,GAA/C,GAAqD,IAA5D;AAHwD,CAA1D;AAaA1B,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUC,CAAAA,KAAhC,GAAwCC,QAAQ,EAAG;AAEjD,MAAI3B,OAAO,IAAIH,IAAKG,CAAAA,IAAKC,CAAAA,WAAd,CAA0B,IAAKD,CAAAA,IAA/B,CAAX;AACAA,MAAK4B,CAAAA,iBAAL,CAAuB,IAAKC,CAAAA,iBAAL,EAAvB,CAAA;AACA7B,MAAK8B,CAAAA,qBAAL,CAA2B,IAAKC,CAAAA,qBAAL,EAA3B,CAAA;AACA,SAAO/B,IAAP;AALiD,CAAnD;AAUAH,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUO,CAAAA,GAAhC,GAAsCC,QAAQ,CAACC,QAAD,CAAW;AAEvD,MAAIA,QAASC,CAAAA,KAAb,IAAsBD,QAASE,CAAAA,MAA/B,CAAuC;AACrC,QAAIC,cAAc,IAAIxC,IAAKG,CAAAA,IAAKsC,CAAAA,QAAd,CAAuBJ,QAASC,CAAAA,KAAhC,EAAuCD,QAASE,CAAAA,MAAhD,CAAlB;AACAvC,QAAKG,CAAAA,IAAKW,CAAAA,IAAKc,CAAAA,SAAUO,CAAAA,GAAIO,CAAAA,IAA7B,CAAkC,IAAlC,EAAwCF,WAAxC,CAAA;AAFqC;AAIvC,MAAIG,oBAAoB,IAApBA,IACCN,QAASO,CAAAA,OADVD,GAEC,EAFDA,IAEON,QAASQ,CAAAA,OAFhBF,GAE0B,EAF1BA,IAEgCN,QAASS,CAAAA,KAFzCH,GAEiD,EAFjDA,GAEsDN,QAASU,CAAAA,IAF/DJ,GAAJ;AAGA,MAAKxC,CAAAA,IAAL,GAAY,IAAIW,IAAJ,CAAS,IAAKX,CAAAA,IAAKa,CAAAA,OAAV,EAAT,GAA+B2B,iBAA/B,CAAZ;AATuD,CAAzD;AAcA3C,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUoB,CAAAA,iBAAhC,GAAoDC,QAAQ,EAAG;AAE7D,SAAO,CAAP;AAF6D,CAA/D;AAOAjD,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUsB,CAAAA,WAAhC,GACIlD,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAUuB,CAAAA,cADjC;AAKAnD,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUwB,CAAAA,QAAhC,GACIpD,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAUyB,CAAAA,WADjC;AAKArD,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAU0B,CAAAA,OAAhC,GACItD,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAU2B,CAAAA,UADjC;AAKAvD,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAU4B,CAAAA,QAAhC,GACIxD,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAU6B,CAAAA,WADjC;AAKAzD,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAU8B,CAAAA,UAAhC,GACI1D,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAU+B,CAAAA,aADjC;AAKA3D,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUgC,CAAAA,UAAhC,GACI5D,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAUiC,CAAAA,aADjC;AAKA7D,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUkC,CAAAA,eAAhC,GACI9D,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAUmC,CAAAA,kBADjC;AAKA/D,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUoC,CAAAA,MAAhC,GAAyChE,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAUqC,CAAAA,SAAtE;AAIAjE,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUsC,CAAAA,WAAhC,GACIlE,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAUuC,CAAAA,cADjC;AAKAnE,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUwC,CAAAA,QAAhC,GACIpE,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAUyC,CAAAA,WADjC;AAKArE,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAU0C,CAAAA,OAAhC,GACItE,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAU2C,CAAAA,UADjC;AAKAvE,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAU4C,CAAAA,QAAhC,GACIxE,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAU6C,CAAAA,WADjC;AAKAzE,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAU8C,CAAAA,UAAhC,GACI1E,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAU+C,CAAAA,aADjC;AAKA3E,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUgD,CAAAA,UAAhC,GACI5E,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAUiD,CAAAA,aADjC;AAKA7E,IAAKG,CAAAA,IAAKC,CAAAA,WAAYwB,CAAAA,SAAUkD,CAAAA,eAAhC,GACI9E,IAAKG,CAAAA,IAAKgB,CAAAA,QAASS,CAAAA,SAAUmD,CAAAA,kBADjC;;\",\n\"sources\":[\"goog/date/utcdatetime.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Locale independent date/time class.\\n */\\n\\ngoog.provide('goog.date.UtcDateTime');\\n\\ngoog.require('goog.date');\\ngoog.require('goog.date.Date');\\ngoog.require('goog.date.DateTime');\\ngoog.require('goog.date.Interval');\\n\\n\\n\\n/**\\n * Class representing a date/time in GMT+0 time zone, without daylight saving.\\n * Defaults to current date and time if none is specified. The get... and the\\n * getUTC... methods are equivalent.\\n *\\n * @param {number|goog.date.DateLike=} opt_year Four digit UTC year or a\\n *     date-like object.  If not set, the created object will contain the\\n *     date determined by goog.now().\\n * @param {number=} opt_month UTC month, 0 = Jan, 11 = Dec.\\n * @param {number=} opt_date UTC date of month, 1 - 31.\\n * @param {number=} opt_hours UTC hours, 0 - 23.\\n * @param {number=} opt_minutes UTC minutes, 0 - 59.\\n * @param {number=} opt_seconds UTC seconds, 0 - 59.\\n * @param {number=} opt_milliseconds UTC milliseconds, 0 - 999.\\n * @constructor\\n * @struct\\n * @extends {goog.date.DateTime}\\n */\\ngoog.date.UtcDateTime = function(\\n    opt_year, opt_month, opt_date, opt_hours, opt_minutes, opt_seconds,\\n    opt_milliseconds) {\\n  'use strict';\\n  var timestamp;\\n  if (typeof opt_year === 'number') {\\n    timestamp = Date.UTC(\\n        opt_year, opt_month || 0, opt_date || 1, opt_hours || 0,\\n        opt_minutes || 0, opt_seconds || 0, opt_milliseconds || 0);\\n  } else {\\n    timestamp = opt_year ? opt_year.getTime() : goog.now();\\n  }\\n  /** @override */\\n  this.date = new Date(timestamp);\\n};\\ngoog.inherits(goog.date.UtcDateTime, goog.date.DateTime);\\n\\n\\n/**\\n * @param {number} timestamp Number of milliseconds since Epoch.\\n * @return {!goog.date.UtcDateTime}\\n */\\ngoog.date.UtcDateTime.fromTimestamp = function(timestamp) {\\n  'use strict';\\n  var date = new goog.date.UtcDateTime();\\n  date.setTime(timestamp);\\n  return date;\\n};\\n\\n\\n/**\\n * Creates a DateTime from a UTC datetime string expressed in ISO 8601 format.\\n *\\n * @param {string} formatted A date or datetime expressed in ISO 8601 format.\\n * @return {goog.date.UtcDateTime} Parsed date or null if parse fails.\\n */\\ngoog.date.UtcDateTime.fromIsoString = function(formatted) {\\n  'use strict';\\n  var ret = new goog.date.UtcDateTime(2000);\\n  return goog.date.setIso8601DateTime(ret, formatted) ? ret : null;\\n};\\n\\n\\n/**\\n * Clones the UtcDateTime object.\\n *\\n * @return {!goog.date.UtcDateTime} A clone of the datetime object.\\n * @override\\n */\\ngoog.date.UtcDateTime.prototype.clone = function() {\\n  'use strict';\\n  var date = new goog.date.UtcDateTime(this.date);\\n  date.setFirstDayOfWeek(this.getFirstDayOfWeek());\\n  date.setFirstWeekCutOffDay(this.getFirstWeekCutOffDay());\\n  return date;\\n};\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.add = function(interval) {\\n  'use strict';\\n  if (interval.years || interval.months) {\\n    var yearsMonths = new goog.date.Interval(interval.years, interval.months);\\n    goog.date.Date.prototype.add.call(this, yearsMonths);\\n  }\\n  var daysAndTimeMillis = 1000 *\\n      (interval.seconds +\\n       60 * (interval.minutes + 60 * (interval.hours + 24 * interval.days)));\\n  this.date = new Date(this.date.getTime() + daysAndTimeMillis);\\n};\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.getTimezoneOffset = function() {\\n  'use strict';\\n  return 0;\\n};\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.getFullYear =\\n    goog.date.DateTime.prototype.getUTCFullYear;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.getMonth =\\n    goog.date.DateTime.prototype.getUTCMonth;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.getDate =\\n    goog.date.DateTime.prototype.getUTCDate;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.getHours =\\n    goog.date.DateTime.prototype.getUTCHours;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.getMinutes =\\n    goog.date.DateTime.prototype.getUTCMinutes;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.getSeconds =\\n    goog.date.DateTime.prototype.getUTCSeconds;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.getMilliseconds =\\n    goog.date.DateTime.prototype.getUTCMilliseconds;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.getDay = goog.date.DateTime.prototype.getUTCDay;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.setFullYear =\\n    goog.date.DateTime.prototype.setUTCFullYear;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.setMonth =\\n    goog.date.DateTime.prototype.setUTCMonth;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.setDate =\\n    goog.date.DateTime.prototype.setUTCDate;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.setHours =\\n    goog.date.DateTime.prototype.setUTCHours;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.setMinutes =\\n    goog.date.DateTime.prototype.setUTCMinutes;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.setSeconds =\\n    goog.date.DateTime.prototype.setUTCSeconds;\\n\\n\\n/** @override */\\ngoog.date.UtcDateTime.prototype.setMilliseconds =\\n    goog.date.DateTime.prototype.setUTCMilliseconds;\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"date\",\"UtcDateTime\",\"goog.date.UtcDateTime\",\"opt_year\",\"opt_month\",\"opt_date\",\"opt_hours\",\"opt_minutes\",\"opt_seconds\",\"opt_milliseconds\",\"timestamp\",\"Date\",\"UTC\",\"getTime\",\"now\",\"inherits\",\"DateTime\",\"fromTimestamp\",\"goog.date.UtcDateTime.fromTimestamp\",\"setTime\",\"fromIsoString\",\"goog.date.UtcDateTime.fromIsoString\",\"formatted\",\"ret\",\"setIso8601DateTime\",\"prototype\",\"clone\",\"goog.date.UtcDateTime.prototype.clone\",\"setFirstDayOfWeek\",\"getFirstDayOfWeek\",\"setFirstWeekCutOffDay\",\"getFirstWeekCutOffDay\",\"add\",\"goog.date.UtcDateTime.prototype.add\",\"interval\",\"years\",\"months\",\"yearsMonths\",\"Interval\",\"call\",\"daysAndTimeMillis\",\"seconds\",\"minutes\",\"hours\",\"days\",\"getTimezoneOffset\",\"goog.date.UtcDateTime.prototype.getTimezoneOffset\",\"getFullYear\",\"getUTCFullYear\",\"getMonth\",\"getUTCMonth\",\"getDate\",\"getUTCDate\",\"getHours\",\"getUTCHours\",\"getMinutes\",\"getUTCMinutes\",\"getSeconds\",\"getUTCSeconds\",\"getMilliseconds\",\"getUTCMilliseconds\",\"getDay\",\"getUTCDay\",\"setFullYear\",\"setUTCFullYear\",\"setMonth\",\"setUTCMonth\",\"setDate\",\"setUTCDate\",\"setHours\",\"setUTCHours\",\"setMinutes\",\"setUTCMinutes\",\"setSeconds\",\"setUTCSeconds\",\"setMilliseconds\",\"setUTCMilliseconds\"]\n}\n"]