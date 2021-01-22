import { Observable } from "rxjs";

const startTime = Date.now();

const timer = new Observable((observer) => {
  setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = currentTime - startTime;
    observer.next(new Date(deltaTime));
  }, 1000);

  return function unsubscribe() {
    clearInterval(timer);
  };
});

export default timer;
