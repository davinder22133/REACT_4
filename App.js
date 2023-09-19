import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";

/*
const heading=ce("h1",{
    id:"h1_el",
    hello:"world",
    key:"heading_1"
},"h1_heading");

const heading2=ce("h2",{key:"heading_2"},"this is h2 element");

const div=ce("div",null,[heading,heading2]);
*/
const rootElement = document.getElementById('root');






//------------------
/*
const div2=ce("div",null,[
  ce("h1",null,"LOGO") ,
  ce("ul",null,[
    ce("li",null,"about us"),
    ce("li",null,"contact us")

  ]) 
])
*/

const Hello_word=()=>{(<h1>this is hello world</h1>);}
let x=10;

const Heading=()=>{
  return (
    <div>

      {{sum:10}}
      <h1 id="h1" key="h1_el">this is first heading using JSX</h1>
      <h1 id="h1" key="h1_el_s">this is second heading using JSX</h1>
      </div>

      
  );
}

console.log("heading is ",Heading," type is ",typeof(Heading));
  



const root = ReactDOM.createRoot(rootElement);

console.log("hi is the new keywor");
console.log("hello is the new keword");
root.render(<Heading/>);