class Event {
  constructor() {
    this.proxy = {};
  }

  on(tag, cb) {
    if (!this.proxy[tag]) {
      this.proxy[tag] = [];
    }
    this.proxy[tag].push(cb);
  }

  once(tag, cb) {
    this.proxy[tag] = [cb];
  }

  off(tag) {
    this.proxy[tag] = [];
  }

  emit(tag, ...params) {
    this.proxy[tag] &&
      this.proxy[tag].forEach(cb => {
        cb(...params);
      });
  }
}

export default Event;
