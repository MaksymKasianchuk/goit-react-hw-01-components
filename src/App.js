import Profile from './social-profile/SocialProfile';
import Statistics from './statistics/Statistics';
import FriendsList from './friend-list/FriendsList';
import TransactionHistory from './transaction-history/TransactionHistory';
import user from './social-profile/user.json';
import statisticalData from './statistics/statistics-data.json';
import friends from './friend-list/friends.json';
import transactions from './transaction-history/transactions.json';

function App(){
    return (
        <div className="App">
            <Profile 
            avatarUrl = {user.avatar}
            name={user.name}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
            />
            <Statistics title = "Uploads stats" stats = {statisticalData}/>
            <Statistics stats={statisticalData} />
            <FriendsList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
}
export default App;