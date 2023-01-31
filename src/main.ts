import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Parse from 'parse'
// Parse.initialize(
//     "Fn0jDZsfpKxPPgqlF3N0f15DPlCsfdGblSE3AGnd",
//     "C2sKkeXexxiuGsA87alfPBUGjzPEARRMjuJxaNjB"
//   ); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
//   Parse.serverURL = "https://parseapi.back4app.com/";
//   Parse.masterKey = "07SBgFr4iwnWCpaa3OT0CdPgkrZefsZZVE2A6Oa8";

createApp(App).use(router).mount('#app')
