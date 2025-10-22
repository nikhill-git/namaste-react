// //here React.createElement creates the object not the actual h1 tag with inner HTML
// const heading = React.createElement("button", { class: "btn"}, "React");
// console.log(heading); //returns the object not the actual h1 tag

// const root = ReactDOM.createRoot(document.querySelector(".root"));

//  //takes the object, converts it into actual h1 tag and shows on to the display
// root.render(heading);

//  //returns the object not the actual h1 tag.
// console.log(heading);



//Creating a nested tags something like this

/*<div class="parent">
    <div class="child1">
        <div class="h1">Heading - 1</div>
        <div class="h2">Heading - 2</div>
    </div>

    <div class="child2">
        <div class="h3">Heading - 3</div>
        <div class="h4">Heading - 4</div>
    </div>
</div> */

//creates the object not the actual elements
const parent = React.createElement("div", { id: "parent"}, //two children for parent
    [
        React.createElement("div", { id: "child1"}, 
        [React.createElement("h1", {}, "Heading1"),//two children for child1
            React.createElement("h2", {}, "Heading2")
        ]),
        React.createElement("div", { id: "child2"}, 
        [React.createElement("h3", {}, "Heading3"),//two children for child2
            React.createElement("h4", {}, "Heading4")
        ])
    ]
)

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(parent);

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
   (root.render(xyz))



