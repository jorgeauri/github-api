import React from 'react';
import Layout from './components/layout';

function App() {
  return (
    <main>
      <Layout>
          <div>
            <img source="https://avatars.githubusercontent.com/u/46933512?v=4" 
            alt="avatar of user"
            />
            <h1>User teste</h1>
            <h3>Username: </h3>
            <span>teste</span>
            <div>
              <div>
                <h4>Followers</h4>
               <span>5</span>
              </div>
              <div>
                <h4>Starreds</h4>
               <span>5</span>
              </div>
              <div>
                <h4>Followings</h4>
               <span>5</span>
              </div>
            </div>
          </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
