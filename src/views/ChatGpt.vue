<template>
  <div>
    <p>ChatGPT</p>
    <form @submit.prevent="fetchAnswer(question)" >
      <!-- <input v-model="question" type="textarea" placeholder="ask to openai" /> -->
      <textarea v-model="question" type="textarea" placeholder="ask to openai">

      </textarea> <br />
      <button v-if="loading" type="submit">Send</button>
    </form>
    <div v-if="ansers">
      <!-- <p>{{question}}</p> -->
      <!-- <h4 v-if="ansers">{{ansers[0].value}}</h4> -->
      <ol>
        <li v-for="ans in ansers" :key="ans.question">
          <h1>{{ans.question}}</h1>
          <h3>{{ans.value}}</h3>
        </li>
      </ol>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted,  reactive,  ref } from "vue";
import { Configuration, OpenAIApi } from "openai";

const configration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configration);
export default defineComponent({
  setup() {
    const question = ref<any>('')
    onMounted(async () => {
     console.log('mounted')
    });
    const loading = ref<boolean>(true)
    const ansers = ref<any>([])
 
   async function fetchAnswer(message:any){
    loading.value=false
    console.log("Anseeeeeeeeeeeeee",message)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        temperature: 0, // Higher values means the model will take more risks.
        max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
        top_p: 1, // alternative to sampling with temperature, called nucleus sampling
        frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
        presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
      });
      
      console.log( response.data.choices[0].text);
      var data = response.data.choices[0].text
      ansers.value.push({
        question:question.value,
        value:data
      })
     question.value=null
     loading.value=true
      
   }

    return {
      fetchAnswer,
      question,
      ansers,
      loading
    };
  },
});
</script>
