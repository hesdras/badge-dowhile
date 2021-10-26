onload = () => {
    // let myName = document.querySelector('#userName')
    // let myBio = document.querySelector('#bio')

    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2001, 9, 22)
    const secondDate = new Date()

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))

    me = {
        specie: 'Human',
        planet: 'Earth',
        age: diffDays,
        socialMedia: {
            github: 'hesdras',
            linkedin: 'hesdrasferreira',
            instagram: 'hesdrasferreira',
            facebook: 'hesdrasferreira',
            twitter: 'hesdrasferreira'
        }
    }

    // Don't need to user a variable, "querySelector" ou "getElementById" because JS automatically recognizes IDs as default
    userName.innerText = me.name
    bio.innerHTML = `${me.specie}. Born on ${me.planet}.<br>Alive for <strong>${me.age} days</strong> now.`

    // Get GitHub data
    function getGitHubData() {
        const url = `https://api.github.com/users/${me.socialMedia.github}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                userName.innerText = data.name
                userAvatarImg.src = data.avatar_url
                gitHubLink.href = data.html_url
                gitHubUserName.textContent = data.login
                document.title = `${data.name} - DoWhile 2021`
            })
    }
    getGitHubData()
}
