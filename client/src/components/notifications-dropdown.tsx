import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  type: "recommendation" | "new_release" | "rating" | "system";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function NotificationsDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "recommendation",
      title: "New recommendation for you!",
      message: "Based on your love for sci-fi, we think you'll enjoy 'Dune'",
      time: "2 hours ago",
      read: false
    },
    {
      id: "2",
      type: "new_release",
      title: "New movie added",
      message: "The Matrix Resurrections is now available",
      time: "1 day ago",
      read: false
    },
    {
      id: "3",
      type: "rating",
      title: "Rate your recent watch",
      message: "How did you like Inception? Your feedback helps our AI learn!",
      time: "2 days ago",
      read: true
    },
    {
      id: "4",
      type: "system",
      title: "Your taste profile updated",
      message: "We've refined your recommendations based on recent ratings",
      time: "3 days ago",
      read: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "recommendation": return "🎯";
      case "new_release": return "🆕";
      case "rating": return "⭐";
      case "system": return "⚙️";
      default: return "🔔";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative p-2">
          <span className="text-xl">🔔</span>
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 bg-primary text-white text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 bg-gray-800 border-gray-700">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead}
              className="text-xs text-primary hover:text-red-400"
            >
              Mark all read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-700" />
        
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-400">
            <div className="text-2xl mb-2">🔔</div>
            <p className="text-sm">No notifications yet</p>
          </div>
        ) : (
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <DropdownMenuItem 
                key={notification.id}
                className={`p-3 cursor-pointer ${
                  !notification.read ? "bg-gray-700/50" : ""
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start space-x-3 w-full">
                  <span className="text-lg flex-shrink-0">
                    {getNotificationIcon(notification.type)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-medium ${
                        !notification.read ? "text-white" : "text-gray-300"
                      }`}>
                        {notification.title}
                      </p>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        )}
        
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem className="text-center text-primary hover:text-red-400 cursor-pointer">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}