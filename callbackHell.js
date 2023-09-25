function getUser(id, callback) {
  setTimeout(() => {
    if (!id) {
      callback(new Error("User ID is required"), null);
    }

    callback(null, { id, name: 'John Doe', location: "Jakarta" });
  }, 1000);
}

function getWeather(location, callback) {
  setTimeout(() => {
    if (!location) {
      callback(new Error("Location is required"), null);
    }

    callback(null, { weather: "Sunny", temperature: 30 });
  }, 1000);
}

function getUserWeather(userId, callback) {
  getUser(userId, (error, user) => {
    if (error) {
      callback(error, null);
    }

    getWeather(user.location, (error, weather) => {
      if (error) {
        callback(error, null);
      }

      callback(null, { ...user, ...weather });
    });
  });
}

getUserWeather(1, (error, userWeather) => {
  if (error) {
    console.log(error);
  }

  console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
});
