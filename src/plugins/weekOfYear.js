! function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.dayjs_plugin_weekOfYear = t()
}(this, function () {
  "use strict";
  var e = "year";
  return function (t, i, n) {
    i.prototype.week = function () {
      var t = this.endOf(e);
      if (6 !== t.day() && 11 === this.month() && 31 - this.date() <= t.day()) return 1;
      var i = n(this.$d).startOf(e),
        d = i.subtract(i.day(), "day").subtract(1, "millisecond"),
        f = this.diff(d, "week", !0);
      return Math.ceil(f)
    }
  }
});
