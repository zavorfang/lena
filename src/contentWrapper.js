import Footer from './footer';
import Nav from './nav';

const contentwrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">  
                <Nav />
                <div className="container-fluid">
                    <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default contentwrapper;