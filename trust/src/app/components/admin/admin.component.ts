import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  nomeUsuario: string;
  constructor(
    private _activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(oParams => {
      this.nomeUsuario = oParams['usuarioLogado'];
      
    });
  }

}
