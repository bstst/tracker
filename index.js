const track = (data) => {
  try {
    return fetch("https://tracker.saulis.com/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
    return Promise.resolve();
  }
};

module.exports = track;
