import {useRouter} from 'next/router'

function Player(){
    const router = useRouter()
    const {pid} = router.query

    return (
        <p>Player {pid}</p>
    )
}

export default Player