"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { posts } from "@/content/posts";

export default function Blog() {
  return (
    <section id="blog" className="bg-ed-black text-ed-offwhite py-24 lg:py-40">
      <div className="container-spacious">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-16 lg:mb-24">
          <div className="font-editorial-mono text-ed-grey lg:w-32 pt-2">
            05 / WRITING
          </div>
          <h2 className="font-editorial-display text-4xl lg:text-7xl">
            THE ARCHIVE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left filler/index column */}
          <div className="hidden lg:block col-span-3">
            <div className="sticky top-32 font-editorial-mono text-sm text-ed-grey-dark leading-relaxed">
              <p className="mb-6 text-ed-grey">INDEX — {posts.length} ARTICLES</p>
              <p>Thoughts on engineering, scale, and building reliable systems.</p>
            </div>
          </div>

          {/* Right content column */}
          <div className="col-span-1 lg:col-span-9 flex flex-col">
            <motion.div
              className="border-t border-ed-grey-dark"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {posts.map((post) => (
                <motion.a 
                  key={post.id}
                  href={`#post-${post.id}`}
                  variants={fadeInUp}
                  className="block grid grid-cols-1 md:grid-cols-12 gap-8 py-12 lg:py-16 border-b border-ed-grey-dark hover:bg-ed-offwhite/5 transition-colors group"
                >
                  {/* Meta */}
                  <div className="col-span-1 md:col-span-3 flex flex-col justify-start">
                    <span className="font-editorial-mono text-ed-accent text-sm mb-2">{post.date}</span>
                    <span className="font-editorial-mono text-ed-grey-dark text-xs">{post.readTime}</span>
                  </div>
                  {/* Title & Excerpt */}
                  <div className="col-span-1 md:col-span-9">
                    <h3 className="font-editorial-display text-3xl md:text-5xl mb-6 group-hover:text-ed-accent transition-colors leading-[1.1]">
                      {post.title}
                    </h3>
                    <p className="font-editorial-body text-lg text-ed-grey max-w-2xl leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
