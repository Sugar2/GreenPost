import {Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
@Component({
    selector: 'my-starter',
    templateUrl: './my-starter.component.html',
    styleUrls: ['./my-starter.component.scss']
})
export class MyStarterComponent{
    newsDataSource = new MatTableDataSource<NewsItem>(news);
    actionsDataSource = new MatTableDataSource<NewsItem>(actions);
}

const news: NewsItem[] = [
    { date: new Date(), content: "Акция в честь 1-го сентября" },
    { date: new Date(), content: "Обновление до версии 7.12" },
    { date: new Date(), content: "Обновление до версии 7.11" },
    { date: new Date(), content: "Обновление до версии 7.10" },
    { date: new Date(), content: "Обновление до версии 7.9" }
]

const actions: NewsItem[] = [
    { date: new Date(), content: "Людмила Мельниченко создал(а) заказ №1" },
    { date: new Date(), content: "Людмила Мельниченко создал(а) заказ №2" },
    { date: new Date(), content: "Людмила Мельниченко создал(а) заказ №3" },
    { date: new Date(), content: "Людмила Мельниченко создал(а) заказ №4" }
]

class NewsItem {
    public date: Date;
    public content: string;
}
