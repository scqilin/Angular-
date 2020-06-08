import { Component } from '@angular/core';
// tslint:disable 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng9-Echarts';
  constructor(){
    // this.move();
  }

  move() {
    document.onmousedown = function (e) {
      var posx = e.clientX;
      var posy = e.clientY;
      var div = document.createElement("div");
      div.className = "tempDiv";
      div.style.borderStyle = "dashed";
      div.style.position = "absolute"
      div.style.left = e.clientX + "px";
      div.style.top = e.clientY + "px";
      document.body.appendChild(div);
      document.onmousemove = function (ev) {
        div.style.left = Math.min(ev.clientX, posx) + "px";
        div.style.top = Math.min(ev.clientY, posy) + "px";
        div.style.width = Math.abs(posx - ev.clientX) + "px";
        div.style.height = Math.abs(posy - ev.clientY) + "px";
        document.onmouseup = function () {
          div.parentNode.removeChild(div);
          document.onmousemove = null;
          document.onmouseup = null;
        }
      }
    }
  }

}
