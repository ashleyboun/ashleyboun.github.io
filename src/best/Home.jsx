import { DecorativeHeader } from "../components/DecorativeHeader"
import TwoColumnLayout from "../components/TwoColumnLayout"
import { Projects } from "../components/Projects"
import { HomeLeftCol } from "../components/HomeLeftCol.jsx"
import { Contact } from "../components/Contact.jsx"

export const Home = () => {


    return <>
        <div style={{ height: "97vh", display: "flex", flexDirection: "column" }}>
            <DecorativeHeader 
                leftText={"ashley boun"}
                rightTopText={"contact"}
                rightBottomText={<Contact />}
            />
            <TwoColumnLayout 
                leftContent={<HomeLeftCol />}
                rightContent={<Projects />}
                addTopMargin={true}
            />
        </div>
    </>

}