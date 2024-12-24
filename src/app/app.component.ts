import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CashierComponent } from './pages/cashier/cashier.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CashierComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nekss';
}
