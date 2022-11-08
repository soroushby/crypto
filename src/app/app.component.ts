import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from './crypto/services/crypto-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crypto';
}
