// 封装cookie
  let Cookie = {};
  var e = decodeURIComponent;
  var d = encodeURIComponent;
  Cookie.get = function(i, h) {
    g(i);
    if (typeof h === "function") {
      h = { converter: h };
    } else {
      h = h || {};
    }
    var j = c(document.cookie, !h["raw"]);
    return (h.converter || f)(j[i]);
  };
  Cookie.set = function(k, m, j) {
    g(k);
    j = j || {};
    var h = j["expires"];
    var l = j["domain"];
    var n = j["path"];
    if (!j["raw"]) {
      m = d(String(m));
    }
    var o = k + "=" + m;
    var i = h;
    if (typeof i === "number") {
      i = new Date();
      i.setDate(i.getDate() + h);
    }
    if (i instanceof Date) {
      o += "; expires=" + i.toUTCString();
    }
    if (b(l)) {
      o += "; domain=" + l;
    }
    if (b(n)) {
      o += "; path=" + n;
    }
    if (j["secure"]) {
      o += "; secure";
    }
    document.cookie = o;
    return o;
  };
  Cookie.remove = function(i, h) {
    h = h || {};
    h["expires"] = new Date(0);
    return this.set(i, "", h);
  };
  function c(q, s) {
    var r = {};
    if (a(q) && q.length > 0) {
      var h = s ? e : f;
      var o = q.split(/;\s/g);
      var p;
      var j;
      var l;
      for (var k = 0, m = o.length; k < m; k++) {
        l = o[k].match(/([^=]+)=/i);
        if (l instanceof Array) {
          try {
            p = e(l[1]);
            j = h(o[k].substring(l[1].length + 1));
          } catch (n) {}
        } else {
          p = e(o[k]);
          j = "";
        }
        if (p) {
          r[p] = j;
        }
      }
    }
    return r;
  }
  function a(h) {
    return typeof h === "string";
  }
  function b(h) {
    return a(h) && h !== "";
  }
  function g(h) {
    if (!b(h)) {
      throw new TypeError("Cookie name must be a non-empty string");
    }
  }
  function f(h) {
    return h;
  }
  export default Cookie
