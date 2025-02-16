"use client"

import { useState, useEffect } from "react"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MoreHorizontal, Eye, Edit, Trash, ExternalLink, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"



const initialBlogs = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    content: "Full content here...",
    author: "John Doe",
    createdAt: "2023-06-01",
    totalViews: 1200,
    totalComments: 15,
    totalLikes: 45,
    status: "published",
    isPublic: true,
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    excerpt: "Discover the power of utility-first CSS with Tailwind",
    content: "Full content here...",
    author: "Jane Smith",
    createdAt: "2023-06-15",
    totalViews: 800,
    totalComments: 8,
    totalLikes: 32,
    status: "draft",
    isPublic: false,
  },
  {
    id: "3",
    title: "React Hooks Explained",
    excerpt: "Deep dive into React Hooks and how they can simplify your code",
    content: "Full content here...",
    author: "Bob Johnson",
    createdAt: "2023-07-01",
    totalViews: 2500,
    totalComments: 25,
    totalLikes: 78,
    status: "published",
    isPublic: true,
  },
]

// Add more mock data to demonstrate pagination
for (let i = 4; i <= 20; i++) {
  initialBlogs.push({
    id: i.toString(),
    title: `Blog Post ${i}`,
    excerpt: `This is a summary of blog post ${i}`,
    content: `Full content for blog post ${i}...`,
    author: `Author ${i}`,
    createdAt: `2023-07-${i.toString().padStart(2, "0")}`,
    totalViews: Math.floor(Math.random() * 5000),
    totalComments: Math.floor(Math.random() * 50),
    totalLikes: Math.floor(Math.random() * 100),
    status: ["published", "draft", "archived"][Math.floor(Math.random() * 3)] ,
    isPublic: Math.random() > 0.5,
  })
}

export default function BlogManagement() {
  const [blogs, setBlogs] = useState(initialBlogs)
  const [filteredBlogs, setFilteredBlogs] = useState(initialBlogs)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 10

  useEffect(() => {
    const results = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredBlogs(results)
    setCurrentPage(1)
  }, [searchTerm, blogs])

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id))
  }

  const handleTogglePublic = (id) => {
    setBlogs(blogs.map((blog) => (blog.id === id ? { ...blog, isPublic: !blog.isPublic } : blog)))
  }

  const handleView = (blog) => {
    setSelectedBlog(blog)
    setIsViewDialogOpen(true)
  }

  const handleEdit = (blog) => {
    setSelectedBlog(blog)
    setIsEditDialogOpen(true)
  }

  const handleUpdate = (updatedBlog) => {
    setBlogs(blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)))
    setIsEditDialogOpen(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="p-10 h-full bg-[#F0EFEC]">
      <h1 className="text-3xl font-bold mb-6">Blog Management</h1>

     
      <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-white"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <Table className="bg-white ">
        <TableCaption>A list of your blogs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Likes</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Public</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentBlogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell className="font-medium">
                <Link href={`/blog/${blog.id}`} className="text-blue-600 hover:underline flex items-center">
                  {blog.title}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </TableCell>
              <TableCell>{blog.author}</TableCell>
              <TableCell>{blog.createdAt}</TableCell>
              <TableCell>{blog.totalViews.toLocaleString()}</TableCell>
              <TableCell>{blog.totalComments.toLocaleString()}</TableCell>
              <TableCell>{blog.totalLikes.toLocaleString()}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(blog.status)}>{blog.status}</Badge>
              </TableCell>
              <TableCell>
                <Switch checked={blog.isPublic} onCheckedChange={() => handleTogglePublic(blog.id)} />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => handleView(blog)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEdit(blog)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleDelete(blog.id)}>
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            onClick={() => paginate(i + 1)}
            variant={currentPage === i + 1 ? "default" : "outline"}
            className="mx-1"
          >
            {i + 1}
          </Button>
        ))}
      </div>

      {/* View and Edit Dialogs */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedBlog?.title}</DialogTitle>
            <DialogDescription>
              By {selectedBlog?.author} on {selectedBlog?.createdAt}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h3 className="font-semibold">Excerpt:</h3>
            <p>{selectedBlog?.excerpt}</p>
            <h3 className="font-semibold mt-4">Content:</h3>
            <p>{selectedBlog?.content}</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Blog Post</DialogTitle>
          </DialogHeader>
          {selectedBlog && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const updatedBlog = {
                  ...selectedBlog,
                  title: formData.get("title") ,
                  excerpt: formData.get("excerpt") ,
                  content: formData.get("content") ,
                }
                handleUpdate(updatedBlog)
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input id="title" name="title" defaultValue={selectedBlog.title} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="excerpt" className="text-right">
                    Excerpt
                  </Label>
                  <Textarea id="excerpt" name="excerpt" defaultValue={selectedBlog.excerpt} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="content" className="text-right">
                    Content
                  </Label>
                  <Textarea id="content" name="content" defaultValue={selectedBlog.content} className="col-span-3" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit">Save changes</Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

