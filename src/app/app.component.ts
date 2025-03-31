import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  synth: any;
  voices: any;
  constructor(){
    this.synth = window.speechSynthesis;
    this.voices = this.synth.getVoices();
  }
ngOnInit(): void {
  // this.speak("Hey Welcome! This is Tanushree Gangwal.");
  
}
 toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks?.classList.toggle('active');
}

speak(string: any) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 2; //0-2 interval
  this.synth.speak(u);
}
}
