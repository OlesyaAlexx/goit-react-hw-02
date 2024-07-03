//Імпортуємо файли з папки components та data в Арр.jsx
import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./components/Transaction/Transaction";
import transactions from "./data/transactions.json";

import "./App.css";

//Створюємо розмітку елементів
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
