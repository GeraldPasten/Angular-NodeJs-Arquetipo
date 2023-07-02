import { Component, OnInit } from '@angular/core';
import { BackEndApiService } from '../service/back-end-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data : any [] = [];

  constructor(private backendapi: BackEndApiService ) { }

  ngOnInit(): void {
    this.llenarData();
  }
  
  llenarData() {
    console.log('Antes de la llamada a getData()');
    this.backendapi.getData().subscribe((data: any[]) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
