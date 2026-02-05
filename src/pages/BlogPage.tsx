 import Navigation from "@/components/Navigation";
 import Footer from "@/components/Footer";
 
 const blogPosts = [
   {
     title: "Jak poznat, že firma potřebuje restrukturalizaci",
     excerpt: "Signály, které by vás měly varovat, a kdy je správný čas jednat.",
     date: "15. ledna 2024",
     category: "Organizace",
   },
   {
     title: "5 chyb při zavádění procesů",
     excerpt: "Nejčastější omyly, které firmy dělají při standardizaci workflow.",
     date: "8. ledna 2024",
     category: "Procesy",
   },
   {
     title: "Leadership v době změny",
     excerpt: "Jak vést tým, když se firma transformuje.",
     date: "2. ledna 2024",
     category: "Leadership",
   },
 ];
 
 const BlogPage = () => {
   return (
     <div className="min-h-screen bg-background">
       <Navigation />
       <main className="pt-20">
         <section className="section-padding">
           <div className="section-container">
             <h1 className="heading-xl mb-16 text-center">Blog</h1>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {blogPosts.map((post, index) => (
                 <article
                   key={index}
                   className="bg-background border border-divider rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                 >
                   <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                     {post.category}
                   </span>
                   <h2 className="heading-sm mt-2 mb-3">{post.title}</h2>
                   <p className="body-sm text-subtle mb-4">{post.excerpt}</p>
                   <span className="text-xs text-muted-foreground">{post.date}</span>
                 </article>
               ))}
             </div>
           </div>
         </section>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default BlogPage;