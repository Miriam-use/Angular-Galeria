import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  imagenURL = 'http://localhost:8888/cloudinary/';
/**
 * @param httpClient
 */
  constructor(private httpClient: HttpClient) { }
/**
 * @return this.httpClient.get<Imagen[]>(this.imagenURL + 'list')
 */
  public list(): Observable<Imagen[]> {
    return this.httpClient.get<Imagen[]>(this.imagenURL + 'list');
  }
/**
 * 
 * @param imagen 
 * @return this.httpClient.post<any>(this.imagenURL + 'upload', formData)
 * 
 */
  public upload(imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', imagen);
    return this.httpClient.post<any>(this.imagenURL + 'upload', formData);
  }
/**
 * @return this.httpClient.delete<any>(this.imagenURL + `delete/${id}`)
 */
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.imagenURL + `delete/${id}`);
  }
}
