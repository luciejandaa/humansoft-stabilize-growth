 import Navigation from "@/components/Navigation";
 import Footer from "@/components/Footer";
 import { Button } from "@/components/ui/button";
 import { ArrowRight } from "lucide-react";
 
 const EvaluationPage = () => {
   return (
     <div className="min-h-screen bg-background">
       <Navigation />
       <main className="pt-20">
         <section className="section-padding">
           <div className="section-container">
             <div className="max-w-3xl mx-auto text-center">
               <h1 className="heading-xl mb-8">
                 Ohodnoťte svoji firmu
               </h1>
               <p className="body-lg text-subtle mb-12">
                 Zjistěte, jak na tom vaše firma je a kde jsou příležitosti ke zlepšení. 
                 Náš diagnostický nástroj vám pomůže identifikovat silné stránky i oblasti, 
                 které potřebují pozornost.
               </p>
               <Button variant="hero">
                 Spustit hodnocení
                 <ArrowRight className="ml-2" size={18} />
               </Button>
             </div>
           </div>
         </section>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default EvaluationPage;