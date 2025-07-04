import { Component } from '@angular/core';
import { Header } from './header/header';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [Header, User],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-first-app';
}
