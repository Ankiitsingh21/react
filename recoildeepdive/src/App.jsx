import { RecoilRoot, useRecoilValue } from "recoil";
import { Networkatom, Jobsatom, Notificationatom, Messagesatom, TotalNotificationCount } from "./atom";

function NavigationBar() {
  const networkCount = useRecoilValue(Networkatom);
  const jobsCount = useRecoilValue(Jobsatom);
  const notificationCount = useRecoilValue(Notificationatom);
  const messagesCount = useRecoilValue(Messagesatom);
  const totalNotificationCounter = useRecoilValue(TotalNotificationCount);

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkCount > 100 ? "99+" : networkCount})</button>
      <button>Notifications ({notificationCount > 100 ? "99+" : notificationCount})</button>
      <button>Jobs ({jobsCount > 100 ? "99+" : jobsCount})</button>
      <button>Messages ({messagesCount > 100 ? "99+" : messagesCount})</button>
      <button>ME</button>

      <div>{totalNotificationCounter}</div>
    </>
  );
}

function App() {
  return (
    <RecoilRoot>
      <NavigationBar />
    </RecoilRoot>
  );
}

export default App;
