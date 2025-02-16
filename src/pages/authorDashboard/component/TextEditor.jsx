import React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export function TextEditor() {
  const [post, setPost] = useState({ title: "", content: "" })

  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value })
  }

  const handleContentChange = (content) => {
    setPost({ ...post, content })
  }

  const handleSave = () => {
    console.log("Saving post:", post)
   
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  }

  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle>Create New Blog Post</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter your blog post title"
              value={post.title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <Label htmlFor="content">Content</Label>
            <ReactQuill
              theme="snow"
              value={post.content}
              onChange={handleContentChange}
              modules={modules}
              className="h-96 mb-12"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave}>Save Post</Button>
      </CardFooter>
    </Card>
  )
}

