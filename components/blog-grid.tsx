// 'use client'
//
// import { motion } from 'framer-motion'
// import { Card } from "@/components/ui/card"
// import Image from 'next/image'
//
// const posts = [
//   {
//     title: "How to optimize your React components",
//     excerpt: "Learn the best practices for optimizing React component performance",
//     image: "/placeholder.svg?height=400&width=600",
//     date: "Jan 15, 2024",
//     readTime: "5 min read"
//   },
//   // Add more blog posts...
// ]
//
// export default function BlogGrid() {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-12">
//           <motion.h2
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold"
//           >
//             Latest Articles
//           </motion.h2>
//           <motion.a
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             href="#"
//             className="text-primary hover:underline"
//           >
//             View All
//           </motion.a>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post, i) => (
//             <motion.div
//               key={post.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden group cursor-pointer">
//                 <div className="relative h-48">
//                   <Image
//                     src={post.image || "/placeholder.svg"}
//                     alt={post.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
//                     <span>{post.date}</span>
//                     <span>{post.readTime}</span>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
//                     {post.title}
//                   </h3>
//                   <p className="text-muted-foreground">
//                     {post.excerpt}
//                   </p>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
//
