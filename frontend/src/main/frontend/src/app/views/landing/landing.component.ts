import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
      var link = $(this);
      $('html, body').stop().animate({
        scrollTop: $(link.attr('href')).offset().top - 50
      }, 500);
      event.preventDefault();
      if($('body').hasClass('body-small')) {
        $('#navbar').collapse('toggle');
      }
    });

    // Activate WOW.js plugin for animation on scrol
    // new WOW().init();

  }
}
