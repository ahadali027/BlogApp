import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, Hourglass, MessageSquare } from "lucide-react";

function Dashboard() {
  // 🔹 Blog Performance Data
  const data = {
    total_posts: "Total Blog Posts",
    total_posts_value: 35,
    published: "Published Articles",
    published_value: 28,
    drafts: "Drafts Pending",
    drafts_value: 7,
    comments: "Total Comments",
    comments_value: 124,
    page_views: 5420,
    notifications: 5,
    recent_activity: "New Comments & Likes",
  };

  return (
    <div className="p-10 bg-[#F0EFEC] h-[100vh]">
      <h1 className="text-3xl font-semibold mb-6">Blog Dashboard</h1>

      {/* 🔹 Blog Stats Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{data.total_posts}</p>
              <h2 className="text-3xl font-bold">{data.total_posts_value}</h2>
            </div>
            <FileText className="h-6 w-6 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{data.published}</p>
              <h2 className="text-3xl font-bold">{data.published_value}</h2>
            </div>
            <CheckCircle className="h-6 w-6 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{data.drafts}</p>
              <h2 className="text-3xl font-bold">{data.drafts_value}</h2>
            </div>
            <Hourglass className="h-6 w-6 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{data.comments}</p>
              <h2 className="text-3xl font-bold">{data.comments_value}</h2>
            </div>
            <MessageSquare className="h-6 w-6 text-muted-foreground" />
          </CardContent>
        </Card>
      </div>

      {/* 🔹 Page Views & Notifications */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Page Views</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] flex items-center justify-center text-muted-foreground">
            {data.page_views ? `${data.page_views} views` : "No data available"}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] flex items-center justify-center text-muted-foreground">
            {data.notifications ? `${data.notifications} new alerts` : "No notifications"}
          </CardContent>
        </Card>
      </div>

      {/* 🔹 Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>{data.recent_activity}</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          {data.comments_value > 0
            ? `You have ${data.comments_value} new comments on your blogs.`
            : "No new activity."}
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;
