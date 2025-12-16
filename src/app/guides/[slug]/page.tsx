import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import { getGuideBySlug, getAllGuides } from "@/lib/guides";
import { ArrowLeft, Calendar, User } from "lucide-react";

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuidePost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug }  = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-deep-charcoal text-white pt-24 pb-20 px-4">
      <Navbar />
      
      <article className="max-w-3xl mx-auto">
        <Link href="/guides" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Guides
        </Link>
        
        {/* Header */}
        <div className="mb-10">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full text-xs font-semibold">
                    {guide.category}
                </span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {guide.date}</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {guide.author}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {guide.title}
            </h1>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <Image src={guide.image} alt={guide.title} fill className="object-cover" priority />
            </div>
        </div>

        {/* Content (Simple Markdown Renderer) */}
        <div className="prose prose-invert prose-lg max-w-none">
            {guide.content.split('\n').map((line, index) => {
                // Heuristics for basic markdown
                if (line.startsWith('# ')) return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>;
                if (line.startsWith('## ')) return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-electric-blue">{line.replace('## ', '')}</h2>;
                if (line.startsWith('- ')) return <li key={index} className="ml-4 mb-2">{line.replace('- ', '')}</li>;
                if (line.match(/^\d+\./)) return <li key={index} className="ml-4 mb-2 list-decimal">{line.replace(/^\d+\./, '')}</li>;
                if (line.trim() === '') return <br key={index} />;
                
                return <p key={index} className="mb-4 text-gray-300 leading-relaxed">{line}</p>;
            })}
        </div>

      </article>
    </main>
  );
}
