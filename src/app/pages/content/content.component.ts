import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string="https://www.honda.com.br/automoveis/sites/hab/files/2023-01/004_Design.jpg"
  contentTitle:string="Minha Noticia"
  contentDescription="Ola Mundo"

  constructor() {}

  ngOnInit(): void {
  }

}
