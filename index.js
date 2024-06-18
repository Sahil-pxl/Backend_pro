require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const github = {
    
        "login": "Sahil-pxl",
        "id": 115916156,
        "node_id": "U_kgDOBui9fA",
        "avatar_url": "https://avatars.githubusercontent.com/u/115916156?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Sahil-pxl",
        "html_url": "https://github.com/Sahil-pxl",
        "followers_url": "https://api.github.com/users/Sahil-pxl/followers",
        "following_url": "https://api.github.com/users/Sahil-pxl/following{/other_user}",
        "gists_url": "https://api.github.com/users/Sahil-pxl/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Sahil-pxl/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Sahil-pxl/subscriptions",
        "organizations_url": "https://api.github.com/users/Sahil-pxl/orgs",
        "repos_url": "https://api.github.com/users/Sahil-pxl/repos",
        "events_url": "https://api.github.com/users/Sahil-pxl/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Sahil-pxl/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Sahil Prasad",
        "company": null,
        "blog": "",
        "location": "Bangalore",
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 13,
        "public_gists": 0,
        "followers": 4,
        "following": 6,
        "created_at": "2022-10-16T06:25:33Z",
        "updated_at": "2024-06-18T17:05:31Z"
      
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) =>{
    res.send('sahilprasad')
})
app.get('/login',(req,res)=>{
res.send('<h1> please login at this page</h1>')
})
app.get('/chai',(req,res)=>{
    res.send("<h2> Wanna have some tea baby</h2>")
})
app.get('/github',(req,res)=>{
    res.json(github)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})