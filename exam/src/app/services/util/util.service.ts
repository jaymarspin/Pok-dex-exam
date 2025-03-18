import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  navLoaded = new BehaviorSubject(null as any);


  constructor() { }
}
