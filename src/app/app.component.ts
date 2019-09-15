import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quoterhub';

  ngOnInit() {
    this.changeIt();
  }


  changeIt() {
    var num = Math.ceil(Math.random() * 11);
    document.body.style.backgroundImage = "url('../assets/"+num+".svg')";
  }
}
