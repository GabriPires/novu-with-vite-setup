import {
  useNotifications,
  useSocket,
  useUnseenCount,
} from '@novu/notification-center';
import { useEffect } from 'react';

export const App = () => {
  const { unseenCount } = useUnseenCount();

  const { notifications, fetching, refetch } = useNotifications();
  const { socket } = useSocket();

  useEffect(() => {
    console.log('fetching', fetching);
  }, [fetching]);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('Socket connected');
      });

      socket.on('unseen_count_changed', (data) => {
        console.log(data.unseenCount);
        data.unseenCount > unseenCount && refetch();
      });
    }
  }, [socket]);

  return (
    <>
      <h1>Novu test</h1>
      <p>Unread {unseenCount}</p>
      <button onClick={() => refetch()}>Buscar</button>
      {fetching && <p>Fetching notifications...</p>}
      {notifications.map((notification, index) => (
        <div key={index}>
          <p>{notification.content as string}</p>
        </div>
      ))}
    </>
  );
};
