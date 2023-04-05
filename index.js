const fetch = require("node-fetch");

const track = (id, data) => {
  if (!id) {
    return Promise.reject("id required");
  }
  if (!data) {
    return Promise.reject("data required");
  }
  try {
    return fetch("https://tracker.saulis.com/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, data }),
    });
  } catch (e) {
    console.log(e);
    return Promise.resolve();
  }
};

module.exports = { track };
