import type { Project } from '~/types/project';

export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Juninry",
    description: "児童、保護者、教師の円滑なコミュニケーションのためのモバイルアプリケーション",
    longDescription:"子供の頑張りを可視化するための学習サポートアプリです。学校や塾の宿題やお知らせや、家庭でのお手伝いを一元管理できます。子どもがモチベーション位置できるように、ご褒美の宝箱などの仕組みを導入しました。",
    images: [
      "https://images.grfsv.net/Frame_4.png",
    ],
    technologies: ["Go", "MySQL", "Dart/Flutter", "SQLite"],
    githubUrl: "https://github.com/juninry",
    category: "mobile",
    featured: true,
    completedAt: new Date("2024-10-01"),
  },
  {
    id: "2",
    title: "光る！！鳴る！！DX雨傘刀！！",
    description: "傘と腕に装着する忘れ物防止デバイスに小学生の夢を詰め込みました。",
    longDescription:
      "傘と腕に装着するデバイスをBLE通信で、連携させることで、傘の置き忘れや盗難を防止します。さらに、小学生の夢を叶えるために、傘を振ると、光ったり、音が鳴ったりする機能も搭載しました。腕に装着したデバイスを操作することで、必殺技も発動できます！",
    images: ["https://images.grfsv.net/sword.jpg"],
    technologies: ["C++"],
    otherLink: "https://protopedia.net/prototype/5398",
    category: "IoT",
    featured: false,
    completedAt: new Date("2024-07-01"),
  },
  {
    id: "3",
    title: "Food Shuffle",
    description: "飲食店のレビューをユーザー同士の街でのすれ違いによって交換するモバイルアプリケーション",
    longDescription: "レビューの入手頻度を制限することによって、サクラビューの発生を抑制し、信頼性の高いレビューを提供することを目指しています。",
    images: ["https://images.grfsv.net/food-shuffle.png"],
    technologies: ["Go", "MySQL", "Dart/Flutter", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Doremifa-donuts",
    category: "mobile",
    featured: true,
    completedAt: new Date("2025-02-01"),
  },
  {
    id: "4",
    title: "すとれびゅ！",
    description: "Food Shuffleでの課題を解決するために開発中のモバイルアプリケーション",
    longDescription:
      "Food Shuffleでの課題を解決するために開発しています。位置情報のサーバへの送信の問題を解決するためBLEのアドバタイズを利用して、ユーザー間のすれ違いを実現。",
    images: [],
    technologies: ["Kotlin", "PostgreSQL", "nginx", "Firebase Authentication", "Swift"],
    githubUrl: "https://github.com/kimetaato/streview-sv",
    category: "mobile",
    featured: false,
    completedAt: "開発中",
  },
  {
    id: "5",
    title: "梅チカナビ",
    description: "梅田駅の地下専用ナビゲーションアプリ。Jetpack Composeで構築。",
    longDescription:
      "GPSの利用できない地下街でのナビゲーションを支援するアプリです。Wi-Fiの電波強度を利用して現在地を推定し、目的地までのルート案内を提供します。",
    images: ["https://images.grfsv.net/umetika-navi.png"],
    technologies: ["Kotlin", "Jetpack Compose", "TypeScript", "hono", "Fusion360"],
    category: "mobile",
    featured: false,
    completedAt: new Date("2025-03-01"),
  },
  {
    id: "6",
    title: "QuickMarkD",
    description: "ショートカットでどこでも開けるMarkdown形式のメモアプリ、起動した場所を元にメモを自動分類。",
    longDescription:
      "ショートカットからどこでも起動できるMarkdown形式のメモアプリです。起動した場所やメモの内容をApple Intelligenceを利用して、安全にメモを分類し管理できます。",
    images: [],
    technologies: ["Swift"],
    githubUrl: "https://github.com/kimetaato/QuickMarkD",
    category: "desktop",
    featured: false,
    completedAt: "開発中",
  },
  {
    id: "7",
    title: "ポートフォリオサイト",
    description: "React Routerで構築したレスポンシブなポートフォリオサイト。",
    longDescription:
      "個人のポートフォリオサイトです。React Routerを使用してシングルページアプリケーションとして構築し、Tailwind CSSでスタイリングしました。cloudflare Pagesでホスティングしています。",
    images: [],
    technologies: ["TypeScript", "React", "Cloudflare Pages"],
    githubUrl: "https://github.com/grfsv/portfolio",
    category: "web",
    featured: false,
    completedAt: "開発中",
  },
];

export function getProjectById(id: string): Project | undefined {
  return sampleProjects.find(project => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return sampleProjects.filter(project => project.featured);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return sampleProjects.filter(project => project.category === category);
}