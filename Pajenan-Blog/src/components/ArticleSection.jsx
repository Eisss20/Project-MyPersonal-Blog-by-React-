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
    {/* เรนเดอร์จาก data */}
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        <BlogCard
          image={blogPosts[0].image}
          category={blogPosts[0].category}
          title={blogPosts[0].title}
          description={blogPosts[0].description}
          author={blogPosts[0].author}
          date={blogPosts[0].date}
        />
        <BlogCard
          image={blogPosts[1].image}
          category={blogPosts[1].category}
          title={blogPosts[1].title}
          description={blogPosts[1].description}
          author={blogPosts[1].author}
          date={blogPosts[1].date}
        />
        <BlogCard
          image={blogPosts[2].image}
          category={blogPosts[2].category}
          title={blogPosts[2].title}
          description={blogPosts[2].description}
          author={blogPosts[2].author}
          date={blogPosts[2].date}
        />
        <BlogCard
          image={blogPosts[3].image}
          category={blogPosts[3].category}
          title={blogPosts[3].title}
          description={blogPosts[3].description}
          author={blogPosts[3].author}
          date={blogPosts[3].date}
        />
        <BlogCard
          image={blogPosts[4].image}
          category={blogPosts[4].category}
          title={blogPosts[4].title}
          description={blogPosts[4].description}
          author={blogPosts[4].author}
          date={blogPosts[4].date}
        />
        <BlogCard
          image={blogPosts[5].image}
          category={blogPosts[5].category}
          title={blogPosts[5].title}
          description={blogPosts[5].description}
          author={blogPosts[5].author}
          date={blogPosts[5].date}
        />
      </article>


    </>
  );
}


export default ArticleSection;
