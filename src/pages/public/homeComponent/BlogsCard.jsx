import { useState } from "react"

import { motion } from "framer-motion"
import { Bookmark, Share2, Clock, Eye, MessageSquare, Heart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"



export function BlogCard({ post }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
 
  }

  const handleLike = () => {
    setLikes(likes + 1)

  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: `/blog/${post.id}`,
        })
        .catch(console.error)
    } else {
      // Fallback for browsers that don't support Web Share API
      console.log("Web Share API not supported")
      // You could implement a custom share dialog here
    }
  }

  return (
    <TooltipProvider className="">
      <Card className="overflow-hidden p-3 transition-shadow hover:shadow-lg">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
        </motion.div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary">{post.category}</Badge>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleBookmark}>
                  <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-primary" : ""}`} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isBookmarked ? "Remove bookmark" : "Bookmark this post"}</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center space-x-4 mb-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.publishDate}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 py-3 bg-secondary/10 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-xs">{post.readTime} min</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Estimated read time</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Eye className="h-4 w-4 mr-1" />
                  <span className="text-xs">{post.views}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Views</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span className="text-xs">{post.comments}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Comments</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleLike}>
                  <Heart className={`h-4 w-4 ${likes > post.likes ? "fill-red-500 text-red-500" : ""}`} />
                  <span className="ml-1 text-xs">{likes}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Like this post</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share this post</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardFooter>
      </Card>
    </TooltipProvider>
  )
}

export function BlogCardGrid() {
  const examplePosts = [
    {
      id: "1",
      title: "The Future of Artificial Intelligence in Web Development",
      excerpt:
        "Explore how AI is revolutionizing the way we build and interact with websites, from personalized user experiences to automated coding assistance.",
      author: {
        name: "Alice Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Technology",
      readTime: 7,
      publishDate: "May 15, 2023",
      image: "/placeholder.svg?height=200&width=400",
      views: 1520,
      comments: 23,
      likes: 89,
    },
    {
      id: "2",
      title: "Mastering React Hooks: A Comprehensive Guide",
      excerpt:
        "Dive deep into React Hooks and learn how to write more efficient and cleaner functional components. This guide covers everything from useState to custom hooks.",
      author: {
        name: "Bob Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Programming",
      readTime: 10,
      publishDate: "June 2, 2023",
      image: "/placeholder.svg?height=200&width=400",
      views: 2150,
      comments: 45,
      likes: 132,
    },
    {
      id: "3",
      title: "The Rise of Jamstack: Building Faster, More Secure Websites",
      excerpt:
        "Discover why Jamstack architecture is gaining popularity among developers and how it can improve your website's performance, security, and scalability.",
      author: {
        name: "Carol Davis",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Web Development",
      readTime: 8,
      publishDate: "June 10, 2023",
      image: "/placeholder.svg?height=200&width=400",
      views: 1820,
      comments: 37,
      likes: 105,
    },
    {
        id: "3",
        title: "The Rise of Jamstack: Building Faster, More Secure Websites",
        excerpt:
          "Discover why Jamstack architecture is gaining popularity among developers and how it can improve your website's performance, security, and scalability.",
        author: {
          name: "Carol Davis",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        category: "Web Development",
        readTime: 8,
        publishDate: "June 10, 2023",
        image: "/placeholder.svg?height=200&width=400",
        views: 1820,
        comments: 37,
        likes: 105,
      },
      {
        id: "3",
        title: "The Rise of Jamstack: Building Faster, More Secure Websites",
        excerpt:
          "Discover why Jamstack architecture is gaining popularity among developers and how it can improve your website's performance, security, and scalability.",
        author: {
          name: "Carol Davis",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        category: "Web Development",
        readTime: 8,
        publishDate: "June 10, 2023",
        image: "/placeholder.svg?height=200&width=400",
        views: 1820,
        comments: 37,
        likes: 105,
      },
      {
        id: "3",
        title: "The Rise of Jamstack: Building Faster, More Secure Websites",
        excerpt:
          "Discover why Jamstack architecture is gaining popularity among developers and how it can improve your website's performance, security, and scalability.",
        author: {
          name: "Carol Davis",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        category: "Web Development",
        readTime: 8,
        publishDate: "June 10, 2023",
        image: "/placeholder.svg?height=200&width=400",
        views: 1820,
        comments: 37,
        likes: 105,
      },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {examplePosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}

