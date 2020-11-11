import React from 'react';

import { Main, Div, Footer, Paragraph } from "./MainProjects.elements";
import QuestionsApp from '../../components/ReduxViews/QuestionsApp';

const MainProjects = () => {
    return ( 
        <>
            <Main>
                <Div>
                    <QuestionsApp/>
                </Div>
                <Footer>
                    <Paragraph>Mini notatnik który został stworzony podczas nauki ,,REDUX'' na podstawie dokumentacji. Nic zwalającego z nóg ale od czegoś trzeba zacząć :D 
                    </Paragraph>
                </Footer>
            </Main>
        </>
     );
}
 
export default MainProjects;