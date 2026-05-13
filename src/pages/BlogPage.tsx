import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";
import FunDecorations from "@/components/FunDecorations";

const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 relative">
        <FunDecorations />
        <section className="section-padding min-h-[60vh] flex items-center">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <AnimatedSection>
                <h1 className="heading-xl mb-6">{t("blog.title")}</h1>
              </AnimatedSection>
              <AnimatedText delay={0.1}>
                <p className="body-lg text-subtle mb-8">{t("blog.subtitle")}</p>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <div className="inline-flex items-center justify-center px-6 py-4 bg-secondary/50 border border-border/60/60 rounded-xl">
                  <p className="text-muted-foreground font-medium">
                    {t("blog.comingSoon")}
                  </p>
                </div>
              </AnimatedText>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;