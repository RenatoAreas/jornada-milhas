import { Component, OnInit } from '@angular/core';
import { DepoimentosService } from 'src/app/core/services/depoimentos.service';
import { Depoimentos } from 'src/app/core/types/depoimentos';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit{

  depoimentos: Depoimentos[] = []

  constructor(
    private depoimentosService: DepoimentosService
  ){}
  ngOnInit(): void {
    this.depoimentosService.listar().subscribe((data) => {
      this.depoimentos = data
      console.log ('dados de depoismentos', data)
    })

  }


}
