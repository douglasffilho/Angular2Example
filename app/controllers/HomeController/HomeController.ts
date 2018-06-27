import {Component} from 'angular2/core';
import {HomeService} from '../../services/HomeService/HomeService';

@Component({
    selector: 'meu-app',
    templateUrl: 'app/views/HomeView/HomeView.html',
    providers: [HomeService]
})
export class HomeController{
    constructor(private homeService: HomeService) {}
}