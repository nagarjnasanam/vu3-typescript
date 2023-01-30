<template>
  <div>
    <h1>Generics View</h1>
    <button @click="getRandomNumber([1,2,3,4,5,])">GetRandomNumber</button>
    <button @click="getRandomString(['sanam','nagarjuna','suresh','ss'])">GetRandomstring</button>
    <button @click="getRandomValue(['sanam','nagarjuna','suresh','ss'])">AnyRandomValue</button>
    <button @click="getRandomValue([1,2,3,4,5,])">AnyRandomValue</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const getRandomNumber = (items: number[]): number => {
      // console.log('hello',items)
      let randomIndex = Math.floor(Math.random() * items.length);
      console.log(items[randomIndex]);
      return items[randomIndex];
    };
    const getRandomString = (items: string[]): string => {
      // console.log('hello',items)
      let randomIndex = Math.floor(Math.random() * items.length);
      console.log(items[randomIndex]);
      return items[randomIndex];
    };
    const getRandomValue = (items: any): any => {
      // console.log('hello',items)
      let randomIndex = Math.floor(Math.random() * items.length);
      console.log(items[randomIndex]);
      return items[randomIndex];
    };
    function getRandomElement<T>(items: T[]): T {
      let randomIndex = Math.floor(Math.random() * items.length);
      return items[randomIndex];
    }
    let numbers = [1, 5, 7, 4, 2, 9];

    let randomEle = getRandomElement<number>(numbers);
    console.log(randomEle);

    let strings = ["A", "B", "C", "D"];
    let randomString = getRandomElement(strings);
    console.log(randomString);

    return {
      getRandomNumber,
      getRandomString,
      getRandomValue
    };
  }
});
</script>