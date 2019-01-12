import { observable, action } from 'mobx';

export class gamesStore {
    @observable gamesData: any = [];


}

export default new gamesStore();