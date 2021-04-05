import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from './model/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http : HttpClient) { }


  getConsumers(query? : string) : Observable<Consumer[]> {
// can declare Object params here, empty
 //const params : {[key:string]........}
    if (query) {
      //return this.http.get<Consumer[]>('api/consumers/?q='+query);
      return this.http.get<Consumer[]>('api/consumers', {params: {q: query}});
    }
    return this.http.get<Consumer[]>('api/consumers');
  }


  addConsumer(consumer: Consumer) : Observable<Consumer> {
    console.log('Add consumer in service', consumer);
    return this.http.post<Consumer>('api/consumers/', consumer);
  }

  getConsumer(id? : string) : Observable<Consumer> {
    // can declare Object params here, empty
     //const params : {[key:string]........}
    if (id) {
      //return this.http.get<Consumer[]>('api/consumers/?q='+query);
      return this.http.get<Consumer>('api/consumers/'+ id);
    }
    return this.http.get<Consumer>('api/consumers');
  }

  updateConsumer(consumer : Consumer) {
    console.log('Update consumer in service', consumer);
    return this.http.put<Consumer>('api/consumers/'+consumer.id, consumer);

  }

  deleteConsumer(id : string) {
    return this.http.delete<Consumer>('api/consumers/'+id);
  }


  createOrUpdateConsumer(consumer: Consumer) {

  }


}
