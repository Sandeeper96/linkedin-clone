import { Avatar } from '@material-ui/core'
import { Comment, MoreVert, Send, Share, ThumbUpAlt } from '@material-ui/icons'
import React, { forwardRef } from 'react'
import './Post.css'

const Post = forwardRef(({name, description, message, photoURL}, ref) => {
    return (
        <div className='posts' ref={ref}>
            <div className="post__header">
                <div className="post__headerLeft">
                    <Avatar src={photoURL} />
                    <div className="post_profile_details">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <MoreVert />
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__footer">
                <div className="post__footer__options">
                    <ThumbUpAlt />
                    <span>Like</span>
                </div>

                <div className="post__footer__options">
                    <Comment />
                    <span>Comment</span>
                </div>

                <div className="post__footer__options">
                    <Share />
                    <span>Share</span>
                </div>

                <div className="post__footer__options">
                    <Send />
                    <span>Send</span>
                </div>
            </div>
        </div>
    )})

export default Post
