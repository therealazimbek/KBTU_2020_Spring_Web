import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  deleteAlbum(album: Album): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/albums/${album.id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
}
