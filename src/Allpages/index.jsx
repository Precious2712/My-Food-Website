// import Modal from "@/modal";
import AnotherPage from "./AnotherPage";
import FooterPage from "./footer";
import HeroReact from "./navbar";
import Restaurants from "./sample";
import SectionPage from "./section";

const AllUnitPages = () => {
    return (
        <div>
            {/* <Modal /> */}

            <HeroReact />

            <SectionPage />

            <Restaurants />

            <AnotherPage />

            <FooterPage />

        </div>
    )
};

export default AllUnitPages