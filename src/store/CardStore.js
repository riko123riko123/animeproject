import { defineStore } from "pinia";
import { ref } from "vue";




export const useCardStore = defineStore("CardStore", ()=>{
    const animes = ref([]);
return{
    animes
}
})

