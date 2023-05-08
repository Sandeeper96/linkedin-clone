import { Avatar } from '@material-ui/core'
import { Assignment, Photo, Today, YouTube } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Feed.css';
import Post from '../Post/Post';
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {

    const user = useSelector(selectUser)

    const [input, setInput] = useState();
    const [posts, setPosts] = useState([]);

    const submitPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.name,
            description: user.description,
            message: input,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    console.log(posts);
    return (
        <div className='feed'>
            <div className="feed__input">
                <div className="feed__form">
                    <Avatar src={user.photoURL} />
                    <form onSubmit={submitPost}>
                        <input type="text" placeholder='Start a post' value={input} onChange={e => setInput(e.target.value)} />
                        <input type="submit" />
                    </form>
                </div>

                <div className="feed__options">
                    <div className="options">
                        <Photo style={{ color: "#70b5f9" }} />
                        <span>Photo</span>
                    </div>

                    <div className="options">
                        <YouTube style={{ color: "#7fc15e" }} />
                        <span>Video</span>
                    </div>

                    <div className="options">
                        <Today style={{ color: "#e7a33e" }} />
                        <span>Events</span>
                    </div>

                    <div className="options">
                        <Assignment style={{ color: "#fc9295" }} />
                        <span>Write Article</span>
                    </div>
                </div>
            </div>
            <FlipMove>
                {
                    posts.map(({ id, data: { name, description, message, photoURL } }) => {
                        return <Post key={id} name={name} description={description} message={message} photoURL={photoURL} />
                    })
                }
            </FlipMove>
            {/* <Post name="Shraddha Tiwari" description="I love @Sandeeper96" message="I love Sandeep very much..." photoURL="https://media.licdn.com/dms/image/D4D03AQEush98CevWmQ/profile-displayphoto-shrink_200_200/0/1665484153723?e=1688601600&v=beta&t=_-aghdi_EI0slP7N0-sBFBBX8rS-9ljvXjE4veSk-8o" />
            <Post name="Sandeep Kumar" description="I love @Shraddha" message="I love Shraddha very much..." photoURL="https://media.licdn.com/dms/image/D4D35AQG7JiapKbjPWQ/profile-framedphoto-shrink_200_200/0/1677138207425?e=1683666000&v=beta&t=ZZ6thcLlAy0RDtiKr-DQny2Gvx3N3CHhrN6zH5f4Qag" />
            <Post name="Shraddha Tiwari" description="I love @Sandeeper96" message="I love Sandeep very much..." photoURL="https://media.licdn.com/dms/image/D4D03AQEush98CevWmQ/profile-displayphoto-shrink_200_200/0/1665484153723?e=1688601600&v=beta&t=_-aghdi_EI0slP7N0-sBFBBX8rS-9ljvXjE4veSk-8o" />
            <Post name="Sandeep Kumar" description="I love @Shraddha" message="I love Shraddha very much..." photoURL="https://media.licdn.com/dms/image/D4D35AQG7JiapKbjPWQ/profile-framedphoto-shrink_200_200/0/1677138207425?e=1683666000&v=beta&t=ZZ6thcLlAy0RDtiKr-DQny2Gvx3N3CHhrN6zH5f4Qag" />
            <Post name="Shraddha Tiwari" description="I love @Sandeeper96" message="I love Sandeep very much..." photoURL="https://media.licdn.com/dms/image/D4D03AQEush98CevWmQ/profile-displayphoto-shrink_200_200/0/1665484153723?e=1688601600&v=beta&t=_-aghdi_EI0slP7N0-sBFBBX8rS-9ljvXjE4veSk-8o" />
            <Post name="Sandeep Kumar" description="I love @Shraddha" message="I love Shraddha very much..." photoURL="https://media.licdn.com/dms/image/D4D35AQG7JiapKbjPWQ/profile-framedphoto-shrink_200_200/0/1677138207425?e=1683666000&v=beta&t=ZZ6thcLlAy0RDtiKr-DQny2Gvx3N3CHhrN6zH5f4Qag" />
            <Post name="Shraddha Tiwari" description="I love @Sandeeper96" message="I love Sandeep very much..." photoURL="https://media.licdn.com/dms/image/D4D03AQEush98CevWmQ/profile-displayphoto-shrink_200_200/0/1665484153723?e=1688601600&v=beta&t=_-aghdi_EI0slP7N0-sBFBBX8rS-9ljvXjE4veSk-8o" />
            <Post name="Sandeep Kumar" description="I love @Shraddha" message="I love Shraddha very much..." photoURL="https://media.licdn.com/dms/image/D4D35AQG7JiapKbjPWQ/profile-framedphoto-shrink_200_200/0/1677138207425?e=1683666000&v=beta&t=ZZ6thcLlAy0RDtiKr-DQny2Gvx3N3CHhrN6zH5f4Qag" /> */}
        </div>
    )
}
export default Feed
