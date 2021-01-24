import { Observable } from "rxjs";

const Timer = () => {
  const startTime = Date.now();
  let timer = {};

  timer = new Observable((subscriber) => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      subscriber.next(new Date(deltaTime));
    }, 1000);

    return clearInterval();
  });

  return timer;
};

export default Timer;
