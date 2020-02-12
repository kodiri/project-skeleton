//hard-coded user base for front-end development
//to-be deleted later

import bill from '../../assets/profile pictures/Bill Gates.jpg';
import jeff from '../../assets/profile pictures/Jeff Besos.jpg';
import elon from '../../assets/profile pictures/Elon Musk.jpg';
import microsoft from '../../assets/cover pictures/microsoft.jpg';
import amazon from '../../assets/cover pictures/amazon.jpg';
import tesla from '../../assets/cover pictures/tesla.jpg';


export default function GetUser() {
    return [
        { userName: 'Bill Gates', profilePicture: bill, coverPicture: microsoft },
        { userName: 'Jeff Besos', profilePicture: jeff, coverPicture: amazon },
        { userName: 'Elon Musk', profilePicture: elon, coverPicture: tesla },
    ];
}
