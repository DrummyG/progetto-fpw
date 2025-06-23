import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useSessionStore = defineStore('session', () =>{
    const userID = ref(null)
    const username = ref(null)

    function setUser(value){
        userID.value = value
    }
    function getUser(){
        return userID.value
    }
    function info(){
        return userID.username
    }

    return {userID, setUser, getUser, info}
})