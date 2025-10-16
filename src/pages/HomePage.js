// import React from "react";
// import Ticker from "../components/Ticker";
// import Slider from "../components/Slider";
// import EventsList from "../components/EventsList";

// function HomePage() {
//     return (
//         <div>
//             <Ticker />
//             <style>
//                 {`@keyframes fadeInDown {
//                     from { opacity: 0; transform: translateY(-30px); }
//                     to { opacity: 1; transform: translateY(0); }}`}
//             </style>
//             <h1 style={{textAlign: 'center', animation: 'fadeInDown 1s ease-in-out'}}>Ближайшие мероприятия</h1>
//             <Slider />
//             <EventsList />
//         </div>
//     );
// }
// export default HomePage;

import React from "react";
import Ticker from "../components/Ticker";
import Slider from "../components/Slider";

function HomePage() {
    return (
        <div>
            <Ticker />
            <h1 style={{textAlign: 'center'}}>Главная страница</h1>
            <Slider />
        </div>
    );
}
export default HomePage;