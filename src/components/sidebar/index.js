import React from 'react'
import useUser from '../../hooks/use-user'
import User from './user'
import Suggestions from './suggestions'

export default function Sidebar() {
    // const {
    //     user: { fullName, username, userId, following, docId }
    // } = useUser()
    // var username, fullName, userId, following, docId = ''
    const {
        user
    } = useUser()

    const username = user[0]?.username
    const fullName = user[0]?.fullName
    const userId = user[0]?.userId
    const following = user[0]?.following
    const docId = user[0]?.docId

    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
        </div>
    )
}
