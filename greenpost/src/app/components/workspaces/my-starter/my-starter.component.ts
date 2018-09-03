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
    { date: new Date(), content: "����� � ����� 1-�� ��������" },
    { date: new Date(), content: "���������� �� ������ 7.12" },
    { date: new Date(), content: "���������� �� ������ 7.11" },
    { date: new Date(), content: "���������� �� ������ 7.10" },
    { date: new Date(), content: "���������� �� ������ 7.9" }
]

const actions: NewsItem[] = [
    { date: new Date(), content: "������� ����������� ������(�) ����� �1" },
    { date: new Date(), content: "������� ����������� ������(�) ����� �2" },
    { date: new Date(), content: "������� ����������� ������(�) ����� �3" },
    { date: new Date(), content: "������� ����������� ������(�) ����� �4" }
]

class NewsItem {
    public date: Date;
    public content: string;
}