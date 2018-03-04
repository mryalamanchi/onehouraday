import React from 'react';
import Header from './Header';
import WhatWeDo from './WhatWeDo';

export default class OneHourADayApp extends React.Component{
    render(){
        const title="One hour a Day";
        const subtitle="Spend one hour and help a social cause";
        return(
            <div>
                <Header
                     title={title}
                     subtitle={subtitle}
                 />
                <WhatWeDo
                    title={title}
                    subtitle={subtitle}
                />
            </div>
        );
    }
}

