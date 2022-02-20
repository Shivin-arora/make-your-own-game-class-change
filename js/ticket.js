class Ticket{

    constructor(){
     this.ticket = generateTicket();
     this.er=[[],[],[]];
     
        for(var b = 0 ; b<9 ; b++){
        this.er[0].push(createButton(ticket[0][b]).class('customTBox'));
        }
        for(var b = 0 ; b<9 ; b++){
        this.er[1].push(createButton(ticket[1][b]).class('customTBox'));
        }
        for(var b = 0 ; b<9 ; b++){
        this.er[2].push(createButton(ticket[2][b]).class('customTBox'));
        }

       
          
      



        

    }

    display(){
     for(var i = 0;i<this.er[0].length; i++){
      this.er[0][i].mousePressed(()=> {
        this.er[0][i].class('TBoxClicked');
      });
    }

    fill("yellow");
    rectMode("CENTER");
     rect(85,5,470,140);
      
     for(var i = 0; i < this.er[0].length ; i++ ){
      if(this.er[0][i]== 0){
          this.er[0][i] = " ";
          console.log("shivin");
      }
      if(this.er[1][i]== 0){
        this.er[1][i] = " ";
      }
      if(this.er[2][i]== 0){
        this.er[2][i] = " ";
      }
      }

     var space = 50;
      for(var s = 0 ; s<this.er[0].length;s++){
          space += 50;
          this.er[0][s].position(space,20);
          this.er[1][s].position(space,60);
          this.er[2][s].position(space,100);
      }

      
    
      
    
    }



}