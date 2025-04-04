import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Welcome to Angular!';

  imageUrl = 'https://picsum.photos/seed/picsum/100/100';

  isWarning = true

  onClick(event: MouseEvent){
    console.log('Button clicked:', event);
    alert('Button clicked at coordinates: X:'+event.clientX+ ' Y:'+event.clientY);

  }

  userName = 'Pandharinath';
    
  
}
