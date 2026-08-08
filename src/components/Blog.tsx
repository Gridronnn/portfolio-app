"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { posts } from "@/content/posts";

export default function Blog() {
  return (
    <section id="blog" className="w-full bg-white text-black min-h-screen py-24 px-8 border-b border-black/20">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 w-full max-w-[1800px] mx-auto">
        
        {/* Left Column: Massive Title */}
        <div className="w-full lg:w-1/3 flex flex-col pt-2">
          <h2 className="heading-pk text-[8vw] lg:text-[6vw] leading-[0.85] tracking-tighter mb-4">
            WRITING<br/>ARCHIVE
          </h2>
          <p className="body-pk text-sm text-black/50 font-bold">
            {posts[0]?.date || "Nov 15, 2024"}
          </p>
        </div>

        {/* Right Column: Post List */}
        <div className="w-full lg:w-2/3 flex flex-col gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="flex flex-col gap-16"
          >
            {posts.map((post, idx) => (
              <motion.article 
                key={post.id} 
                variants={fadeInUp}
                className="flex flex-col group cursor-pointer"
              >
                {/* For the first post, we show the excerpt above the title according to the screenshot */}
                {idx === 0 && (
                  <p className="body-pk text-sm text-black/60 mb-2 max-w-2xl">
                    {post.excerpt}
                  </p>
                )}
                <h3 className="heading-pk text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-none group-hover:opacity-60 transition-opacity">
                  {post.title}
                </h3>
              </motion.article>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
