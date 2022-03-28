import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  confirmTakeoff(){
    if(window.confirm('Confirm that the shuttle is ready for takeoff.')){
       //document.getElementById('status').innerHTML = 'Shuttle in flight.';
      
       this.message = "Shuttle in flight.";
       this.height = 10000;
       document.getElementById('background-color').style.backgroundColor = "blue";
    }
 }
 landingAlert(){
   window.alert('The shuttle is landing. Landing gear engaged.');
   this.message = "The shuttle has landed.";
   document.getElementById('background-color').style.backgroundColor = "green";
   this.height = 0;
 }
 abortMission(){
   if(window.confirm("Do you really want to abort the mission?")){
     this.message = 'Mission aborted.';
     document.getElementById('background-color').style.backgroundColor = "red";
     this.height = 0;
   }
 }
 shipMove(){
   document.getElementById("up").addEventListener("click",function(){
    document.getElementById("rocketImg").height = height + 10;
   })

   
 }
}
