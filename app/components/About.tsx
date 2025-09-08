export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">自己紹介</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="w-64 h-64 mx-auto md:mx-0 mb-6 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">柳田 悠之介</h3>
              <p className="text-lg text-blue-400 mb-6">フルスタックエンジニア</p>

              <div className="text-gray-300 space-y-4 mb-8">
                <p>
                  開発に情熱を持つエンジニアです。<br/>
                  開発の企画などにも興味を持ち、積極的にアイデアを出しています。
                </p>
                <p>システムアーキテクチャに興味を持ち、サーバーサイドではDDDを学習しながら、 開発を進めています。</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">主要スキル</h4>
                <div className="flex flex-wrap gap-2">
                  {["Go", "Kotlin", "typescript", "Dart/Flutter", "MySQL", "PostgreSQL", "Docker", "AWS", "Git"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}