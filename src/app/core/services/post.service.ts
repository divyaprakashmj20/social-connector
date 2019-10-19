import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  public getPost(){
    return this.httpClient.get(environment.baseUrl + '/posts/5da47a34880bdaa4803588ae');
  }
}
