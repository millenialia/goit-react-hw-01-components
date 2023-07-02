import { Profile } from './Profile';
import { FriendList } from './FriendList';
import { Statistics } from './Statistics';
import { TransactionHistory } from './TransactionHistory';

import user from '../json/user.json';
import friends from '../json/friends.json';
import data from '../json/data.json';
import transactions from '../json/transactions.json'

import '../index.css'

export const App = () => {
  return (
    <div className='container'>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
