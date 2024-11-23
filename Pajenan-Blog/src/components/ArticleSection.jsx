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
import authorImage from "../assets/author-image.jpeg";
import {blogPosts} from "../data/blogPosts";


export function BlogCard({image,category,title,description,author,date}) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img className="w-full h-full object-cover rounded-md" src={image} alt={title}/>
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">{category}
          </span>
        </div>
        <a href="#" >
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
          {description}
          </h2>
        </a>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
        Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.</p>
        <div className="flex items-center text-sm">
          <img className="w-8 h-8 rounded-full mr-2" src={authorImage} alt={author} />
          <span>Thompson P.</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>11 September 2024</span>
        </div>
      </div>
    </div>
  );
  }
  
export function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
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
          {categories.map((item,index) => {
                return (
                  <SelectItem  value={index}>
                    {item}
                  </SelectItem>
                );
              })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    
    </div>
    {/* เรนเดอร์จาก data */}
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
   {blogPosts.map((item,index) => (
    <BlogCard
        key={index} 
        image={item.image}
        category={item.category}
        title={item.title}
        description={item.description}
        author={item.author}
        date={item.date}
    />
     ))};

      </article>


    </>
  );
}


export default ArticleSection;
