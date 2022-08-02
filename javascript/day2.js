const weather = true;
const date = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (weather) {
        const dateDetails = {
          name: "Taj Trident",
          location: "55th Street",
          table: 5,
        };
        resolve(dateDetails);
      } else {
        reject(new Error("Bad weather, so no Date"));
      }
    }, 2000);
  });

const orderUber = (dateDetails) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = `Get me an Uber ASAP to ${dateDetails.location},we are going on a date!`;
      resolve(message);
    }, 5000);
  });
};

const myDate = async () => {
  try {
    dateReturn = await date();
    console.log("We are going on a date!");
    console.log(dateReturn);
    uberReturn = await orderUber(dateReturn);
    console.log(uberReturn);
  } catch (error) {
    console.log(error.message);
  }
};

myDate();
