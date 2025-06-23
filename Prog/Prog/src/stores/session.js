import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useSessionStore = defineStore('session', () =>{
    const userID = ref(null)
    function setUser(value){
        userID.value = value
    }
    function getUser(){
        return userID.value
    }

    return {userID, setUser, getUser}
})