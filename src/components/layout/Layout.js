import React from 'react';
import Navigation from './Navigation';


class Layout extends React.Component{
    render(){
        return(
            <section className="page">
                <Navigation />
                {/*<section>*/}
                    {/*{this.props.children}*/}
                {/*</section>*/}
            </section>
        );
    }
}
export default Layout;