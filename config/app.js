(function () {
  "use strict";
  var e = require("crypto"),
    n = require("base64url"),
    i = require("fs"),
    r = Date.now(),
    t = n(e.randomBytes(64));
  i.appendFile(
    "./config/app.js",
    "\n//UNIX=" + r + "\n//APP_KEY=" + t,
    function (e) {
      if (e) throw e;
    }
  ),
    i.appendFile(".env", "\n#UNIX=" + r + "\n#APP_KEY=" + t, function (e) {
      if (e) throw e;
      process.exit(0);
    });
}.call(this));
//UNIX=1643096656497
//APP_KEY=vSMmfdO01RTxDVGUj0moc4nj23DN_PHVuXpAlWHXsdt0OHTwECexWPoy4D6TEb-penO3w2p3sa1Fv-GX48d1Sw