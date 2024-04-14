import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:5000/api/activities");
      console.log((data));
      setActivities(data);
    })();
  }, []);

  return (
    <div>
      <Header as={'h2'} icon={'users'} content='Reactivities' />
      <List>
        {
          activities.map(
            (activity: any) => <List.Item key={activity.id}>{activity.title}</List.Item>
          )
        }
      </List>
    </div>
  )
}

export default App
