import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactModal from 'react-modal';

const addVolunteer = () => {
    return(
        <div>
            <ReactModal isOpen={true} shouldCloseOnEsc={true}>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  name="email"/>
                </Form.Group>
                <Button id="btn" type="submit" >
                     Add Volunteer
                </Button>
             </Form>

            </ReactModal>
    
        </div>
    );
};
// class addVolunteer extends React.Component{
//     constructor (){
//       super();
//       this.state={
//         isOpen:false
//       }
//     }
//   render(){
//       return(
//           <div>
//               <button onClick={()=>{this.setState({isOpen:true});
//         }}> Open Modal </button>
//         <ReactModal
//           isOpen={this.state.isOpen}
//           //onAfterOpen={this.afterOpenModal}
//           //onRequestClose={this.closeModal}
//           //style={customStyles}
//           contentLabel="Example Modal"
//         >
 
//           <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
//           <button onClick={()=>{this.setState({isOpen:false});
//         }}> close </button>


//           <div>I am a modal</div>
//           <form>
//             <input />
//             <button>tab navigation</button>
//             <button>stays</button>
//             <button>inside</button>
//             <button>the modal</button>
//           </form>
//         </ReactModal>
//           </div>
//         )
//     }
// }
  
export default addVolunteer;