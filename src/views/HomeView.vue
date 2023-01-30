<template>
  <div class="home">
    <p>In this page Enums and Methods are used</p>
    <p>Check messages in console</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
  setup(){
    type alphanumeric = string | number;
    enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Jun),"hhhhh"); // truex
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
}
const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};
if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}
function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
function raiseError(message: string): never {
    throw new Error(message);
    // console.log(message)
}
function reject() { 
   return raiseError('Rejected');
}
console.log(reject())
console.log(add(3,4))
console.log(add("Sanam","Nagarjuna"))
    return{

    }

  }
});
</script>
