import CopyEmail from "./CopyableEmail";

export const Contact = () => {
    const linkedinLink = "https://www.linkedin.com/in/ashley-boun-230169208/"
    const email = "ashleeyvanh@gmail.com"
    
    return (
        <>
            <span>
                <a href={linkedinLink} target="_blank">linkedin</a> 
                {" / "} 
                <CopyEmail email={email} />
            </span>
        </>
    )
};