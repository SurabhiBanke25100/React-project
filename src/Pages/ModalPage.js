import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useEffect } from "react";

function ModalPage(){

useEffect(()=>{
  document.body.classList.add('.overflow-hidden');
},[]);

const[ShowModal,SetShowModal]=useState(false);

const handleClick=()=>{
    SetShowModal(true);
}
const handleClose=()=>{
    SetShowModal(false);
}

const actionBar=()=>{
    <div>
        <Button primary onClick={handleClose}>I Accept!</Button>
    </div>
}

const modal=< Modal  onClose={handleClose} actionBar={<Button primary>I Accept!!</Button>} >
<p>Here is the Agreement you have to Accept!!</p>

</Modal>

return( 
    <div>
       
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pretium tellus in congue. Fusce vitae purus diam. Nunc ornare ullamcorper est ac scelerisque.   
           </p>
           <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pretium tellus in congue. Fusce vitae purus diam. Nunc ornare ullamcorper est ac scelerisque.   
           </p>
           <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pretium tellus in congue. Fusce vitae purus diam. Nunc ornare ullamcorper est ac scelerisque.   
           </p>
           <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pretium tellus in congue. Fusce vitae purus diam. Nunc ornare ullamcorper est ac scelerisque.   
           </p>
           <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pretium tellus in congue. Fusce vitae purus diam. Nunc ornare ullamcorper est ac scelerisque.   
           </p>
           <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pretium tellus in congue. Fusce vitae purus diam. Nunc ornare ullamcorper est ac scelerisque.   
           </p>
           <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pretium tellus in congue. Fusce vitae purus diam. Nunc ornare ullamcorper est ac scelerisque.   
           </p>
           <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pretium tellus in congue. Fusce vitae purus diam. Nunc ornare ullamcorper est ac scelerisque.   
           </p>
           <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pretium tellus in congue. Fusce vitae purus diam. Nunc ornare ullamcorper est ac scelerisque.   
           </p>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis pretium tellus in congue. Fusce vitae purus diam. Nunc ornare ullamcorper est ac scelerisque. Mauris luctus velit sed tempor blandit. Sed consequat tincidunt nunc. Integer eu neque sollicitudin velit sagittis interdum eu at nibh. Etiam facilisis ultricies magna, eu aliquam sem interdum quis. Quisque vel euismod risus.

Vivamus varius sit amet enim mattis molestie. Nunc sit amet tellus diam. Nunc dictum mattis scelerisque. Integer auctor fringilla egestas. Pellentesque convallis, metus et pulvinar ornare, quam massa fermentum elit, ullamcorper suscipit lacus magna feugiat nisl. Phasellus viverra diam vel rhoncus aliquet. Quisque eros nisi, pretium eget tortor ac, tincidunt laoreet nulla. Mauris volutpat, ante nec laoreet pretium, arcu nibh lacinia ligula, sit amet rutrum ligula libero in massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eget accumsan justo. Praesent vestibulum diam vel eros vulputate condimentum.

Proin a lacus iaculis, elementum leo eu, malesuada odio. Nunc aliquam tincidunt molestie. Vivamus vel ultricies nulla. Vivamus nec elementum nulla, quis dictum velit. Vivamus dui nibh, mattis nec finibus vitae, tincidunt fermentum libero. Phasellus efficitur dapibus nunc et tempor. Donec blandit cursus nisl. Mauris arcu eros, ullamcorper eu justo ac, elementum ultrices turpis.

Curabitur laoreet mauris sed nulla vehicula lacinia. Quisque condimentum urna urna, vitae consectetur ex sodales a. Nullam interdum turpis sed fringilla fermentum. Sed vitae sollicitudin ligula. Phasellus nec maximus ante, vitae sollicitudin tellus. Sed venenatis fringilla tortor sed consectetur. Nullam efficitur purus id molestie suscipit. Mauris ac elit id enim facilisis scelerisque. Nam nisl lorem, viverra at arcu a, elementum maximus turpis. Nunc eu efficitur magna. Ut efficitur elementum felis at ultricies. Vivamus nec quam eros. Sed id est sit amet nulla molestie convallis ac congue libero. Integer molestie leo arcu, quis aliquet tortor viverra id. Maecenas scelerisque eros a nibh gravida commodo quis vel neque.

Ut elementum interdum eros, vitae molestie arcu iaculis vitae. Maecenas tempus enim et finibus lobortis. Etiam dignissim metus sit amet odio euismod auctor. Maecenas sit amet viverra est. Sed tristique accumsan lectus, eget ornare ipsum ornare non. Mauris sed laoreet dui, varius consequat mauris. Aenean at lorem eget nisl pulvinar bibendum eu laoreet purus. Sed ornare molestie lacus, eu scelerisque sapien convallis ut. Cras faucibus aliquam neque eu mollis. Curabitur quam turpis, pretium vel eros sed, aliquam eleifend orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum urna lectus, posuere eu felis quis, vehicula sagittis massa. Nunc in est vehicula, ultrices leo nec, egestas erat. Nunc ut turpis vel arcu congue dictum.
</p> 

< Button 
        primary  
        onClick={handleClick} > 
            Open Modal!!
        </Button> 

        {ShowModal && modal}
   
    </div>
)

}

export default ModalPage;