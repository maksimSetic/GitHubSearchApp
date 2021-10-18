import './App.css';

import { Card, Icon, Image } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

function App() {
  
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/example")
    .then(res => res.json())
    .then(data => {
      console.log(data);
        setData(data)
    })
  }, [])

  const setData = ({ name, login, followers, following, public_repos, avatar_url, location, bio}) =>  {
    setName(name)
    setUsername(login);
    setFollowers(followers)
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setLocation(location);
    setBio(bio);
  };

  const handleTrazenje = (e) => {
    setUserInput(e.target.value);
  };

  const handlePotvrdu = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
  }
  
  return (

    <div>
      <div className='navbar'>GitHub search app</div>
      <div className='search'>
        <Form onSubmit={handlePotvrdu}>
          <Form.Group>
            <Form.Input 
            placeholder='e.g. facebook'
            name='GitHub user' onChange={handleTrazenje}
          />
          <Form.Button content='GO!' />
          </Form.Group>
        </Form>
      </div>
      
      <div className="card">
      <Card>
    <Image src= {avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Header>{userName}</Card.Header>
      <Card.Header>{location}</Card.Header>
      <Card.Header>{bio}</Card.Header>
      <Card.Meta>
        <span className='date'></span>
      </Card.Meta>
      <Card.Description>
       {followers} Followers
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
      {repos} Repos
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
      {following} Following
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
      {Location} Location
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
      {bio} Bio
      </a>
    </Card.Content>
  </Card>
      </div>
    </div>
    
    
  );
}

export default App;
