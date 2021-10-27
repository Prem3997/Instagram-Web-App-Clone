import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { updateLoggedInUserFollowing, updateFollowedUserFollowers } from '../../services/firebase'
export default function SuggestedProfile({ suggestedProfileDocId, userId, username, profileId, loggedInUserDocId }) {
    const [followed, setFollowed] = useState(false)
    async function handleFollowUser() {
        setFollowed(true)

        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false)

        await updateFollowedUserFollowers(suggestedProfileDocId, userId, false)
    }

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img
                    className="rounded-full w-8 flex mr-3 mb-3"
                    src={`/images/avatars/${username}.jpg`}
                    alt={username}
                />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm mb-3">{username}</p>
                </Link>
            </div>
            <button
                className="text-xs font-bold text-blue-medium mb-3"
                type="button"
                onClick={handleFollowUser}
            >
                Follow
            </button>
        </div>
    ) : null
}

SuggestedProfile.propTypes = {
    suggestedProfileDocId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired
}
