import Announcement from "../includes/Announcement";
import Footer from "../includes/Footer";
import Header from "../includes/Header";

export default function LayoutMaster({ children }) {
    return (
        <>
            <div className="body-wrapper">
                <Announcement/>
                <Header/>
                <main id="MainContent" className="content-for-layout">
                    { children }
                </main>
                <Footer/>
            </div>
        </>
    );
}