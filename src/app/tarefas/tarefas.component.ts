import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../tarefas.service';
import { TarefaModel } from './tarefa.model';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  tarefa: TarefaModel = new TarefaModel();
  tarefas: Array<any> = new Array();
  isOpen = false;

  constructor(private tarefasService: TarefasService) { }

  ngOnInit(): void {
    this.listarTarefas();
  }

  atualizar(id: number){
    this.tarefasService.atualizarTarefa(id, this.tarefa).subscribe(tarefa => {
      this.tarefa = new TarefaModel();
      this.listarTarefas();
    }, err => {
      console.log('Erro ao atualizar a tarefa', err)
    })
  }

  remover(id: any){
    this.tarefasService.removerTarefa(id).subscribe(tarefa => {
      this.tarefa = new TarefaModel();
      this.listarTarefas();
    }, err => {
      console.log('Erro ao remover a tarefa', err)
    })
  }

  cadastrar(){
    console.log(this.tarefa);
    this.tarefasService.cadastrarTarefa(this.tarefa).subscribe(tarefa => {
      this.tarefa = new TarefaModel();
      this.listarTarefas();
    }, err => {
      console.log('Erro ao cadastrar a tarefa', err)
    })
  }


  listarTarefas(){
    this.tarefasService.listarTarefas().subscribe(tarefas => {
      this.tarefas = tarefas;
    }, err => {
      console.log('Erro ao listar as tarefas', err);
    })
  }

  modeloOpen(){
    this.isOpen = true;
  }

  modeloClose(){
    this.isOpen = false;
  }
}
