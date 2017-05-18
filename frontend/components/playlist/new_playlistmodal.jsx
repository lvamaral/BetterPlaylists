// import React from 'react';
//
// class NewPlaylist extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//     componentDidMount() {
//       var modal = document.getElementById('myModal');
//       var btn = document.getElementById("myBtn");
//       var span = document.getElementsByClassName("close")[0];
//       btn.onclick = function() {
//           modal.style.display = "block";
//       }
//       span.onclick = function() {
//           modal.style.display = "none";
//       }
//       // When the user clicks anywhere outside of the modal, close it
//       window.onclick = function(event) {
//           if (event.target == modal) {
//               modal.style.display = "none";
//           }
//       }
//     }
//
//     render() {
//       return (
//         <div className="newplaylistdiv">
//           <div id="myModal" className="modal">
//             <div className="modal-content">
//               <span className="close">&times;</span>
//               <p>Some text in the Modal..</p>
//             </div>
//           </div>
//       </div>
//       )
//     }
//   }
//
//   export default NewPlaylist;
