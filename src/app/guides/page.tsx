import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { getAllGuides } from "@/lib/guides";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata = {
  title: "PC Building Guides - RigBuilders",
  description: "Expert tutorials and step-by-step guides for building your dream PC.",
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <main className="min-h-screen bg-deep-charcoal text-white pt-24 pb-20 px-4">
      <Navbar />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-white">
                Expert Guides
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Master the art of PC building with our comprehensive tutorials, from component selection to final assembly.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link 
                key={guide.slug} 
                href={`/guides/${guide.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-electric-blue/10 transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image 
                    src={guide.image} 
                    alt={guide.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                    {guide.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {guide.date}
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {guide.author}
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-electric-blue transition-colors">
                    {guide.title}
                </h2>
                
                <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {guide.excerpt}
                </p>

                <div className="flex items-center text-electric-blue text-sm font-semibold">
                    Read Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
