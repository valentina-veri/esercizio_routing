import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Foto } from '../model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums")
  }

  getFotoAlbum(id: number): Observable<Foto[]> {
    return this.http.get<Foto[]>("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
  }
}
