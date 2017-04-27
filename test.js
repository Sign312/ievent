iEvent.on("hello", (name, age) => {
  console.log("hello " + name + " age=" + age);
});

iEvent.on("hello", (name, age) => {
  console.log("hello " + name + " age=" + age + "...");
});

// Event.off("hello");

iEvent.emit("hello", "flypie", 21);
