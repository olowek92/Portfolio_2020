import React from 'react';

import { Main, Div, H1, Paragraph } from "./MainAbout.elements";

const MainAbout = () => {
    return ( 
        <>
            <Main>
                <Div>
                    <H1>o mnie</H1>
                    <Paragraph>Moja przygoda z programowaniem tak naprawdę rozpoczęła 
                    się w styczniu 2019 roku. Najpierw JavaScript później React następnie Redux.
                    Po drodze poznałem oczywiście mnóstwo innych rzeczy jak to w programowaniu bywa :D 
                    Staram się rozwijać każdego dnia i dawać z siebie wszystko.
                    Zapraszam do kontaktu ze mną :)
                    </Paragraph>
                </Div>
            </Main>
        </>
     );
}
 
export default MainAbout;