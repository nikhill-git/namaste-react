//Summery of Episode-1

=> react can be written without using JSX files

=> hello world using HTML
=> hello world using Javascript, using innerHTML and append child
=> hello world using react,
   
    //creates an object not an actual element 
   -> create an Element
   ( const xyz = React.createElement("tag name", {attributes}, "children"));
   //console.log(xzy)//returns object


   ->create a root and add the root Element
   (const root = ReactDOM.createRoot(document.querySelector(".root")));
    
   //converts object into actual tag and displays on the screen.
   //the content before render  the object will be ****replaced**** by the rendered object.
   ->render the object to the root
   (root.render(xyz));


   