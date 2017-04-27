# Event
a very light JavaScript Event System

# install

```
npm install ievent -S
```

# usage

```javascript
import iEvent from 'ievent'

iEvent.on("hello", (name, age) => {
  console.log("hello " + name + " age=" + age);
});

iEvent.on("hello", (name, age) => {
  console.log("hello " + name + " age=" + age + "...");
});

// Event.off("hello");

iEvent.emit("hello", "flypie", 21);

```
