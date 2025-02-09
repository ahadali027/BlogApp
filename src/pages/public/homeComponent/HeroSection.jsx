import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const trendingTopics = [
  { name: "Technology", icon: "💻" },
  { name: "Travel", icon: "✈️" },
  { name: "Food", icon: "🍔" },
  { name: "Lifestyle", icon: "🌿" },
];

const featuredPosts = [
  {
    title: "The Future of AI in Everyday Life",
    category: "Technology",
    readTime: "5 min read",
  },
  {
    title: "Hidden Gems: Unexplored Travel Destinations",
    category: "Travel",
    readTime: "7 min read",
  },
  {
    title: "Mastering the Art of Sourdough Bread",
    category: "Food",
    readTime: "6 min read",
  },
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopicIndex(
        (prevIndex) => (prevIndex + 1) % trendingTopics.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="bg-blue-700">
      <section className="relative bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight"
              >
                Discover Insights,
                <br />
                Share Knowledge
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground"
              >
                Explore a world of ideas, experiences, and expertise from our
                community of passionate writers.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <form onSubmit={handleSearch} className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-96 bg-background text-foreground"
                  />
                  <Button type="submit" size="icon">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center space-x-2"
              >
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Trending:</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTopicIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Badge variant="secondary" className="text-sm">
                      {trendingTopics[currentTopicIndex].icon}{" "}
                      {trendingTopics[currentTopicIndex].name}
                    </Badge>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Featured Posts
              </h2>
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {post.title}
                      </h3>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <Badge variant="outline">{post.category}</Badge>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-center"
              >
                <Button variant="link" className="text-primary">
                  View All Posts <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
