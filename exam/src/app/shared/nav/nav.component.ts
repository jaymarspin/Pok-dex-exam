import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  loaded: boolean = false
  constructor(public utilSrvc: UtilService) { }

  ngOnInit(): void {
    this.utilSrvc.navLoaded.subscribe({
      next: value =>{
        this.loaded = value
      }
    })
  }

}
