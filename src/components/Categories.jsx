import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Code2, 
  Layout, 
  Database, 
  Cloud, 
  Cpu, 
  Shield, 
  Smartphone,
  Globe
} from "lucide-react"

const categories = [
  {
    name: "Programming",
    icon: Code2,
    description: "Tutorials and tips on various programming languages",
    color: "text-blue-500"
  },
  {
    name: "Web Development",
    icon: Layout,
    description: "Frontend and backend web development guides",
    color: "text-purple-500"
  },
  {
    name: "Database",
    icon: Database,
    description: "Database design and management",
    color: "text-green-500"
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    description: "Cloud platforms and services",
    color: "text-orange-500"
  },
  {
    name: "AI & ML",
    icon: Cpu,
    description: "Artificial Intelligence and Machine Learning",
    color: "text-red-500"
  },
  {
    name: "Cybersecurity",
    icon: Shield,
    description: "Security best practices and guides",
    color: "text-yellow-500"
  },
  {
    name: "Mobile Dev",
    icon: Smartphone,
    description: "Mobile app development tutorials",
    color: "text-pink-500"
  },
  {
    name: "DevOps",
    icon: Globe,
    description: "Development operations and deployment",
    color: "text-indigo-500"
  }
]

export function Categories() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Explore Topics</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover content across various technology categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  className="w-full h-auto p-6 flex flex-col items-center gap-4 hover:bg-secondary/10"
                >
                  <Icon className={`h-8 w-8 ${category.color}`} />
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 