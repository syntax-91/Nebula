import { makeAutoObservable } from "mobx";

class ModalStore {
    

    isOpenModal = false
    closing = false

    msg = ''

    constructor() {
        makeAutoObservable(this)
    }

    run(msg:string){
        this.isOpenModal = true
        this.msg = msg
    }

    close(){
        this.isOpenModal = false;
    }
}

export const modalStore = new ModalStore()