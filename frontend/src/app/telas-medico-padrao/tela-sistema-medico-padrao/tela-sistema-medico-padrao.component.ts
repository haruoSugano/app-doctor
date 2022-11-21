import { Component, OnInit, AfterContentChecked, HostListener } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import GLightbox from 'node_modules/glightbox';


@Component({
  selector: 'app-tela-sistema-medico-padrao',
  templateUrl: './tela-sistema-medico-padrao.component.html',
  styleUrls: ['./tela-sistema-medico-padrao.component.css']
})

export class TelaSistemaMedicoPadraoComponent implements OnInit {

  constructor(public authService: AuthService) { }

  dropDown(id: string) {
    document.getElementById(id).classList.toggle("show");
  }

  logout() {
    this.authService.doLogout();
  }
  lightbox:any;

  ngOnInit() {
     //lightbox settings
     this.lightbox = GLightbox({
      'href': 'https://www.youtube.com/watch?v=-lW5ftJ2Xpk',
      'type': 'video',
      'source': 'youtube', //vimeo, youtube or local
      'width': 100,
      'autoplayVideos': true,
    });
  }
}


