"use client";

import { ArrowUpRight, BookOpen } from "lucide-react";
import { posts } from "@/content/posts";

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 border-b border-[#e5e5e5]">
      <h2 className="font-serif text-3xl md:text-4xl text-[#242424] font-normal tracking-tight">
        Technical Writing & Articles
      </h2>
      <hr className="my-6 border-[#e5e5e5]" />

      <div className="space-y-12">
        {posts.map((post, idx) => {
          const isLast = idx === posts.length - 1;

          return (
            <div key={post.id} className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              {/* Mobile Timeline connector */}
              <div className="progcirc_md" />
              {!isLast && <div className="progline_md" />}

              {/* Left Column: Date & Read Time */}
              <div className="md:col-span-4 lg:col-span-3 pl-8 md:pl-0 md:pr-8 md:text-right relative">
                {/* Desktop Timeline connector */}
                <div className="progcirc" />
                {!isLast && <div className="progline" />}

                <p className="minhead text-sm md:text-base">{post.date}</p>
                <p className="font-mono text-xs text-[#d55121] mt-1 font-medium">{post.readTime} read</p>
              </div>

              {/* Right Column: Title, Excerpt & Link */}
              <div className="md:col-span-8 lg:col-span-9 pl-8 md:pl-6 space-y-2">
                <h3 className="minhead text-base md:text-lg">
                  <a
                    href={`#post-${post.id}`}
                    className="hover:text-[#ab5232] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{post.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#d55121]" />
                  </a>
                </h3>

                <p className="text-[#555555] text-sm md:text-[0.95rem] leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="pt-1">
                  <a
                    href={`#post-${post.id}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#d55121] hover:text-[#ab5232] font-medium"
                  >
                    <BookOpen className="w-3 h-3" /> Read publication &rarr;
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
