export class Init{
    load(){
        if(localStorage.getItem('todos')===null || localStorage.getItem('todos')===undefined){
            console.log('No Todos found.... creating..');
            
            var todos =[
                      {
                        text:"Complete Angular js tutorial"
                      },
                      {
                        text:"repair bike"
                      }
                    ];
            
            localStorage.setItem('todos',JSON.stringify(todos));
            return
        }
        else{
            console.log('Found Todos');
        }
    }
}