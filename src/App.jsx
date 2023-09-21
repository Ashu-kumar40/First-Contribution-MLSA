import { useEffect, useState } from 'react';
import './App.css'
import data from './assets/data'
import ProfileCard from './Components/ProfileCard'


function App() {
  const [info, setInfo] = useState([]);
  const [contributor, setContributor] = useState("Ashu-kumar40")

  useEffect(() => {
    const getData = () => {
      fetch(`https://api.github.com/users/${contributor}`)
        .then((res) => res.json())
        .then((result) => setInfo(result));
    };
    getData();
    console.log(info)
  }, [contributor])

  return (
    <>
    <h1>First Contribution</h1>
      <div className="app-container">
        {
          data.data?.map((user) => (
            <>
              {setContributor(user.username)}
              <ProfileCard username={info.login} name={info.name} imgURL={info.avatar_url} />
            </>

          ))
        }
      </div>
    </>
  )
}

export default App
