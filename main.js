//---------- ES5 --------->
const logger = (log) => {
  if (typeof log === "undefined") {
    log = "default value";
  }
  console.log("value 1 :", log);
};
//It will log "default value"
logger();
// When assign a parameter here, the value is change
logger("something here");

//---------- ES6 ------->
const logger2 = (log = "default value") => {
  console.log("values 2: ", log);
};

logger2();

// ---------- Reality Example --------->
const logger3 = (log, type = "log") => {
  console[type](log);
};

logger3("something here", "warn");
