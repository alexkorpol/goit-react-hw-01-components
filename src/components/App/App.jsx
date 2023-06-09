import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions  from '../../data/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { TaskNumber } from 'components/Profile/TaskNumber.styled';
import { FriendList } from 'components/FriendList/FriendList';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
      <TaskNumber> Task 1  </TaskNumber>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <TaskNumber> Task 2  </TaskNumber>
      <Statistics
      title="Upload stats"
      stats={data}
      />
      <TaskNumber> Task 3  </TaskNumber>
      <FriendList
        friends={friends}
      />
      <TaskNumber> Task 4  </TaskNumber>
      <TransactionHistory
        items={transactions}
      />
    </>
    )
}



export default App;


