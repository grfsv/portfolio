import { Header } from './Header';
import { About } from './About';
import { Projects } from './Projects';
import { Footer } from './Footer';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="pt-16">
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Welcome to My Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                サーバーサイドを軸に、モバイルやフロントエンド開発も学んでいます。
              </p>
            </div>
          </div>
        </section>

        <About />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}