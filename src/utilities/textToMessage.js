export const textToMessage = text => {
  return {
    id: Math.random().toString(),
    sentFromUser: true,
    sentFrom: "Cesar Avitia",
    timeStamp: new Date(),
    text
  };
};
