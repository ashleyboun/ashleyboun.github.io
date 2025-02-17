import ImageCarousel from "./ImageCarousel"

export const ProjectPageLeft = ({ instructor, location, course, date, teamMembers, description, imageList, onImageClick }) => {
    const headerStyle = {
        lineHeight: 0,
        marginTop: 0,
        fontFamily: "Urbanist",
    }
    
    return (
        <>
            {course &&<strong><p style={headerStyle}>{location}</p></strong>} 
            {course && <p style={{marginBottom: 0}}>{course} / {date}</p>}
            {course && <br/>}
            {instructor && <strong><p style={headerStyle}>instructor</p></strong>}
            {instructor && <p style={{marginBottom: 0}}>{instructor}</p>}
            {instructor && <br/>}
            {teamMembers && <strong><p style={headerStyle}>team</p></strong>}
            {teamMembers && <p style={{marginBottom: 0}}>{teamMembers.join(", ")}</p>}
            {teamMembers && <br/>}
            {description && <p style={{marginBottom: 0}}>{description}</p>}
            {description && <br/>}
            {imageList && <ImageCarousel images={imageList} onImageClick={onImageClick}/>}
        </>
    )
}