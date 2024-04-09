import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  sections = {};
  curentsection: any;
  constructor(private router: Router) { }

  ngOnInit() {

    window.onscroll = function () {
      myFunction()
    };
    var navbar1 = document.getElementById("navbar1");
    function myFunction() {
      if (navbar1)
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbar1.style.padding = "10px";
        navbar1.classList.add("navbar-scrolled")
      }
      else {
        navbar1.style.padding = "20px";
        navbar1.classList.remove("navbar-scrolled")
      }
    }

    this.curentsection = 'home'
  }

  toggleMenu() {
    document.getElementById('navbarCollapse')?.classList.toggle('show');
    document.getElementById('menu_button')?.classList.toggle('collapsed');
  }

  ngAfterViewInit() {
  }

  onSectionChange(section: any) {
    this.curentsection = section
  }
}
