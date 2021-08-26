import React from 'react';

/**
 * Funtional React Component for Congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is null)
 */

export default (props) => {
 if (props.success) {
   return (
     <div data-test="component-congrats">
       <span data-test="congrats-message">
         Congratulations! You guessed the world! 
       </span>
     </div>
   )
 } else {
   return (
     <div data-test="component-congrats" />
   )
 }
}