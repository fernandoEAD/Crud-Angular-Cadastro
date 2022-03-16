import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TarefaModel } from './tarefas/tarefa.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http: HttpClient) { }

  cadastrarTarefa(tarefa: TarefaModel): Observable<any>{
    return this.http.post(environment.apiUrl, tarefa);
  }

  listarTarefas() : Observable<any>{
    return this.http.get(environment.apiUrl);
  }

  atualizarTarefa(id:any, tarefa: TarefaModel): Observable<any>{
    return this.http.put(environment.apiUrl.concat(id), tarefa);
  }

  removerTarefa(id:any): Observable<any>{
    return this.http.delete(environment.apiUrl.concat(id));
  }
}
