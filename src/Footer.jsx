import { useState } from "react";

function Footer() {
/* let [array, setArray]=useState([]);
console.log(array);
setArray([1,2,3])
let year =2024;
console.log(array); */

    return (
        <footer>
            <span>&copy; { new Date().getFullYear() } Copy Rights @ K.Santhiveerapandi</span>
        </footer>
    );
}

export default Footer