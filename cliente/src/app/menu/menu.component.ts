import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;
/**
 * 
 * @param tokenService 
 */
  constructor(private tokenService: TokenService) { }
/**
 * 
 */
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
/**
 * 
 */
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
