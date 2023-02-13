const delay = (t: number) => new Promise((r) => setTimeout(r, t));

export const useCounter = defineStore('counter', () => {
  const n = ref(2);
  const incrementedTimes = ref(0);
  const decrementedTimes = ref(0);

  function increment(amount = 1) {
    incrementedTimes.value++;
    n.value += amount;
  }

  async function decrementToZero(interval: number = 300) {
    if (n.value <= 0) return;

    while (n.value > 0) {
      n.value--;
      decrementedTimes.value++;
      await delay(interval);
    }
  }

  return {
    n,
    incrementedTimes,
    decrementedTimes,
    increment,
    decrementToZero,
  };
});
