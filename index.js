const fetch = require("node-fetch");

const track = (id, data) => {
  if (!id) {
    return Promise.reject("id required");
  }
  if (!data) {
    return Promise.reject("data required");
  }
  try {
    return fetch(process.env.TRACKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, data }),
    }).catch((e) => e);
  } catch (e) {
    console.log(e);
    return Promise.resolve();
  }
};

module.exports = { track };
