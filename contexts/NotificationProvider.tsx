import React, { createContext, useContext, useState, useEffect } from 'react';
import { GroupedNotifications, Notification } from '@/types/notification';
import { isLastWeek, isToday, isYesterday } from '@/helpers/date';

interface NotificationContextType {
  groupedNotifications: GroupedNotifications[];
  isLoading: boolean;
  error: string | null;
  fetchNotifications: () => Promise<void>;
  markAsRead: (notificationId: string) => Promise<void>;
  deleteNotification: (notificationId: string) => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [groupedNotifications, setGroupedNotifications] = useState<GroupedNotifications[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const groupNotifications = (notifications: Notification[]): GroupedNotifications[] => {
    const groups: GroupedNotifications[] = [
      { title: "Today", data: [] },
      { title: "Yesterday", data: [] },
      { title: "Last Week", data: [] },
      { title: "Older", data: [] },
    ];

    notifications.forEach(notification => {
      if (isToday(notification.timestamp)) {
        groups[0].data.push(notification);
      } else if (isYesterday(notification.timestamp)) {
        groups[1].data.push(notification);
      } else if (isLastWeek(notification.timestamp)) {
        groups[2].data.push(notification);
      } else {
        groups[3].data.push(notification);
      }
    });

    return groups.filter(group => group.data.length > 0);
  };
  const fetchNotifications = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace this with your actual API call
      const mockNotifications: Notification[] = [
        {
          id: '1',
          type: 'order',
          message: 'Your order has been placed successfully. Delivery is between the 25th and 31st of December',
          timestamp: new Date('2025-03-09T23:30:00Z'), 
          productImage: require("@/assets/images/signeduser/products/bag.png"),
          deliveryWindow: {
            start: new Date('2025-12-25'),
            end: new Date('2025-12-31'),
          },
          isRead: false,
        },
        {
          id: '2',
          type: 'offer_accepted',
          message: "You accepted Thrift Shop's offer",
          timestamp: new Date('2025-03-08T23:55:00Z'),
          shopName: 'Thrift Shop',
          isRead: true,
        },
        {
          id: '3',
          type: 'new_offer',
          message: "Thrift Shop sent a new offer to you",
          timestamp: new Date('2025-03-07T23:55:00Z'),
          shopName: 'Thrift Shop',
          isRead: false,
        },
        {
          id: '4',
          type: 'delivery',
          message: "Your order has been delivered successfully",
          productImage: require("@/assets/images/signeduser/products/bag.png"),
          timestamp: new Date('2025-03-06T23:55:00Z'),
          canReview: true,
          hasReviewed: false,
          isRead: true,
        },
      ];

      setGroupedNotifications(groupNotifications(mockNotifications));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch notifications');
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      // Here you would normally make an API call to mark the notification as read
      // After successful API call, update the local state
      setGroupedNotifications(prevGroups =>
        prevGroups.map(group => ({
          ...group,
          data: group.data.map(notification =>
            notification.id === notificationId
              ? { ...notification, isRead: true }
              : notification
          ),
        }))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to mark notification as read');
    }
  };


  const deleteNotification = async (notificationId: string) => {
    try {
      // Implement your API call to delete notification
      // After successful API call, update the local state
      setGroupedNotifications(prevGroups =>
        prevGroups.map(group => ({
          ...group,
          data: group.data.filter(notification => notification.id !== notificationId),
        })).filter(group => group.data.length > 0)
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete notification');
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        groupedNotifications,
        isLoading,
        error,
        fetchNotifications,
        markAsRead,
        deleteNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};