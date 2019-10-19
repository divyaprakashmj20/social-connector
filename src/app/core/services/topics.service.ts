import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private httpClient: HttpClient) { }

  public getTopics(){
    return this.httpClient.get(environment.baseUrl + '/topics');
  }

  public getTopicsGraphData(){
    return this.httpClient.get(environment.baseUrl + '/reactions/topic/5da47a34880bdaa4803588ae');
  }
}
