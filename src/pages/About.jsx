import imageAbout from '../assets/imageAbout.png'

const About = () => {
    return ( 
        <div className="about">
            <div className="imageContainer"><img src={imageAbout} alt="image of a van camping" srcSet="" /></div>
            <div className="content">
                <h1>This is about</h1>
                <p>Lorem ipsum, dolor sitmagnam suscipit magni iste tenetur minus ullam fugiat, alias quisquam maxime earum molestias itaque obcaecati. Cum dolores tempore in ipsa!
                In possimus error ea blanditiis sint alias delectus! Doloribus cum nostrum laboriosam ipsa quibusdam nulla dolorum, odio iste veniam tenetur error unde, non harum velit repudiandae! Mollitia dignissimos obcaecati corporis?
                Aspernatur rerum reprehenderit, animi labore dolorem dolorum minus quas voluptate aperiam nostrum saepe quidem, quis laboriosam cupiditate sequi nobis necessitatibus accusamus sed! Totam voluptatibus eum nostrum sint obcaecati. Totam, velit.</p>
            </div>
        </div> );
}
 
export default About;