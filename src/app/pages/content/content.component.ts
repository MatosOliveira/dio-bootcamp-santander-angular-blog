import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string="https://www.honda.com.br/automoveis/sites/hab/files/2023-01/004_Design.jpg"
  contentTitle:string="Minha Noticia"
  contentDescription="Ola Mundo"

  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("id"))
    )
  }

}
