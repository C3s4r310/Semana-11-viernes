import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false // Importante: Usamos módulos, no standalone
})
export class HomePage {

  nombre: string = '';
  correo: string = '';
  tipoApp: string = '';
  mensaje: string = '';
  registroValido: boolean = false;

  validarRegistro() {
    // Validar formato de correo (que tenga @ y .)
    const correoValido = this.correo.includes('@') && this.correo.includes('.');

    // Validar campos vacíos
    if (!this.nombre.trim() || !this.correo.trim() || !this.tipoApp) {
      this.registroValido = false;
      this.mensaje = 'Complete todos los campos antes de continuar.';
      return;
    }

    // Validar correo incorrecto
    if (!correoValido) {
      this.registroValido = false;
      this.mensaje = 'Ingrese un correo válido.';
      return;
    }

    // Si todo está correcto
    this.registroValido = true;
    this.mensaje = 'Registro válido. Bienvenido/a ' + this.nombre + '. Tipo de app: ' + this.tipoApp + '.';
  }

  limpiar() {
    this.nombre = '';
    this.correo = '';
    this.tipoApp = '';
    this.mensaje = '';
    this.registroValido = false;
  }
}