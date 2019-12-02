import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://192.168.0.104:9098/dev';
  constructor(private server:HttpClient)
   { }
  select()
  {
     return this.server.get(this.url);
  }
  update(devObje){
    return this.server.put(this.url+"/"+devObje.id,devObje)
  }
  delete(id){
    return this.server.delete(this.url+"/"+id)
  }
  insert(devObje){
    return this.server.post(this.url,devObje)
  }
  selectById(id){
    return this.server.get(this.url+"/"+id)
  }
}
