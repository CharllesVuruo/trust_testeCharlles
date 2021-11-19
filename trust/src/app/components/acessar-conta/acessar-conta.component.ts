import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-acessar-conta',
  templateUrl: './acessar-conta.component.html',
  styleUrls: ['./acessar-conta.component.css']
})
export class AcessarContaComponent implements OnInit {

  oForm: FormGroup;
  msg: string;
  constructor(public formBuilder: FormBuilder,
    public router: Router) {
    this.oForm = formBuilder.group({
      nomeUsuario: ['', [Validators.required]],
      senha: ['', []]
    });
  }

  ngOnInit() {
  }

  validaCampos() {
    this.msg = "Campos obrigatórios não preenchidos";
    return true;
  }

  onEntrar(formValid: FormGroup) {
    if (formValid.invalid) {
      this.validaCampos();
    } else {
      if(this.nomeUsuario.value) {
        this.router.navigate(['/admin'], { queryParams: { usuarioLogado: this.nomeUsuario.value } });
      }
    }
  }

  get nomeUsuario() {
    return this.oForm.get('nomeUsuario')
  }

  get senha() {
    return this.oForm.get('senha')
  }

}
