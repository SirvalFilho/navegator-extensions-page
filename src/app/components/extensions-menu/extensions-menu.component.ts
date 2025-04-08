import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extensions-menu',
  templateUrl: './extensions-menu.component.html',
  styleUrl: './extensions-menu.component.css'
})
export class ExtensionsMenuComponent implements OnInit {

  dados: any[] = [];
  dadosVisiveis: any[] = [];

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<any[]>("assets/data/data.json").subscribe(response => {
      this.dados = response;
      this.dadosVisiveis = [...this.dados];
    });
  }

  getAllExtensions(){
    this.dadosVisiveis = [...this.dados];
}

getActiveExtensions(){
  this.dadosVisiveis = this.dados.filter(extension => extension.isActive); 
}

getInactiveExtensions(){
  this.dadosVisiveis = this.dados.filter(extension => !extension.isActive);
}
}