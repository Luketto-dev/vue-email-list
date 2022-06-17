//Descrizione:
//Attraverso l’apposita API di Boolean
//https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

//Bonus
//Far comparire gli indirizzi email solamente quando sono stati tutti generati.


new Vue({
    el: "#app",
    data:{
        email: null,
    },
    mathods:{
        generateEmail(){
            // recuperare tramite chiamata ajax una email
            axios.get("https:flynn.boolean.careers/exercises/api/random/mail")
            .then(function (axiosResp){
                console.log(axiosResp.data)
            });
        }
    },
})
   

/*axios
.get("https:flynn.boolean.careers/exercises/api/random/mail")
.then(function (response){
    console.log(response)
})*/