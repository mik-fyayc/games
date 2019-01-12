import { observable, action } from 'mobx';
import axios from 'axios';

export class gamesStore {
    @observable gamesData: any = [];


}

export default new gamesStore();