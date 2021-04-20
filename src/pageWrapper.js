import Sidebar from "./sidebar/sidebar";
import Content from "./contentWrapper";
const wrapper = () => {
    return (
        <div id="wrapper">
            <Sidebar />
            <Content />
        </div>
    );
}

export default wrapper;