import { Observable } from "rxjs";

const Timer = () => {
  const startTime = Date.now();
  let timer = {};

  timer = new Observable((subscriber) => {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      subscriber.next(new Date(deltaTime));
    }, 1000);

    return function unsubscribe() {
      clearInterval(timer);
    };
  });

  return timer;
};

export default Timer;
