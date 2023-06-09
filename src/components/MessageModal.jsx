import React, { useState } from 'react'
import { auth, db } from './Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { child, get, ref, set } from 'firebase/database'
import ToastTop from './ToastTop'

const MessageModal = ({closeMessageModal, MessageModal, searchTarget}) => {
    let [msgInput, setMsgInput] = useState(''); 
    let [sentMsgToast, setSentMsgToast] = useState(false); 

    let sendMsg = () => {

        auth.onAuthStateChanged(cred => {
            let uid = cred.uid
            let dbRef = ref(db); 
            let searchTarget = localStorage.getItem('searchTarget'); 
            get(child(dbRef, `users/${uid}/`))
                .then(userInfo => {
                    /* grab the users userName */
                    let userName = userInfo.val().userName; 
                    get(child(dbRef, `user-index/${searchTarget}/`))
                        .then(send_target => {
                            let send_targetUid = send_target.val().uid; 
                            /* append the message to the recipients db  */
                            set(ref(db, `users/${send_targetUid}/chat_ids/${userName}/`), {
                                firstMsg: msgInput, 
                                recipient: searchTarget,
                                sentBy: userName, 
                                created: Date()
                            }), 
                            /* set the message to the senders db */
                            set(ref(db, `users/${uid}/chats/${searchTarget}/`), {
                                firstMsg: msgInput, 
                                recipient: searchTarget, 
                                sentBy: userName,
                                created: Date(),
                            })
                                .then(() => {
                                    setSentMsgToast(true); 
                                    setTimeout(() => {
                                        setSentMsgToast(false); 
                                    }, 1500)
                                })
                        })
                })
        }) 
    }
    
    
  return (
    <>
        <label htmlFor="messageModal" className="btn btn-ghost">Send Message</label>
        <i className='btn btn-ghost'onClick={() => { closeMessageModal() }}>x</i>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="messageModal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative flex flex-col gap-4">
                <label htmlFor="messageModal" className="btn btn-ghost absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Send {searchTarget} A Message</h3>
                <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Your Message Here" className="input input-bordered" onInput={(e) => { setMsgInput(e.target.value); } } />
                    <button className="btn btn-primary" onClick={sendMsg}>
                        Send
                    </button>
                </div>
            </div>

            </div>
            </div>
            {sentMsgToast ? <SentMessageToast searchTarget={searchTarget}/> : null}
    </>
  )
}

export default MessageModal