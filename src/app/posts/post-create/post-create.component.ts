import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredValue="";
  newPost = 'No Content Yet';

    createPost(){
      this.newPost = this.enteredValue;
    }
}
