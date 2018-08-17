import React from 'react';

import Navigation from './Navigation';
import Navigationdemo from './Navigationdemo';

class Layout extends React.Component{
    render(){
        return(
            <section className="page">
                {/*<Navigation />*/}
                <Navigationdemo />
                {/*<section>*/}
                    {/*{this.props.children}*/}
                {/*</section>*/}
            </section>
        );
    }
}
export default Layout;