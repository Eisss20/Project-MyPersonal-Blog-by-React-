import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function BlogCard({image, category, title, description, author, date }) {
  return (
    <div className="flex flex-col gap-4">
    <a href="#" className="relative h-[212px] sm:h-[360px]">
      <img className="w-full h-full object-cover rounded-md" src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e739huvlalbfz9eynysc.jpg" alt="Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do"/>
    </a>
    <div className="flex flex-col">
      <div className="flex">
        <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">Cat
        </span>
      </div>
      <a href="#" >
        <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
        Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do
        </h2>
      </a>
      <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
      Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.</p>
      <div className="flex items-center text-sm">
        <img className="w-8 h-8 rounded-full mr-2" src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" alt="Tomson P." />
        <span>Thompson P.</span>
        <span className="mx-2 text-gray-300">|</span>
        <span>11 September 2024</span>
      </div>
    </div>
  </div>
  );
  }

export function ArticleSection() {
  return (
    <>
    <h1 className="pl-5 font-semibold text-3xl  my-3"> Latest articles </h1>
    <div className="space-x-4 relative  pt-1 py-4 ">
    <Input type="text" placeholder="Search"className="mr-4 ml-4 mt-4 mt w-[21.5rem] bg-background border border-input"/>
      <Search className="absolute right-8 top-20 text-black transform  -translate-y-12 text-muted-foreground h-5 w-5" />
    <div className=" w-[21.5rem] ">
      <div className="pt-2">
        <label htmlFor="category" className="text-sm font-medium text-gray-700">
          <span className="text-sm "> Category </span> 
        </label>
      </div>
      <Select>
        <SelectTrigger id="category" className="  border">
          <SelectValue placeholder="Highlight" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="highlight">Highlight</SelectItem>
            <SelectItem value="category2">Category 2</SelectItem>
            <SelectItem value="category3">Category 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    
    </div>
    </>
  );
}



export default ArticleSection;
