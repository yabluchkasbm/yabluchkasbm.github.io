let appNote = {
    data() {
        return {
            title: "Для мрій з жигулями...",
            note: "",
            notesArr: [],

        }
    },
    methods: {
        Add() {
            if (this.note != "" && this.note != " ") {
                this.notesArr.unshift(this.note);
                this.note = "";

                localStorage.setItem("key", JSON.stringify(this.notesArr));
            }
            console.log(this.notesArr);
       
        },
        Delete(i){
            this.notesArr.splice(i,1);
            localStorage.setItem("key", JSON.stringify(this.notesArr));
        }

    },
    mounted() {
        if (localStorage.getItem("key") != null){
            this.notesArr = JSON.parse(localStorage.getItem("key"))
        }
    },

}
Vue.createApp(appNote).mount(".main-juguli-list")