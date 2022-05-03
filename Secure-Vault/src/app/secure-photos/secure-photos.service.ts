import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurePhotosService {

  constructor(private http: HttpClient) { }
  URL:string ="https://jsonplaceholder.typicode.com/albums/";
  method:string="/photos"
  get_securePhotos(albumid:any) {
    return this.http.get(this.URL+albumid+this.method);
  }
}
