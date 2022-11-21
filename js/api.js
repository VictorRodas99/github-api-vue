const api = 'https://api.github.com/users'

const getParsedDate = givenDate => {
    const date = new Date(givenDate)
    const day = date.getDay() + 1
    const monthYear = date.toLocaleString('en-us', { month: 'short', year: 'numeric' })

    return `${day} ${monthYear}`
}

const getDataAPI = async (user) => {
    const response = await fetch(`${api}/${user}`)

    if(!response.ok) return

    const {
        avatar_url, bio, created_at,
        followers, following, html_url,
        location, public_repos, login,
        name, twitter_username

    } = await response.json()

    
    const date = getParsedDate(created_at)


    return {
        avatar_url, bio, date,
        followers, following, html_url,
        location, public_repos, login,
        name, twitter_username

    }
}