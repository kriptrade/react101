function ProfileCard({title, handle, image, description}) {
    // 1 .. Version
    //  const title = props.title;
    // const handle = props.handle;

    // 2 .. Version
    // const { title, handle } = props;

    return (
        <div clnassName="card">
            <div clnassName="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda"/>
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">                
                    <p className="title is-4">Title is {title}</p>
                    <p className="subtitle is-6">Handle is {handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
           </div>
        </div>
    );
}

export default ProfileCard;