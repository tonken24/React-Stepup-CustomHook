import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

// const user = {
//   id: 1,
//   name: "yourname",
//   email: "1213@aaa.com",
//   address: "ADDRESS"
// };
//以下からサンプルデータを使用する。
//https://jsonplaceholder.typicode.com/users

export default function App() {
  //カスタムフックを呼び出す。
  //エラーなどのフラグは他の処理で同じフックを呼び出しても書き変わらない。
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => {
    //カスタムフックの関数を呼び出す。
    getUsers();
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました。</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
      {/* <UserCard user={user} /> */}
    </div>
  );
}
