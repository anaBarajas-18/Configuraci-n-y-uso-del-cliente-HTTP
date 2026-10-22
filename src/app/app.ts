import { Component } from '@angular/core';
import { UsuariosComponent } from './components/usuarios/usuarios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsuariosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}